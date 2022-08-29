import "./filters.css";
import { useState } from "react";
import { useFilters } from "../../contexts/filters-context";

const Filters = () => {
  const { filters, dispatchFilters } = useFilters();
  const { category, rating, sort } = filters;
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div>
      <div className="filters-area">
        <p className="p">FILTERS</p>

        <div className="filter-category">
          <label htmlFor="categories" className="p-sm">
            Categories
          </label>
          <select
            name="categories"
            onChange={(e) =>
              dispatchFilters({ type: "CATEGORY", payload: e.target.value })
            }
            checked={category}
          >
            <option>Choose</option>
            <option value="clothing">Clothing</option>
            <option value="footwear">Footwear</option>
            <option value="electronics">Electronics</option>
            <option value="fitness">Fitness</option>
            <option value="wellness">Wellness</option>
            <option value="grooming">Grooming</option>
          </select>
        </div>

        <div className="sorting">
          <label htmlFor="sorting" className="p-sm">
            Sort By Price
          </label>
          <div className="sort-wrapper">
            <div className="radio-wrapper">
              <input
                type="radio"
                name="sorting"
                id="sorting"
                onChange={() =>
                  dispatchFilters({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
              <label htmlFor="sorting"> Low to High</label>
            </div>
            <div className="radio-wrapper">
              <input
                type="radio"
                name="sorting"
                id="sorting"
                onChange={() =>
                  dispatchFilters({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow" ? true : false}
              />
              <label htmlFor="sorting"> High to Low</label>
            </div>
          </div>
        </div>

        <div className="filter-price">
          <label htmlFor="price" className="p-sm">
            Price
          </label>
          <div className="slider-container">
            <input
              id="range-slider"
              className="slider"
              type="range"
              name="slider"
              value="10"
              min="0"
              step="500"
              max="5000"
              onInput={(e) => setSliderValue(e.target.value)}
              onChange={() =>
                dispatchFilters({
                  type: "FILTER_BY_PRICE",
                  payload: sliderValue,
                })
              }
              price={sliderValue}
            />
            <p id="range-value" className="p-xs ml1">
              {sliderValue}
            </p>
          </div>
        </div>

        <div className="filter-ratings">
          <label htmlFor="ratings" className="p-sm">
            Ratings
          </label>

          <div className="checkboxes-wrapper">
            <div className="checkbox-input">
              <input
                type="radio"
                name="rating"
                id="4star"
                value="4"
                onChange={() => dispatchFilters({ type: "RATING", payload: 4 })}
                checked={rating === 4 ? true : false}
              />
              <label htmlFor="4star">4⭐️ & Above</label>
            </div>
            <div className="checkbox-input">
              <input
                type="radio"
                name="rating"
                id="3star"
                value="3"
                onChange={() => dispatchFilters({ type: "RATING", payload: 3 })}
                checked={rating === 3 ? true : false}
              />
              <label htmlFor="3star">3⭐️ & Above</label>
            </div>
            <div className="checkbox-input">
              <input
                type="radio"
                name="rating"
                id="2star"
                value="2"
                onChange={() => dispatchFilters({ type: "RATING", payload: 2 })}
                checked={rating === 2 ? true : false}
              />
              <label htmlFor="2star">2⭐️ & Above</label>
            </div>
            <div className="checkbox-input">
              <input
                type="radio"
                name="rating"
                id="1star"
                value="1"
                onChange={() => dispatchFilters({ type: "RATING", payload: 1 })}
                checked={rating === 1 ? true : false}
              />
              <label htmlFor="1star">1⭐️ & Above</label>
            </div>
          </div>
        </div>

        <span
          className="span bg bg-yellow"
          onClick={() => dispatchFilters({ type: "CLEAR_ALL_FILTERS" })}
        >
          clear filters
        </span>
      </div>
    </div>
  );
};

export default Filters;
