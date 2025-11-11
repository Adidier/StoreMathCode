import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-stone-50 border-t-6 border-sky-500 flex gap-10 flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-10 pt-10 w-6xl justify-items-center">
                <div>
                    <header>
                        <h1 className="text-xl mb-5">
                            MENU
                        </h1>
                    </header>
                    <div className="flex flex-col gap-2 font-extralight text-sm">
                        <Link className="rounded-lg hover:text-amber-400" href="/">Inicio</Link>
                        <Link className="rounded-lg hover:text-amber-400" href="/productos">Productos</Link>
                        <Link className="rounded-lg hover:text-amber-400" href="/">Servicios</Link>
                        <Link className="rounded-lg hover:text-amber-400" href="/contacto">Contacto</Link>
                    </div>
                </div>
                <div>
                    <header className="">
                        <h1 className="text-xl mb-5">
                            CLIENTES
                        </h1>
                    </header>
                    <div className="flex flex-col font-extralight text-sm">
                        <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/portal">Portal</Link>
                        <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Comprobante</Link>
                        <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Estatus</Link>
                        <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Pago</Link>
                    </div>
                </div>
                <div>
                    <header>
                        <h1 className="text-xl mb-5">
                            CONTACTO
                        </h1>
                    </header>
                    <div className="flex flex-col gap-2 font-extralight text-sm">
                        <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="mailto:flashbacksuc1@gmail.com">
                            <Image src="/mail_white.svg" alt="Logo" width={20} height={20} className="" />
                            flashbacksuc1@gmail.com
                        </Link>
                        <Link className="rounded-lg flex flex-wrap gap-1 items-center" target="_blank" href="https://www.facebook.com/share/1CfShDMMYT/">
                            <Image src="/facebook_white.svg" alt="Logo" width={20} height={20} className="" />
                            Facebook
                        </Link>
                        <Link className="rounded-lg flex flex-wrap gap-1 items-center" target="_blank" href="https://www.instagram.com/flashback_pachuca/">
                            <Image src="/instagram_white.svg" alt="Logo" width={20} height={20} className="" />
                            Instagram
                        </Link>
                        {/* <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="/">
                            <Image src="/youtube_white.svg" alt="Logo" width={20} height={20} className="" />
                            YouTube
                        </Link> */}
                        <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="https://wa.me/527711072336">
                            <Image src="/whatsapp_white.svg" alt="Logo" width={20} height={20} className="" />
                            7717496737
                        </Link>
                        <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="tel:+527711072336">
                            <Image src="/phone_white.svg" alt="Logo" width={20} height={20} className="" />
                            7711072336
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 items-center pb-7 w-6xl">
                <Image src="/logoFlashback.webp" alt="Logo" width={253} height={91} className="ml-8 mr-8 mt-1.5 mb-1.5" />
                <div className="flex flex-wrap font-bold text-sm">
                    <Link className="p-1.5 rounded-lg" href="/terminos">Condiciones generales de venta</Link>
                    <Link className="p-1.5 rounded-lg" href="/privacidad">Aviso de privacidad</Link>
                    <Link className="p-1.5 rounded-lg" href="/terminos_paquetes">Términos y condiciones para paquetes de graduación</Link>
                </div>
            </div>
        </footer>
    )
}
