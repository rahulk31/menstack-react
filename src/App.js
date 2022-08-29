import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Products from "./pages/products/Products";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/404" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;
