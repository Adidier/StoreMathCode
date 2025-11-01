import { fetchProductos } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";
import { SpecialProductBanner } from "../ui/SpecialProductBanner";
import { Footer } from "../ui/Footer";

export default async function Productos() {
    const productos = await fetchProductos();
    if (productos === null) {
        return (
            <>
                <main className="grid justify-items-center items-center bg-gray-100">
                    <p className="rounded-md bg-gray-50 p-5 text-xl font-bold shadow-md">No tenemos productos disponibles</p>
                </main>
                <Footer />
            </>
        );
    } else {
        if (productos.length === 0) { return <div>No hay productos</div> }
        else {
            return (
                <>
                    <main className="flex flex-col place-items-center bg-gray-100">
                        <CatalogView data={productos.data} />
                        <SpecialProductBanner />
                    </main>
                    <Footer />
                </>
            );
        }
    }
}
