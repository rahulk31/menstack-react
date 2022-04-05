import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filters-reducer";

const filtersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filterReducer, {
    inStock: true,
    price: 0,
    category: "",
    isFastDelivery: false,
    rating: 0,
    searchQuery: "",
  });
  return (
    <filtersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </filtersContext.Provider>
  );
};

const useFilters = () => useContext(filtersContext);

export { useFilters, FiltersProvider };
