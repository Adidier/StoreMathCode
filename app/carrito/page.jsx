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
        <main className="grid place-content-center bg-gray-100 h-full">
          <div id="emptyCartMessage" className="flex flex-col gap-2 items-center">
            <p className="rounded-md bg-gray-50 p-5 text-xl font-bold shadow-md">El carrito de compras esta vacio</p>
            <Link className="p-2 text-gray-50 shadow-md bg-red-600 rounded-lg md:max-w-52" href="/">Volver a la tienda</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <main className="flex flex-col md:grid md:place-content-center bg-gray-100 border-red-950">
          <section className="bg-gray-50 p-5 md:shadow-md rounded-md md:w-[48rem]">
            <header className="font-bold text-xl">
              <h1>Carrito de compra</h1>
            </header>
            <div id="cartItems" className="overflow-scroll overflow-x-hidden">
              {
                cartContext.cart.map((item) => (
                  <div key={item.id} className="flex flex-row py-4 px-2 gap-5 border-b border-gray-300">
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
            <section className="bg-gray-50">
              <div className="p-5 font-bold grid place-content-end">
                Total a pagar:
              </div>
              <div className="p-3 grid place-content-end">
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
          </section>
        </main>
        <Footer />
      </>
    );
  }

}
