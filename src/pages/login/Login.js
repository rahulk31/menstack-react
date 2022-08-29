import "./login.css";

import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika",
      });
      // console.log(response);

      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section id="hero">
        <span className="overlay"></span>
        <form className="input-wrapper">
          <h5 className="h5 form-title">Login</h5>
          <label className="label" htmlFor="email">
            Email/Username:
          </label>
          <input
            className="text-input border-default"
            type="email"
            name="email"
            id="email"
            placeholder="rahul@menStack.com"
            required
          />

          <label className="label" htmlFor="username">
            Password:
          </label>
          <input
            className="text-input border-default"
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            required
          />

          <a href="#">
            <span htmlFor="tnc" className="span-sm">
              Forgot Password?
            </span>
          </a>

          <div className="cta">
            <button className="btn btn-primary" onClick={loginHandler}>
              Login
            </button>
          </div>

          <p className="main-center">
            Don't have an account with us? Create one{" "}
            <Link to="/signup">
              <span className="bg bg-yellow">signup</span>
            </Link>
          </p>

          <div className="login-icons-wrapper">
            <p className="p-sm">Login using:</p>
            <IoLogoGoogle className="signup-icon" />
            <IoLogoApple className="signup-icon" />
            <IoLogoFacebook className="signup-icon" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
