import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const initialState = {
  itemsInWishlist: [],
  totalWishlistedQuantity: 0,
};

const WishlistContext = createContext(initialState);

const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    initialState
  );
  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
