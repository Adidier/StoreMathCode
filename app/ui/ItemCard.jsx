import { fetchPrice } from "@/lib/data";
import { AddToCartBtn } from "@/app/ui/AddToCartBtn";
import Image from "next/image";

export function ItemCard({ ...props }) {
    const { item } = props;
    return (
        <div key={item.d} className="flex flex-col bg-gray-50 rounded-b-md shadow hover:shadow-md">
            <Image src={item.images[0]} alt={item.name} width={427} height={427} className="object-cover rounded-t-md mb-2" />
            <div className="flex flex-col h-full justify-end p-1">
                <p className="text-xl font-bold mb-2">{item.name}</p>
                <p className="text-lg font-bold p-1">{fetchPrice(item.default_price)}</p>
                {/* <p className="truncate">{item.description}</p> */}
                <AddToCartBtn item={item} />
            </div>
        </div>
    )
}
