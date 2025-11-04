import { fetchStoreItems } from "@/lib/data"
import { CatalogView } from "@/app/ui/CatalogView";
import { TableView } from "@/app/ui/ListView";
import Link from "next/link";

export default async function Admin() {
    const items = await fetchStoreItems();
    if (items === null) {
        return (
            <>
                No items
            </>
        );
    } else {
        return (
            <>
                <Link href="/admin/products/create" className="p-2 rounded-sm place-self-end m-10 bg-blue-500 text-gray-50 font-bold">Crear un nuevo producto</Link>
                <TableView data={items.data} />
            </>
        );
    }
}
