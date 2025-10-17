import { fetchProductos } from "@/lib/data";

export default async function Productos() {
    const products = await fetchProductos();
    if (products === null) {
        return <div>Error al cargar los productos</div>
    } else {
        if (products.length === 0) { return <div>No hay productos</div> }
        else {
            return (
                <div>

                </div>
            );
        }
    }
}
