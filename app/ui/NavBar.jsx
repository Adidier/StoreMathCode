"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row font-bold gap-2 pt-2 pb-2 pr-2 pl-2 text-size-lg border-b-1">
      <Link className="p-1.5 rounded-lg hover:bg-neutral-900 hover:text-gray-100" href="/">Inicio</Link>
      <Link className={`p-1.5 rounded-lg hover:bg-neutral-900 hover:text-gray-100 ${pathname === '/productos' ? 'bg-neutral-900 text-gray-100' : ''}`} href="/productos">Productos</Link>
      <Link className={`p-1.5 rounded-lg hover:bg-neutral-900 hover:text-gray-100 ${pathname === '/servicios' ? 'bg-neutral-900 text-gray-100' : ''}`} href="/servicios">Servicios</Link>
      <Link className={`p-1.5 rounded-lg hover:bg-neutral-900 hover:text-gray-100 ${pathname === '/buscar' ? 'bg-neutral-900 text-gray-100' : ''}`} href="/buscar">Buscar...</Link>
    </nav>
  );
}

