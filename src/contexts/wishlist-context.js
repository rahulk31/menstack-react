import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  itemsInWishlist: [],
  totalWishlistedQuantity: 0,
};

const WishlistContext = createContext(initialState);

const WishlistProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    initialState
  );

  const addToWishlistHandler = async (product) => {
    if (token) {
      try {
        const response = await axios({
          method: "post",
          url: `/api/user/wishlist`,
          headers: { authorization: token },
          data: {
            product: product,
          },
        });

        if (response.status === 201) {
          dispatchWishlist({
            type: "ADD_TO_WISHLIST",
            payload: product,
          });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = async (product) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/wishlist/:${product._id}`,
        headers: { authorization: token },
      });

      if (response.status === 200) {
        dispatchWishlist({
          type: "REMOVE_FROM_WISHLIST",
          payload: product,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        dispatchWishlist,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
