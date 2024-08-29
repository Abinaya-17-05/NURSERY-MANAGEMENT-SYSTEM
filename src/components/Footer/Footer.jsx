import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <span>Plantique</span>
          <p>
            Fill your house and workplace with pleasant and beautiful plants.
          </p>
          <div className="socials">
            <Link to="https://github.com/RAGUL085">
              <p>
                <GitHubIcon />
              </p>
            </Link>
            <Link to="https://twitter.com">
              <p>
                <TwitterIcon />
              </p>
            </Link>
            <Link to="https://www.linkedin.com">
              <p>
                <LinkedInIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="title">Quick Links</p>
          <div className="listItems">
            <Link to="/store">
              <p>Products</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="title">Contact Us</p>
          <div className="contact-list">
            <div className="contact-mode">
              <div className="contact-icon">
                <FmdGoodIcon />
              </div>
              <p>1/11 West Masi street,Madurai,Bharath. </p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <p>+91 96298 20305</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <p>support@plantique.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
