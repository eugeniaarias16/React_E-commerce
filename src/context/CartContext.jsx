import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Inicializar el carrito con los datos de localStorage o un array vacío
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Updated Cart:', cart);
  }, [cart]);

  const addItemToCart = (item) => {
    if (item.stock > 0) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: Math.min(cartItem.quantity + 1, item.stock) }
              : cartItem
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added to your cart",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry! This product is out of stock"
      });
    }
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product removed from your Cart",
            showConfirmButton: false,
            timer: 1500
          });
          return prevCart.filter((cartItem) => cartItem.id !== item.id);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product quantity decreased",
            showConfirmButton: false,
            timer: 1500
          });
          return prevCart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          );
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This product is not in your cart"
        });
        return prevCart; // Retorna el carrito sin cambios si el producto no existe
      }
    });
  };

  const clearCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will remove all items from your cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your cart has been cleared",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };

  const value = { cart, addItemToCart, removeItemFromCart, clearCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
