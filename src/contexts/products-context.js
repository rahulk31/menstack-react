import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await axios.get("/api/products");
      try {
        if (res.status === 200) {
          setProducts(res.data.products);
        }
      } catch (e) {
        console.log(e.error);
      }
    })();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
