'use client';

import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cart',[]);

  function addItem(item) {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    console.log("Add item to cart", cart)
  }

  function removeItem(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}