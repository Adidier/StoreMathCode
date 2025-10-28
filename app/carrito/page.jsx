"use client";

import { useCart } from "@/app/context/Cart";
import { Footer } from "../ui/Footer";

export default function Cart() {
    const cartContext = useCart();

    if (cartContext.cart.length === 0) {
        return (
            <>
                <main className="flex flex-col min-h-screen items-center w-full pb-20 gap-16 sm:p-20 overflow-x-hidden">
                    <p>Your cart is empty</p>
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
                            <div key={item.id} className="flex flex-col p-4 rounded-md gap-3 border-1 border-gray-400 items-start shadow max-w-lg">
                                <div className="text-lg font-bold">
                                    {item.name}
                                </div>
                                <div>
                                    {item.description}
                                </div>
                                <button onClick={() => { cartContext.removeItem(item.id) }} className="bg-stone-200 text-gray-700 font-bold px-4 py-2 rounded-md hover:bg-red-500 hover:text-white text-xs transition"> Quitar del carrito </button>
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
