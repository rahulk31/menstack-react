import "./products.css";

import { useProducts } from "../../contexts/products-context";
import { useFilters } from "../../contexts/filters-context";

import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import Filters from "../../components/filters/Filters";

const Products = () => {
  const { products } = useProducts();

  let transformList = products;
  const {
    filters: { category, rating, sort, price },
  } = useFilters();

  const filterFunction = () => {
    if (sort) {
      transformList = transformList.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (price) {
      transformList = transformList.filter(
        (item) => Number(item.price) <= price
      );
    }

    if (rating) {
      transformList = transformList.filter((item) => item.rating >= rating);
    }

    if (category) {
      switch (category) {
        case "clothing":
          transformList = transformList.filter(
            (item) => item.categoryName === "clothing"
          );
          break;
        case "grooming":
          transformList = transformList.filter(
            (item) => item.categoryName === "grooming"
          );
          break;
        case "electronics":
          transformList = transformList.filter(
            (item) => item.categoryName === "electronics"
          );
          break;
        case "footwear":
          transformList = transformList.filter(
            (item) => item.categoryName === "footwear"
          );
          break;
        case "fitness":
          transformList = transformList.filter(
            (item) => item.categoryName === "fitness"
          );
          break;
        case "wellness":
          transformList = transformList.filter(
            (item) => item.categoryName === "wellness"
          );
          break;
        default:
          break;
      }
    }

    return transformList;
  };

  return (
    <>
      <Navbar />

      <section id="products-main">
        <Filters />

        <div className="products-area">
          {filterFunction().map((product) => {
            return (
              <div>
                <Product product={product} key={product._id} />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
