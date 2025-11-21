"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function NavBar() {
  const path = usePathname()
  const adminRegex = /^\/admin/;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [path])

  const MobileMenu = () => {
    return (
      <div id="mobileNavMenu" className="z-20 fixed top-0 flex flex-col bg-stone-50 h-full w-full">
        <div id="mobileNavMenuHeader" className="flex flex-row justify-between items-center p-2">
          <Image src="/logoFlashback_mobile.webp" alt="Logo" width={126} height={45} className="md:hidden" />
          <button className="visible md:invisible mx-5" onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
            <Image src="/close.svg" alt="Menu Button" width={16} height={16} />
          </button>
        </div>
        <div id="mobileNvMenuLinks" className="font-bold text-lg flex flex-col px-5 py-2 gap-5">
          <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">SERVICIOS</Link>
          <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/productos">PRODUCTOS</Link>
          <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/carrito">CARRITO</Link>
          <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/contacto">CONTACTO</Link>
          <Link className="p-1.5 rounded-lg hover:text-amber-400" href="https://production.d31fjrkeuz0102.amplifyapp.com">SITIO PRINCIPAL</Link>
        </div>
      </div>
    )
  }
  if (adminRegex.test(path)) {
    return (
      <></>
    )
  } else {
    return (
      <>
        {
          mobileMenuVisible
            ?
            <MobileMenu />
            :
            null
        }
        <nav className="z-10 shadow-md bg-stone-50 sticky top-0">
          <div className="flex flex-row gap-9 justify-center items-center font-light p-2 md:p-0 text-sm">
            <Link href="/">
              <Image src="/logoFlashback_Banner.webp" alt="Logo" width={177} height={64} className="hidden md:block mx-8 my-1.5" />
            </Link>
            <Image src="/logoFlashback_mobile.webp" alt="Logo" width={126} height={45} className="md:hidden" />
            <SearchBar />
            <button className="visible md:invisible mx-5" onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
              <Image src="/menu.svg" alt="Menu Button" width={16} height={32} />
            </button>
          </div>
          <div className="hidden md:flex flex-row justify-center font-light text-xs pt-2 pb-2 bg-sky-600 text-white p-2">
            <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/">SERVICIOS</Link>
            <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/productos">PRODUCTOS</Link>
            <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/carrito">CARRITO</Link>
            <Link className="p-1.5 rounded-lg hover:text-amber-400" href="/contacto">CONTACTO</Link>
            <Link className="p-1.5 rounded-lg hover:text-amber-400" href="https://production.d31fjrkeuz0102.amplifyapp.com">SITIO PRINCIPAL</Link>
          </div>
        </nav>
      </>
    );
  }
}
