import { ItemCard } from "./ItemCard";

export function CatalogView({
    data
}) {
    return (
        <div className="grid grid-cols-2 md:grid md:grid-cols-3 m-3 gap-1 place-self-center md:gap-2.5 md:m-10 lg:grid-cols-4">
            {
                data.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))
            }
        </div>
    );
};
