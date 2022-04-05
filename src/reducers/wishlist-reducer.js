const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const isWishlisted = state.itemsInWishlist.some(
        (item) => item.id === action.payload.id
      );

      if (isWishlisted) return { ...state };
      return {
        ...state,
        itemsInWishlist: [...state.itemsInWishlist, action.payload],
        totalWishlistedQuantity: state.totalWishlistedQuantity + 1,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishlist: [
          ...state.itemsInWishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        ],
        totalWishlistedQuantity: state.totalWishlistedQuantity - 1,
      };

    default:
      break;
  }
};

export { wishlistReducer };
