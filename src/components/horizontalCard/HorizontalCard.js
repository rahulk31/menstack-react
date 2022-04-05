import { useCart } from "../../contexts/cart-context";
import {IoStarHalf} from "react-icons/io5"

import "./horizontalCard.css";

const HorizontalCard = (props) => {
  const { dispatch } = useCart();
  const { title, image, seller, price, quantity, rating } = props.product;
  return (
    <div className="card-wrapper-h">
      <div className="img-container">
        <span className="text-badge trending">Trending</span>
        <img
          src={image}
          alt={title}
          style={{ width: "200px", objectFit: "contain" }}
        />
      </div>
      <div className="card-details">
        <h2 className="card-text-primary">{title}</h2>
        <p className="card-text-tertiary">{seller}</p>

        <div className="price-and-rating">
          <div className="rating">
          <p classNameName="card-text-tertiary">{rating}</p>
            <IoStarHalf classNameName="card-icon" />
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
              dispatch({ type: "REMOVE_FROM_CART", payload: props.product })
            }
          >
            Remove
          </button>
          
          <button className="btn btn-primary" onClick={() => dispatch({type: "DECREASE_QUANTITY", payload: props.product})}>-</button>
          <p className="btn-outline outline-primary">{quantity}</p>

          <button className="btn btn-primary" onClick={() => dispatch({type: "INCREASE_QUANTITY", payload: props.product})}>+</button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
