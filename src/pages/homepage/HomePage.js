import "./homepage.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";



const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <div className="hero-texts">
          <h1 className="h1 secondary-color">
            One stop platform for Men's Shopping.
          </h1>
          <p className="p secondary-color">
            From Clothing to Gadgets, grooming to footwears. All at one place.
          </p>
          <Link to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </section>

      <section id="categories">
        <h4 className="h4 secondary-color text-center">Shop from Categories</h4>

        <div className="categories-card">
          <div className="category-card">
            <h5 className="h5">Clothing</h5>
            <button className="btn-round">SHOP</button>
          </div>
          <div className="category-card">
            <h5 className="h5">Grooming</h5>
            <button className="btn-round">SHOP</button>
          </div>
          <div className="category-card">
            <h5 className="h5">Footwear</h5>
            <button className="btn-round">SHOP</button>
          </div>
          <div className="category-card">
            <h5 className="h5">Gadgets</h5>
            <button className="btn-round">SHOP</button>
          </div>
        </div>
      </section>

      <section id="deal-of-the-day">
        <h4 className="h4 secondary-color text-center">Deals of the Day</h4>
        <div className="deal-day-products">
          <div className="nav-arrows">
            <IoArrowBack className="nav-arrow" />
            <IoArrowForward className="nav-arrow" />
          </div>
          <div className="products">
            <div className="product">
              <div className="img-wrapper">
                <img src="images/products/f3.jpg" alt="shirt" />
              </div>
              <p className="p text-center">₹699 - ₹999</p>
              <p className="p-xs text-center">
                Ends in
                <span className="span-sm text-center bg-yellow">11:34:52</span>
              </p>
            </div>

            <div className="product">
              <div className="img-wrapper">
                <img src="images/products/f3.jpg" alt="shirt" />
              </div>
              <p className="p text-center">₹699 - ₹999</p>
              <p className="p-xs text-center">
                Ends in
                <span className="span-sm text-center bg-yellow">11:34:52</span>
              </p>
            </div>

            <div className="product">
              <div className="img-wrapper">
                <img src="images/products/f3.jpg" alt="shirt" />
              </div>
              <p className="p text-center">₹699 - ₹999</p>
              <p className="p-xs text-center">
                Ends in
                <span className="span-sm text-center bg-yellow">11:34:52</span>
              </p>
            </div>

            <div className="product">
              <div className="img-wrapper">
                <img src="images/products/f3.jpg" alt="shirt" />
              </div>
              <p className="p text-center">₹699 - ₹999</p>
              <p className="p-xs text-center">
                Ends in
                <span className="span-sm text-center bg-yellow">11:34:52</span>
              </p>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
