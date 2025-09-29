import React from "react";
import "../../styles/hero-sections.css"; // Importing CSS

const section1 = {
  id: 1,
  heading: "Savings box",
  paragraph:
    "Easily save for emergencies while earning a 2% annual interest rate. Backed by government bonds, it guarantees security, flexibility, and easy access to your funds. Download the app to start saving.",
  imageSource:
    "images/Ejara-assets/landingPage_images/imgi_6_67f5a2e015a9b3f0b6027e78_Rectangle-1.png",
  urlImage: "images/Ejara-assets/landingPage_images/download (3).svg",
  urlLink: "https://ejara.io/savings-box",
};

const section2 = {
  id: 2,
  heading: "Project savings",
  paragraph:
    "Make your dreams come true with Goal Savings. Whether you're planning for the next school year or a travel project, we're here to help. Download the app now to create a goal.",
  imageSource:
    "images/Ejara-assets/landingPage_images/imgi_7_67f5a2e0753c0e0d34860ecd_Rectangle-2.png",
  urlImage: "images/Ejara-assets/landingPage_images/download (3).svg",
  urlLink: "https://ejara.io/epargne-projet",
};

const section3 = {
  id: 3,
  heading: "Investment",
  paragraph:
    "Invest like professionals in government bonds from 1000 CFA francs and earn up to 6.5% annual interest. The capital is guaranteed by the Bank of Central African States (BEAC).",
  imageSource:
    "images/Ejara-assets/landingPage_images/imgi_8_67f5a2e0484523d4f3e3e2f1_Rectangle.png",
  urlImage: "images/Ejara-assets/landingPage_images/download (3).svg",
  urlLink: "https://ejara.io/investissement",
};

const Section = ({ section }) => {
  return (
    <div
      className={
        section.id === 2
          ? "landing-page-section-reverse"
          : "landing-page-section"
      }
    >
      <div
        className={
          section.id === 3
            ? "image-container image-container3"
            : "image-container"
        }
      >
        <img src={section.imageSource} alt={section.heading} />
      </div>
      <div className="text-container">
        <h2>{section.heading}</h2>
        <p>{section.paragraph}</p>
        <div className="button-container">
          <img src={section.urlImage} alt={section.urlLink} />
        </div>
      </div>
    </div>
  );
};

const Sections = () => {
  return (
    <div>
      <Section className="landing-page-section1" section={section1} />
      <Section className="landing-page-section2" section={section2} />
      <Section className="landing-page-section3" section={section3} />
    </div>
  );
};
export default Sections;
