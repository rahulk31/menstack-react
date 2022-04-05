export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_PRICE":
      return { ...state, price: action.payload };
    case "IN_STOCK":
      return { ...state, inStock: !state.inStock };
    case "IS_FAST_DELIVERY":
      return { ...state, isFastDelivery: !state.isFastDelivery };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_ALL_FILTERS":
      return {
        inStock: true,
        isFastDelivery: false,
        rating: 0,
        searchQuery: "",
      };
  }
};
