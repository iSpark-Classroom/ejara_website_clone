import React from "react";
import "../../styles/landing-page/footer.css"; // Importing CSS
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          className="footer-logo"
          src="images/Ejara-assets/landingPage_images/imgi_1_67f657686c86f47cedc4c5f9_Logo Horizontal.svg"
          alt="ejara logo"
        />

        <div className="resource">
          <h3>Resource</h3>
          <div className="resource-links">
            <Link to ="/faqs">FAQs</Link>
            <Link to ="/contact-us">Contact Us</Link>
            <Link to ="/blog-post">Blog Posts</Link>
            <Link to ="/tac">Terms & Conditions</Link>
            <Link to ="/privacy-policy">Privacy Policy</Link>
            <Link to ="/data-protection">Data Protection</Link>
          </div>
        </div>

        <div className="products">
          <h3>Products</h3>
          <div className="products-links">
            <Link to="/">Ejara Wallet</Link>
            <Link to="/saving-box">Savings Box</Link>
            <Link to="/saving-project">Project Savings</Link>
            <Link to="/invest">Invest</Link>
            <Link to="/business">Ejara for Business</Link>
          </div>
        </div>

        <div className="footer-download-app">
          <a href="https://apps.apple.com/cm/app/ejara/id6743698892">
            <img
              src="images/Ejara-assets/landingPage_images/imgi_2_2560px-Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg.png"
              alt="App Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ejara.ejarav4&hl=en">
            <img
              src="images/Ejara-assets/landingPage_images/imgi_3_1200px-Google_Play_Store_badge_FR.svg.png"
              alt="Google Playstore"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} EJARA</p>
      </div>
    </footer>
  );
};

export default Footer;
