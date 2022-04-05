import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { IoHeart, IoStarHalf } from "react-icons/io5";
import "./wishlistCard.css";

const WishlistCard = (props) => {
  const { title, seller, image, price, status, rating } = props.product;
  const { dispatch } = useCart();
  const { dispatchWishlist } = useWishlist();
  return (
    <div className="card-wrapper-v">
      <div className="img-container">
        <span
          className={
            (status === "trending" ? "trending" : "hot") + " text-badge"
          }
        >
          {status}
        </span>
        <IoHeart
          className="icon-wishlist wishlist"
          onClick={() =>
            dispatchWishlist({
              type: "REMOVE_FROM_WISHLIST",
              payload: props.product,
            })
          }
        />
        <img
          src={image}
          alt={title}
          style={{ width: "300px", objectFit: "contain" }}
        />
      </div>
      <div className="card-details">
        <h2 className="card-text-primary">{title}</h2>
        <p className="card-text-tertiary">{seller}</p>

        <div className="price-and-rating">
          <div className="rating">
            <p className="card-text-tertiary">{rating}</p>
            <IoStarHalf className="card-icon" />
          </div>
          <div className="price">
            <span>₹</span>
            <p className="card-text-primary">{price}</p>
            <del className="card-text-secondary">{price}</del>
          </div>
        </div>

        <div className="discount-and-reviews">
          <p className="card-text-tertiary">7.9K reviews</p>
          <p className="card-text-tertiary secondary-color">
            delivery by 8th March
          </p>
        </div>

        <div className="card-cta">
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatchWishlist({
                type: "REMOVE_FROM_WISHLIST",
                payload: props.product,
              })
            }
          >
            Remove
          </button>
          <button
            className="btn-outline outline-primary"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: props.product });
              dispatchWishlist({
                type: "REMOVE_FROM_WISHLIST",
                payload: props.product,
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
