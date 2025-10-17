'use client';

import { useCart } from '../context/Cart';

export function AddToCartBtn({ item }) {
    const cart = useCart()
    return (
        <div>
            <button className="bg-stone-700 text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-pink-500 transition" onClick={() => { cart.addItem(item) }
            }>Add to cart</button>
        </div>
    )
}