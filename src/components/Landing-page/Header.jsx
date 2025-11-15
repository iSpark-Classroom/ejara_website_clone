import React from "react";
import { useState } from "react";
import "../../styles/landing-page/header.css"; // Importing CSS
import { Link } from "react-router-dom";
import LanguageSelector from "../language-selector";

export const SaveMenu = () => {
  return (
    <ul className="save-sub-menu-items save-for-mobile">
      <li>
        <Link className="sub-menu-item" to="/saving-box">
          <div className="icon-container">
            <img
              src="images/Ejara-assets/landingPage_images/download (2).svg"
              alt="savings icon"
            />
          </div>
          <div className="sub-menu-detail">
            <h4>Savings Box</h4>
            <p>Saving for Emergencies</p>
          </div>
        </Link>
      </li>
      <li>
        <Link className="sub-menu-item" to="/saving-project">
          <div className="icon-container">
            <img
              src="images/Ejara-assets/landingPage_images/download (1).svg"
              alt="goal icon"
            />
          </div>
          <div className="sub-menu-detail">
            <h4>Project Savings</h4>
            <p>Save for your projects</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export const InvestMenu = () => {
  return (
    <ul className="invest-sub-menu-items invest-for-mobile">
      <li>
        <Link className="sub-menu-item" to="/invest">
          <div className="icon-container">
            <img
              src="images/Ejara-assets/landingPage_images/download.svg"
              alt="wallet icon"
            />
          </div>
          <div className="sub-menu-detail">
            <h4>Investment</h4>
            <p>Earn up to 6.5% annual interest</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export const RegionsMenu = () => {
  return (
    <ul className="region-sub-menu-items region-for-mobile">
      <li className="sub-menu-item">
        <a href="#">Africa</a>
      </li>
      <li className="sub-menu-item">
        <a href="#">Europe</a>
      </li>
      <li className="sub-menu-item">
        <a href="#">Americas</a>
      </li>
      <li className="sub-menu-item">
        <a href="#">Asia</a>
      </li>
      <li className="sub-menu-item">
        <a href="#">Oceania</a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuImage, setMenuImage] = useState(true);
  const [accordion, setAccordion] = useState(false);
  const [saveAccordion, setSaveAccordion] = useState(false);
  const [investAccordion, setInvestAccordion] = useState(false);

  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/">
          <img
            className="header-logo"
            src="images/Ejara-assets/landingPage_images/imgi_1_67f657686c86f47cedc4c5f9_Logo Horizontal.svg"
            alt="Ejara Logo"
          />
        </Link>

        <ul className="nav-menu">
          <li className="save-menu-item">
            Save
            <SaveMenu />
          </li>
          <li className="invest-menu-item">
            Invest
            <InvestMenu />
          </li>
          <li>
            <Link to="/business">Ejara for Business</Link>
          </li>
        </ul>

        <LanguageSelector />

        <ul>
          <li className="region-menu-item">
            <img
              className="globe-icon"
              src="images/Ejara-assets/landingPage_images/download (5).svg"
              alt="Region icon"
            />
            <p>Africa</p>
            <RegionsMenu />
          </li>
        </ul>

        <img
          className="hamburger-menu"
          src={
            menuImage
              ? "images/Ejara-assets/landingPage_images/download (4).svg"
              : "images/Ejara-assets/landingPage_images/cancel.svg"
          }
          alt="hamburger menu"
          onClick={() => {
            setToggleMenu(!toggleMenu);
            setMenuImage(!menuImage);
          }}
        />

        <div className={toggleMenu ? "toggle-on" : "toggle-off"}>
          <ul className="mobile-width">
            <li className="mobile-region-menu-item">
              <div className="accordion">
                <div className="mobile-region">
                  <img
                    className="globe-icon"
                    src="images/Ejara-assets/landingPage_images/download (5).svg"
                    alt="Region icon"
                  />
                  Africa
                </div>
                <div onClick={() => setAccordion(!accordion)}>
                  {accordion ? (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_up.png"
                      alt=""
                    />
                  ) : (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_down.png"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {accordion && <RegionsMenu />}
            </li>
          </ul>

          <ul className="mobile-nav-menu mobile-width">
            <li className="mobile-save-menu-item">
              <div className="accordion">
                Save
                <div onClick={() => setSaveAccordion(!saveAccordion)}>
                  {accordion ? (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_up.png"
                      alt=""
                    />
                  ) : (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_down.png"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {saveAccordion && <SaveMenu />}
            </li>
            <li className="mobile-invest-menu-item">
              <div className="accordion">
                Invest
                <div onClick={() => setInvestAccordion(!investAccordion)}>
                  {accordion ? (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_up.png"
                      alt=""
                    />
                  ) : (
                    <img
                      src="images/Ejara-assets/landingPage_images/keyboard_arrow_down.png"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {investAccordion && <InvestMenu />}
            </li>
            <li className="ejara-for-business-link">
              <a href="#">Ejara for Business</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
