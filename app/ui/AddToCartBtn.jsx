'use client';

import { useCart } from '../context/Cart';

export function AddToCartBtn({ item }) {
    const cart = useCart()
    return (
        <div>
            <button className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => { cart.addItem(item) }
                }>Add to cart</button>
        </div>
    )
}
