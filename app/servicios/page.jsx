import { fetchServicios } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";
import { Footer } from "../ui/Footer";

export default async function Productos() {
    const servicios = await fetchServicios();
    if (servicios === null) {
        return <div>Error al cargar los productos</div>
    } else {
        if (servicios.length === 0) { return <div>No hay servicios disponibles</div> }
        else {
            return (
                <>
                    <main>
                        <CatalogView data={servicios.data} />
                    </main>
                    <Footer />
                </>
            );
        }
    }

}
