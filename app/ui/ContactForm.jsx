import Link from "next/link"
import Image from "next/image"

export function ContactForm() {
  return (
    <div className="md:grid md:grid-cols-2 gap-2 md:gap-10 p-10 md:rounded-xs shadow w-full md:w-1/2 bg-gray-50">
      <div id="contactForm" className="flex flex-col gap-1 md:gap-7 md:max-w-1/2">
        <header>
          <h1 className="text-4xl">Contactanos</h1>
        </header>
        <p className="text-lg">Escribenos un mensaje</p>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="contact_name" className="text-xl font-medium">Nombre</label>
            <input id="contact_name" type="text" className="border rounded-sm border-gray-300 min-h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xl font-medium">Email</label>
            <input id="email" type="email" className="border rounded-sm border-gray-300 min-h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="telefono" className="text-xl font-medium">Telefono</label>
            <input id="telefono" type="tel" className="border rounded-sm border-gray-300 min-h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="mensaje" className="text-xl font-medium">Mensaje</label>
            <textarea id="mensaje" className="border rounded-sm border-gray-300 min-h-10 resize-none"></textarea>
          </div>
          <button className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-gray-400 max-w-40">Enviar</button>
        </form>
      </div>
      <div id="infoAndMaps" className="hidden md:flex flex-col">
        <div className="relative">
          <div className="relative pb-[75%] h-0 overflow-hidden">
            <iframe className="absolute top-0 left-0 w-full h-full border-0" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=Pino+Suarez+606-B%2C+Pachuca+de+Soto%2C+Mexico&output=embed">
            </iframe>
          </div>
          <Link href="https://mapembeds.com" rel="noopener" target="_blank" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>mapembeds.com</Link>
        </div>
        <div className="flex flex-wrap gap-8 m-12 text-xl">
          <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="mailto:flashbacksuc1@gmail.com">
            <Image src="/mail.svg" alt="Logo" width={25} height={25} className="" />
            flashbacksuc1@gmail.com
          </Link>
          <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" target="_blank" href="https://www.facebook.com/share/1CfShDMMYT/">
            <Image src="/facebook.svg" alt="Logo" width={25} height={25} className="" />
            Facebook
          </Link>
          <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="https://wa.me/527711072336">
            <Image src="/whatsapp.svg" alt="Logo" width={25} height={25} className="" />
            7717496737
          </Link>
          <Link className="rounded-lg flex flex-wrap gap-1.5 items-center" href="tel:+527711072336">
            <Image src="/phone.svg" alt="Logo" width={25} height={25} className="" />
            7711072336
          </Link>
        </div>
      </div>
    </div>
  )
}

