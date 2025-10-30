import { Footer } from "./ui/Footer";

export default function Home() {
    return (
        <>
            <main className="flex flex-col items-center pb-20 gap-16 sm:p-20 overflow-x-hidden">
                <section>
                    <header>
                        <h1 className="text-4xl font-bold mb-6 text-sky-600">Descuentos</h1>
                    </header>
                </section>
                <section>
                    <header>
                        <h1 className="text-4xl font-bold mb-6 text-sky-600">Populares</h1>
                    </header>
                </section>
                <section>
                    <header>
                        <h1 className="text-4xl font-bold mb-6 text-sky-600">Nuevos</h1>
                    </header>
                </section>
            </main>
            <Footer />
        </>
    );
}
