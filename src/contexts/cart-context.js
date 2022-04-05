import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const initialState = {
  totalInCartQuantity: 0,
  totalPrice: 0,
  itemsInCart: [],
};

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
