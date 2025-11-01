import { fetchServicios } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";
import { Footer } from "@/app/ui/Footer";

export default async function Home() {
    const servicios = await fetchServicios();
    if (servicios === null) {
        return (
            <>
                <main className="grid justify-items-center items-center bg-gray-100">
                    <p className="rounded-md bg-gray-50 p-5 text-xl font-bold shadow-md">No tenemos servicios disponibles</p>
                </main>
                <Footer />
            </>
        );
    } else {
        if (servicios.length === 0) { return <div>No hay servicios disponibles</div> }
        else {
            return (
                <>
                    <main className="flex flex-col place-items-center bg-gray-100">
                        <CatalogView data={servicios.data} />
                    </main>
                    <Footer />
                </>
            );
        }
    }
}
