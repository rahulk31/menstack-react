import { Link } from "react-router-dom";
import "./logout.css";

const Logout = () => {
  return (
    <div>
      <section id="hero">
        <span className="overlay"></span>
        <div className="logout-message">
          <p className="p">You have been successfully logged out.</p>
          <div className="cta-links">
            <Link to="/">
              <span className="span bg bg-fade">Homepage</span>
            </Link>
            <Link to="/login">
              <span className="span bg bg-green">Login</span>
            </Link>
            <Link to="/signup">
              <span className="span bg bg-yellow">Create account</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logout;
