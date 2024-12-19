import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
   
    let isInCart = cart.some((el) => el.id === product.id); 

    if (isInCart) {
      

      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      }); 

      setCart(nuevoArray);
    } else {
      
      setCart([...cart, product]);
    }
  };
  const resetCart = () => {
    setCart([]);
  };

  const removeProduct = (id) => {
    let filteredArray = cart.filter((elemento) => elemento.id !== id);
    setCart(filteredArray);
  };

  const getTotalPrecio = () => {
    let total = cart.reduce((acumulador,elemento) => {
      return acumulador + elemento.precio * elemento.quantity;
    }, 0);
    return total;
  };

  let data = { cart, addToCart, resetCart, removeProduct, getTotalPrecio };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};