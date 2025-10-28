import Link from "next/link"
import Image from "next/image"

export function ContactForm() {
    return (
        <div className="grid grid-cols-2 gap-10 ml-96 mr-96 mt-20 mb-40">
            <div className="flex flex-col gap-7">
                <header>
                    <h1 className="text-4xl">Contactanos</h1>
                </header>
                <p className="text-lg">Escribenos un mensaje</p>
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="contact_name" className="text-xl font-medium">Nombre</label>
                        <input id="contact_name" type="text" className="border-[1px] rounded-sm border-gray-300 min-h-8" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xl font-medium">Email</label>
                        <input id="email" type="email" className="border-[1px] rounded-sm border-gray-300 min-h-8" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="telefono" className="text-xl font-medium">Telefono</label>
                        <input id="telefono" type="tel" className="border-[1px] rounded-sm border-gray-300 min-h-8" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="mensaje" className="text-xl font-medium">Mensaje</label>
                        <textarea id="mensaje" className="border-[1px] rounded-sm border-gray-300 min-h-10 resize-none"></textarea>
                    </div>
                    <button className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-gray-400 max-w-[10rem]">Enviar</button>
                </form>
            </div>
            <div className="flex flex-col">
                <iframe src="https://www.facebook.com/fundacion.hidalguenseac.5" />
                <div className="flex flex-wrap gap-8 m-12 text-xl">
                    <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="/">
                        <Image src="/mail.svg" alt="Logo" width={25} height={25} className="" />
                        correo@mail.es
                    </Link>
                    <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="/">
                        <Image src="/facebook.svg" alt="Logo" width={25} height={25} className="" />
                        Facebook
                    </Link>
                    <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="/">
                        <Image src="/whatsapp.svg" alt="Logo" width={25} height={25} className="" />
                        WhatsApp
                    </Link>
                    <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="/">
                        <Image src="/phone.svg" alt="Logo" width={25} height={25} className="" />
                        Telefono
                    </Link>
                </div>
            </div>
        </div>
    )
}