import {
  IoMail,
  IoCall,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer">
          <div className="footer-1">
            <h3 className="h3 primary-color">
              Men<span className="secondary-color-light">Stack</span>
            </h3>

            <div className="contact-wrapper">
              <IoCall className="footer-icon" />
              <p className="p-sm">+91 9876543210</p>
            </div>
            <div className="contact-wrapper">
              <IoMail className="footer-icon" />
              <p className="p-sm">care@menstack.com</p>
            </div>
            <div className="icons-wrapper">
              <IoLogoTwitter className="footer-icon" />
              <IoLogoFacebook className="footer-icon" />
              <IoLogoLinkedin className="footer-icon" />
              <IoLogoGithub className="footer-icon" />
            </div>
          </div>
          <div className="footer-2">
            <p className="p">Get to Know Us</p>
            <p className="p-xs">About Us</p>
            <p className="p-xs">Careers</p>
            <p className="p-xs">Press Releases</p>
            <p className="p-xs">Gift a Smile</p>
            <p className="p-xs">Menstack Science</p>
            <p className="p-xs">Menstack Cares</p>
          </div>
          <div className="footer-3">
            <p className="p">Make Money with Us</p>
            <p className="p-xs">Sell on Menstack</p>
            <p className="p-xs">Sell under Stack Accelerator</p>
            <p className="p-xs">Menstack Global Selling</p>
            <p className="p-xs">Become an affiliate</p>
            <p className="p-xs">Fullfilment by Menstack</p>
            <p className="p-xs">Menstack Merchants</p>
          </div>
          <div className="footer-4">
            <p className="p">Care & Support</p>
            <p className="p-xs">Covid-19 Guidelines</p>
            <p className="p-xs">Your Account</p>
            <p className="p-xs">Returns Centre</p>
            <p className="p-xs">100% Purchase Protection</p>
            <p className="p-xs">Menstack App Download</p>
            <p className="p-xs">Help</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
