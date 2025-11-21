import { fetchByQuery } from "@/lib/data";
import { CatalogView } from "../ui/CatalogView";
import { Footer } from "../ui/Footer";

export default async function SearchTermPage({ params }) {
  const { searchTerm } = await params;
  const items = await fetchByQuery(searchTerm);

  if (items.data.length === 0) {
    return (
      <>
        <main className="grid place-content-center bg-gray-100 h-full">
          <p className="rounded-md bg-gray-50 p-5 text-lg md:text-xl font-bold shadow-md">No pudimos encontrar lo que buscabas</p>
        </main>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <main className="grid place-items-center">
          <CatalogView data={items.data} />
        </main>
        <Footer />
      </>
    );
  }
}
