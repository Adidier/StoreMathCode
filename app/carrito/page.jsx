"use client";

import { useCart } from "@/app/context/Cart";
import { Footer } from "../ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
    const cartContext = useCart();

    if (cartContext.cart.length === 0) {
        return (
            <>
                <main className="grid justify-items-center items-center pb-20 gap-16 sm:p-20 overflow-x-hidden bg-gray-200">
                    <p className="rounded-md bg-gray-50 p-5 text-xl font-bold shadow-md">El carrito de compras esta vacio</p>
                    <Link className="p-2 text-gray-50 shadow-md bg-red-600 rounded-lg" href="/productos">Revisa nuestros productos</Link>
                </main>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <main className="flex flex-row h-[80vh] justify-center gap-20 bg-gray-200">
                    <section className="max-h-142 flex flex-col gap-3 place-self-center bg-gray-50 shadow rounded-md min-w-1/2">
                        <div className="p-5 border-b border-gray-300 font-bold">
                            Tu compra
                        </div>
                        <div className="overflow-scroll overflow-x-hidden">
                            {
                                cartContext.cart.map((item) => (
                                    <div key={item.id} className="flex flex-row pt-4 pb-4 pr-2 pl-2 gap-5 border-b border-gray-300">
                                        <Image
                                            src={item.images[0]}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="object-cover rounded-md" />
                                        <div className="flex flex-col p-2 justify-start">
                                            <p className="text-md font-bold">
                                                {item.name}
                                            </p>
                                            <button
                                                onClick={() => { cartContext.removeItem(item.id) }}
                                                className="p-2 text-blue-500 place-self-start font-bold rounded-md text-xs hover:underline">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </section>
                    <section className="flex flex-col place-self-center bg-gray-50 shadow rounded-md min-w-1/4 min-h-1/4">
                        <div className="p-5 border-b border-gray-300 font-bold">
                            Resumen de compra
                        </div>
                        <div className="p-5 border-b border-gray-300 font-bold">
                            Total a pagar:
                        </div>
                        <div className="p-3 place-self-center">
                            <form action="/api/checkout_sessions" method="POST">
                                <button type="submit" className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-blue-700">Continuar al pago</button>

                                {
                                    cartContext.cart.map((item) => (
                                        <input key={item.id} type="hidden" name="price_ids" value={item.default_price} />
                                    ))
                                }
                            </form>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

}
