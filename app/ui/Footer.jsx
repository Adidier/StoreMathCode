import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="bg-black text-stone-50 items-center justify-center">
      <div id="navigation" className="hidden md:flex md:flex-row py-5 gap-10 justify-center">
        <div className="px-10">
          <header>
            <h1 className="text-xl mb-5">
              MENU
            </h1>
          </header>
          <div className="flex flex-col gap-2 font-extralight text-sm">
            <Link className="rounded-lg hover:text-amber-400" href="/">Inicio</Link>
            <Link className="rounded-lg hover:text-amber-400" href="/nosotros">Nosotros</Link>
            <Link className="rounded-lg hover:text-amber-400" href="/galeria">Galeria</Link>
            <Link className="rounded-lg hover:text-amber-400" href="https://flashback-prod.d2xdk7rafd2luk.amplifyapp.com">Tienda</Link>
            <Link className="rounded-lg hover:text-amber-400" href="/contacto">Contacto</Link>
          </div>
        </div>
        <div className="px-10">
          <header className="">
            <h1 className="text-xl mb-5">
              CLIENTES
            </h1>
          </header>
          <div className="flex flex-col font-extralight text-sm">
            {/* <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/portal">Portal</Link> */}
            {/* <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Comprobante</Link> */}
            {/* <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Estatus</Link> */}
            {/* <Link className="p-1.5 rounded-lg hover:text-gray-300" href="/">Pago</Link> */}
          </div>
        </div>
        <div className="px-10">
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
            <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="https://wa.me/527711072336">
              <Image src="/whatsapp_white.svg" alt="Logo" width={20} height={20} className="" />
              7717496737
            </Link>
            <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="tel:+527711072336">
              <Image src="/phone_white.svg" alt="Logo" width={20} height={20} className="" />
              7711072336
            </Link>
            <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="/contacto">
              <Image src="/mail_white.svg" alt="Logo" width={20} height={20} className="" />
              ¡Mandanos un mensaje!
            </Link>
          </div>
        </div>
      </div>
      <div id="termsAndLegal" className="flex flex-col md:flex-row p-2 md:pt-5 items-center justify-center md:gap-5">
        <Image src="/logoFlashback_desktop.webp" alt="Logo" width={253} height={91} className="p-2 md:p-0 md:my-1.5" />
        <div className="flex flex-wrap justify-around text-sm gap-2 md:text-sm">
          <Link className="" href="/terminos">Condiciones generales de venta</Link>
          <Link className="" href="/privacidad">Aviso de privacidad</Link>
          <Link className="" href="/terminos_paquetes">Términos y condiciones para paquetes de graduación</Link>
        </div>
      </div>
    </footer>
  );
}

