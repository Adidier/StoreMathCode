import { fetchProductos } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";
import { SpecialProductBanner } from "../ui/SpecialProductBanner";
import { Footer } from "../ui/Footer";

export default async function Productos() {
    const productos = await fetchProductos();
    if (productos === null) {
        return <div>Error al cargar los productos</div>
    } else {
        if (productos.length === 0) { return <div>No hay productos</div> }
        else {
            return (
                <>
                    <main className="grid place-items-center p-5">
                        <CatalogView data={productos.data} />
                        <SpecialProductBanner />
                    </main>
                    <Footer />
                </>
            );
        }
    }
}
