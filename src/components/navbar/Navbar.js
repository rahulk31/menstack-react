import {
  IoGiftOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
  IoLogOutOutline,
  IoCartOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import "./navbar.css";

import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";

const Navbar = () => {

  const {cart} = useCart();
  const {wishlist} = useWishlist();

  return (
    <div>
      <nav id="navbar">
        <div className="navbar-left">
          <Link to="/">
            <h3 className="h3">
              <span className="primary-color">Men</span>Stack
            </h3>
          </Link>
        </div>

        <div className="navbar-middle">
          <input
            type="text"
            name="navbar-search"
            id="navbar-search"
            className="text-input border-default"
            placeholder="search products here from any category..."
          />
        </div>

        <div className="navbar-right">
          <span className="icon-badge">
            <Link to="/products">
              <IoGiftOutline className="navbar-icon" />
            </Link>
          </span>

          <span className="icon-badge">
            <span className="badge badge-green">{wishlist.totalWishlistedQuantity}</span>
            <Link to="/wishlist">
              <IoHeartOutline className="navbar-icon" />
            </Link>
          </span>

          <span className="icon-badge">
            <span className="badge badge-yellow">{cart.totalInCartQuantity}</span>
            <Link to="/cart">
              <IoCartOutline className="navbar-icon" />
            </Link>
          </span>

          <Link to="/homepage">
            <IoPersonCircleOutline className="navbar-icon" />
          </Link>

          <Link to="/logout">
            <IoLogOutOutline className="navbar-icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
