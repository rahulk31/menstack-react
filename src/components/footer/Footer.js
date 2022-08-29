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
          <ul className="footer-2">
            <li className="p">Get to Know Us</li>
            <li className="p-xs">About Us</li>
            <li className="p-xs">Careers</li>
            <li className="p-xs">Press Releases</li>
            <li className="p-xs">Gift a Smile</li>
            <li className="p-xs">Menstack Science</li>
            <li className="p-xs">Menstack Cares</li>
          </ul>
          <ul className="footer-3">
            <li className="p">Make Money with Us</li>
            <li className="p-xs">Sell on Menstack</li>
            <li className="p-xs">Sell under Stack Accelerator</li>
            <li className="p-xs">Menstack Global Selling</li>
            <li className="p-xs">Become an affiliate</li>
            <li className="p-xs">Fullfilment by Menstack</li>
            <li className="p-xs">Menstack Merchants</li>
          </ul>
          <ul className="footer-4">
            <li className="p">Care & Support</li>
            <li className="p-xs">Covid-19 Guidelines</li>
            <li className="p-xs">Your Account</li>
            <li className="p-xs">Returns Centre</li>
            <li className="p-xs">100% Purchase Protection</li>
            <li className="p-xs">Menstack App Download</li>
            <li className="p-xs">Help</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
