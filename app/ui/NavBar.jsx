import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function NavBar() {
    return (
        <nav className="flex flex-col bg-stone-50 sticky top-0 z-10 shadow-md">
            <div className="flex flex-row gap-9 justify-center items-center font-light text-sm">
                <Image src="/logoFlashback_Banner.webp" alt="Logo" width={177} height={64} className="ml-8 mr-8 mt-1.5 mb-1.5" />
                <SearchBar />
            </div>
            <div className="flex flex-row justify-center font-light text-xs pt-2 pb-2 bg-sky-600 text-white p-2">
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">INICIO</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/productos">PRODUCTOS</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/servicios">SERVICIOS</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/carrito">CARRITO</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/contacto">CONTACTO</Link>
            </div>
        </nav>
    );
}
