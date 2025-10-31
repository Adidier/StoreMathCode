"use client";

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
        return <div>Error al cargar los productos</div>
    } else {
        if (servicios.length === 0) { return <div>No hay servicios disponibles</div> }
        else {
            return (
                <>
                    <main className="grid place-items-center p-5">
                        <CatalogView data={servicios.data} />
                    </main>
                    <Footer />
                </>
            );
        }
    }
}
