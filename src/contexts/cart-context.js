import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  totalInCartQuantity: 0,
  totalPrice: 0,
  itemsInCart: [],
};

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const addToCartHandler = async (product) => {
    if (token) {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/cart",
          headers: { authorization: token },
          data: {
            product: product,
          },
        });
        if (response.status === 201) {
          dispatch({ type: "ADD_TO_CART", payload: product });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromCartHandler = async (product) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/cart/:${product._id}`,
        headers: { authorization: token },
      });
      if (response.status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const qtyHandler = async (product, actionType) => {
    try {
      const response = await axios({
        method: "post",
        url: `/api/user/cart/:${product._id}`,
        headers: { authorization: token },
        data: { action: { type: actionType } },
      });

      actionType === "decrement"
        ? dispatch({ type: "DECREASE_QUANTITY", payload: product })
        : dispatch({ type: "INCREASE_QUANTITY", payload: product });

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        qtyHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
