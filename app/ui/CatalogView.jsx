import { fetchPrice } from "@/lib/data";
import { AddToCartBtn } from "@/app/ui/AddToCartBtn";

export function CatalogView({
    data
}) {
    return (
        <div className="flex flex-col m-3 gap-1 place-self-center md:gap-2.5 md:m-6 md:grid md:grid-cols-3 lg:grid-cols-4">
            {
                data.map((item) => (
                    <div key={item.id} className="flex flex-col p-4 rounded-md border-1 border-gray-400 gap-3 shadow md:max-w-3xs">
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <h3 className="text-lg  font-bold p-1">${fetchPrice(item.default_price)}</h3>
                        <div>{item.description}</div>
                        <AddToCartBtn item={item} />
                    </div>
                ))
            }
        </div>
    );
};