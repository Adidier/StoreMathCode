import Image from "next/image";
import Link from "next/link";

export function NavBar() {
    return (
        <nav className="flex flex-col bg-stone-50 sticky top-0 z-10 shadow-md">
            {/* <div className="grid grid-cols-2 font-light text-xs pt-2 pb-2 bg-sky-600 text-white p-2">
                <div className="justify-self-center flex gap-7">
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/faq">PREGUNTAS FREQUENTES</Link>
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">TUTORIALES</Link>
                </div>
                <div className="justify-self-center flex gap-7">
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/portal">PORTAL</Link>
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">SUBIR COMPROBANTE</Link>
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">ESTATUS</Link>
                    <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">PAGAR</Link>
                </div>
            </div> */}
            <div className="flex flex-row gap-9 justify-center items-center font-light text-sm">
                <Image src="/logoFlashback.webp" alt="Logo" width={253} height={91} className="ml-8 mr-8 mt-1.5 mb-1.5" />
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">INICIO</Link>    
                {/* <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/nosotros">NOSOTROS</Link> */}
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/productos">PRODUCTOS</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/servicios">SERVICIOS</Link>
                {/* <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">EVENTOS SOCIALES</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/galeria">GALERIA</Link>
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">TIENDA</Link> */}
                <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/contacto">CONTACTO</Link>
            </div>
        </nav>
    );
}
