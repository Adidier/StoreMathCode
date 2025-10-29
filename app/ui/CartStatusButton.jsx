"use client";
import Image from "next/image";

import Link from "next/link";
import { useCart } from "@/app/context/Cart.jsx";

export function CartStatusButton() {
    const cartContext = useCart();

    if (cartContext.cart.length === 0) {
        return null;
    } else {
        return (
            <>
                <Link className="fixed bottom-10 right-8 bg-blue-700 z-90 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl" href="/carrito">
                <Image src="/cart-icon-white.svg" alt="Cart" width={20} height={20} className="inline mb-1 mr-2" />
                   {cartContext.cart.length}
                </Link>
            </>
        );
    }
}
