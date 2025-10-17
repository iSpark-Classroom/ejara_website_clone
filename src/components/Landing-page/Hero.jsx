import React from "react";
import "../../styles/landing-page/hero-section.css"; // Importing CSS

const Hero = ({t}) => {
  return (
    <div className="hero-container">
      {/* Start of main text; heading, paragraph and download links */}
      <div className="hero-text">
        <h1>{t("title_your_financial_companion")}</h1>
        <p>{t("intro_where_every")}</p>

        {/* Download button links; both google playstore and app store for iPhones */}
        <div className="download-app">
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
      {/* End of main text; heading, paragraph and download links */}

      {/* Main hero images that include the phone screen and banner underneath */}
      <div className="hero-image">
        <img
          src="images/Ejara-assets/landingPage_images/imgi_4_67f51b49355da1d40a94734b_minee (Mockuuups Studio).png"
          alt="big hero image"
          className="hero-image-main"
        />
        <img
          src="images/Ejara-assets/landingPage_images/imgi_5_67f51b4924b2baef6a3d6717_Group 6.png"
          alt="banner image"
          className="hero-image-banner"
        />
      </div>
    </div>
  );
};

export default Hero;
