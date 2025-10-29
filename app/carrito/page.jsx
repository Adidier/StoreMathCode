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
                <main className="grid justify-items-center items-center pb-20 gap-16 sm:p-20 overflow-x-hidden">
                    <p className="rounded-md bg-gray-50 p-5 text-xl font-bold shadow-md">El carrito de compras esta vacio</p>
                    <Link className="p-2 text-gray-50 shadow-md bg-red-600 rounded-lg" href="/productos">Revisa nuestros productos</Link>
                </main>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <main className="flex flex-col m-3 gap-3 place-self-center">
                    {
                        cartContext.cart.map((item) => (
                            <div key={item.id} className="flex flex-row rounded-md gap-3 border border-gray-400 items-start shadow max-w-lg">
                                <Image
                                    src={item.images[0]}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="object-cover rounded-t-md" />
                                <div className="flex flex-row p-2 w-full">
                                    <p className="text-lg font-bold">
                                        {item.name}
                                    </p>
                                </div>
                                <button
                                    onClick={() => { cartContext.removeItem(item.id) }}
                                    className="grid place-self-end m-1 w-fit text-gray-700 font-bold rounded-md hover:bg-red-300 hover:text-white text-xs transition">
                                    <Image src="/trash.svg" alt="Cart" width={35} height={35} className="inline p-1" />
                                </button>
                            </div>
                        ))
                    }

                    <form action="/api/checkout_sessions" method="POST">
                        <section>
                            <button type="submit" className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-blue-700">Checkout</button>
                        </section>
                        {
                            cartContext.cart.map((item) => (
                                <input key={item.id} type="hidden" name="price_ids" value={item.default_price} />
                            ))
                        }
                    </form>
                </main>
                <Footer />
            </>
        );
    }

}
