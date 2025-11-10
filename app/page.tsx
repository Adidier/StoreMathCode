import { generateClient } from "aws-amplify/data";
import { fetchServicios } from "@/lib/data";
import { CatalogView } from "@/app/ui/CatalogView";
import { Footer } from "@/app/ui/Footer";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default async function App() {
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
        if (servicios.data.length === 0) { return <div>No hay servicios disponibles</div> }
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
