import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { ProductsProvider } from "./contexts/products-context";
import { FiltersProvider } from "./contexts/filters-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <FiltersProvider>
              <App />
            </FiltersProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
