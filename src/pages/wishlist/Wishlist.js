import WishlistCard from "../../components/wishlistCard/WishlistCard";
import { useWishlist } from "../../contexts/wishlist-context";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import "./wishlist.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <div>
      <Navbar />

      <section id="wishlist-main">
        <div className="wishlisted-products">
          <div className="wishlist-header">
            <IoHeartOutline className="icon-wishlist" />
            <p className="p">Wishlisted Products</p>
          </div>

          <div
            className={
              wishlist.itemsInWishlist.length === 0
                ? "main-center"
                : "products-wishlist"
            }
          >
            {wishlist.itemsInWishlist.length === 0 ? (
              <div className="empty-icon-container">
                <IoHeart className="empty-icon" />
                <p>Wishlist is empty :/</p>
              </div>
            ) : (
              wishlist.itemsInWishlist.map((product) => {
                return <WishlistCard product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wishlist;
