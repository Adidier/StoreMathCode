"use client";

import Link from "next/link";
import { useCart } from "@/app/context/Cart.jsx";

export function CartStatusButton() {
    const cartContext = useCart();

    if (cartContext.cart.length === 0) {
        return null;
    } else {
        return (
            <>
                <Link className="fixed bottom-10 right-8 bg-blue-500 z-90 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/carrito">
                   {cartContext.cart.length} items en el carrito
                </Link>
            </>
        );
    }
}