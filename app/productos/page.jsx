import { fetchProductos } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";

export default async function Productos() {
    const productos = await fetchProductos();
    if (productos === null) {
        return <div>Error al cargar los productos</div>
    } else {
        if (productos.length === 0) { return <div>No hay productos</div> }
        else {
            return (
                <CatalogView data={productos.data} />
            );
        }
    }
}
