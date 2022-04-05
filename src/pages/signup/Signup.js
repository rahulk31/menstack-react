import "./signup.css";

import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section id="hero">
        <span className="overlay"></span>
        <form className="input-wrapper border-default">
          <h5 className="h5 form-title">Sign Up</h5>
          <label className="label" for="email">
            Enter your email:
          </label>
          <input
            className="text-input border-default"
            type="email"
            name="email"
            id="email"
            placeholder="rahul@menStack.com"
            required
          />

          <label className="label" for="username">
            Your name:
          </label>
          <input
            className="text-input border-default"
            type="text"
            name="name"
            id="name"
            placeholder="rahul singh"
            required
          />

          <label className="label" for="mobile">
            Mobile number:
          </label>
          <input
            className="text-input border-default"
            type="number"
            name="mobile"
            id="mobile"
            placeholder="9876543210"
            required
          />

          <label className="label" for="username">
            Set your password:
          </label>
          <input
            className="text-input border-default"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />

          <label className="label" for="password">
            Confirm your password:
          </label>
          <input
            className="text-input border-default"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />

          <div className="tnc-wrapper">
            <input type="checkbox" name="tnc" id="tnc" />
            <span for="tnc" className="span-sm">
              Agree to T&C and the privacy policy
            </span>
          </div>

          <div className="cta">
            <button className="btn btn-primary">Signup</button>
          </div>
          
          <p className="main-center">Already have an account? <Link to="/login"><span className="bg bg-yellow">login</span></Link></p>

          <div className="signup-icons-wrapper">
            <p className="p-sm">Signup using:</p>
            <IoLogoGoogle className="signup-icon" />
            <IoLogoApple className="signup-icon" />
            <IoLogoFacebook className="signup-icon" />
          </div>

        </form>
      </section>
    </div>
  );
};

export default Signup;
