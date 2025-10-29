import { fetchPrice } from "@/lib/data";
import { AddToCartBtn } from "@/app/ui/AddToCartBtn";
import Image from "next/image";

export function ItemCard({ ...props }) {
    const { item } = props;
    return (
        <div key={item.d} className="flex flex-col">
            <Image src={item.images[0]} alt={item.name} width={427} height={427} className="object-cover rounded-md mb-2" />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <h3 className="text-lg  font-bold p-1">{fetchPrice(item.default_price)}</h3>
            <p className="truncate">{item.description}</p>
            <AddToCartBtn item={item} />
        </div>
    )
}