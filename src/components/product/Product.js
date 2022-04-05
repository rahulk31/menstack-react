import { IoStarHalf, IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

import "./product.css";

import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { title, price, image, seller, rating, status } = props.product;
  const { cart, dispatch } = useCart();
  const { wishlist, dispatchWishlist } = useWishlist();

  const isInCart = (product) => {
    return cart.itemsInCart.some((item) => item._id === product._id);
  };

  const isWishlisted = (product) => {
    return wishlist.itemsInWishlist.some((item) => item._id === product._id);
  };

  return (
    <div>
      <div className="card-wrapper-v">
        <div className="img-container">
          <span
            className={
              (status === "trending" ? "trending" : "hot") + " text-badge"
            }
          >
            {status}
          </span>
          {isWishlisted(props.product) ? (
            <IoHeart
              className="icon-wishlist wishlist"
              onClick={() => {
                dispatchWishlist({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: props.product,
                });
                setIsWishlisted(!isWishlisted);
              }}
            />
          ) : (
            <IoHeartOutline
              className="icon-wishlist wishlist"
              onClick={() => {
                dispatchWishlist({
                  type: "ADD_TO_WISHLIST",
                  payload: props.product,
                });
                setIsWishlisted(!isWishlisted);
              }}
            />
          )}
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
              delivery by 8th May
            </p>
          </div>

          <div className="card-cta">
            {isInCart(props.product) ? (
              <Link to="/cart">
                <button className="btn btn-info">Go to Cart</button>
              </Link>
            ) : (
              <>
                <button
                  className="btn-outline outline-primary"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: props.product })
                  }
                >
                  Add to cart
                </button>
                <button className="btn btn-primary">Buy now</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
