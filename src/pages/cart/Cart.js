import Footer from "../../components/footer/Footer";
import HorizontalCard from "../../components/horizontalCard/HorizontalCard";
import Navbar from "../../components/navbar/Navbar";
import { useCart } from "../../contexts/cart-context";
import { IoLocationOutline, IoCart } from "react-icons/io5";

import "./cart.css";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <Navbar />

      <section id={cart.itemsInCart.length === 0 ? "main-center" : "main"}>
        <div className="products-listing">
          <div className="mycart-header">
            <p className="p">My Cart</p>
            <div className="select-address">
              <IoLocationOutline className="icon-mycart" />
              <span className="span">Deliver to</span>
              <select name="address" id="address">
                <option value="address1">Delhi, 110092</option>
                <option value="address1">Lokhandwala, 110092</option>
                <option value="address1">Ammapali Hault, 110092</option>
                <option value="address1">Dasna, 110092</option>
              </select>
            </div>
          </div>

          <div className="products-list">
            {cart.itemsInCart.length === 0 ? (
              <div className="empty-icon-container">
                <IoCart className="empty-icon"/>
                <p>Cart is empty :/</p>
              </div>
            ) : (
              cart.itemsInCart.map((product) => {
                return <HorizontalCard product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
        {cart.itemsInCart.length !== 0 ? (<div className="price-section">
          <div className="price-header">
            <p className="p fade">PRICE SUMMARY</p>
          </div>
          <div className="price-summary">
            <div className="amount-original">
              <p className="p-sm">Price({cart.totalInCartQuantity} items)</p>
              <p className="p-sm">₹{cart.totalPrice}</p>
            </div>
            <div className="amount-discounted">
              <p className="p-sm">Discount</p>
              <p className="p-sm">- ₹0</p>
            </div>
            <div className="amount-delivery">
              <p className="p-sm">Delivery</p>
              <p className="p-sm primary-color">FREE</p>
            </div>
          </div>
          <div className="amount-total">
            <p className="p">Total Amount</p>
            <p className="p">₹{cart.totalPrice}</p>
          </div>
          <div className="discount-description">
            <p className="p-sm primary-color">
              You will save ₹1950 on this order
            </p>
          </div>

          <div className="cta">
            <button className="btn btn-warning">Place Order</button>
          </div>
        </div>) : null}
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
