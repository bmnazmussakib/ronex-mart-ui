'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      image: "/img/product/product (1).jpeg",
      price: "৳70",
      numericPrice: 70,
      quantity: 1,
      weight: "500 g",
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    const num = String(priceStr).replace(/[^0-9.]/g, '');
    return parseFloat(num) || 0;
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (product.quantity || 1),
        };
        return updated;
      }
      return [
        ...prevItems,
        {
          id: product.id || String(Date.now()),
          title: product.title || "Selected Item",
          image: product.image || "/img/product/product (1).jpeg",
          price: product.price || "৳70",
          numericPrice: parsePrice(product.price || 70),
          quantity: product.quantity || 1,
          weight: product.weight || "1 unit",
        },
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.numericPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        isDesktopSidebarOpen,
        toggleDesktopSidebar,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItemsCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
