import React from "react";
import "../../styles/landing-page/footer.css"; // Importing CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img
          className="footer-logo"
          src="images/Ejara-assets/landingPage_images/imgi_1_67f657686c86f47cedc4c5f9_Logo Horizontal.svg"
          alt="ejara logo"
        />

        <div className="resource">
          <h3>Resource</h3>
          <div className="resource-links">
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog Posts</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Data Protection</a>
          </div>
        </div>

        <div className="products">
          <h3>Products</h3>
          <div className="products-links">
            <a href="#">Ejara Wallet</a>
            <a href="#">Savings Box</a>
            <a href="#">Project Savings</a>
            <a href="#">Invest</a>
            <a href="#">Ejara for Business</a>
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
    </div>
  );
};

export default Footer;
