import Link from "next/link"

export default function AdminLayout({ children }) {
    return (
        <>
            <nav className="fixed top-0 left-0 h-full w-60 p-5 shadow-md bg-gray-100 flex flex-col gap-2">
                <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-200 font-bold hover:shadow-md transition-shadow" href="/admin">Inicio</Link>
                <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-200 font-bold hover:shadow-md transition-shadow" href="/admin/products">Productos</Link>
            </nav>
            <main className="ml-60 p-5">
                {children}
            </main>
        </>
    )
}
