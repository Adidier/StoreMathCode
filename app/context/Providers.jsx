'use client';

import { CartProvider } from './Cart';

export function Providers({ children }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}