import React from "react";
import { useState } from "react";
import "../../styles/landing-page/header.css"; // Importing CSS
import { Link } from "react-router";
import LanguageSelector from "../language-selector";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuImage, setMenuImage] = useState(true);

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
            <ul className="save-sub-menu-items">
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
          </li>
          <li className="invest-menu-item">
            Invest
            <ul className="invest-sub-menu-items">
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
          </li>
          <li>
            <Link to="/business">Ejara for Business</Link>
          </li>
        </ul>

        <LanguageSelector/>

        <ul>
          <li className="region-menu-item">
            <img
              className="globe-icon"
              src="images/Ejara-assets/landingPage_images/download (5).svg"
              alt="Region icon"
            />
            <p>Africa</p>
            <ul className="region-sub-menu-items">
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
          <ul>
            <li className="mobile-region-menu-item">
              <div className="mobile-region">
                <img
                  className="globe-icon"
                  src="images/Ejara-assets/landingPage_images/download (5).svg"
                  alt="Region icon"
                />
                <p>Africa</p>
              </div>
              <ul className="mobile-region-sub-menu-items">
                <li className="mobile-sub-menu-item">
                  <a href="#">Africa</a>
                </li>
                <li className="mobile-sub-menu-item">
                  <a href="#">Europe</a>
                </li>
                <li className="mobile-sub-menu-item">
                  <a href="#">Americas</a>
                </li>
                <li className="mobile-sub-menu-item">
                  <a href="#">Asia</a>
                </li>
                <li className="mobile-sub-menu-item">
                  <a href="#">Oceania</a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="mobile-nav-menu">
            <li className="mobile-save-menu-item">
              Save
              <ul className="mobile-save-sub-menu-items">
                <li>
                  <a className="mobile-sub-menu-item" href="#">
                    <div className="mobile-icon-container">
                      <img
                        src="images/Ejara-assets/landingPage_images/download (2).svg"
                        alt="savings icon"
                      />
                    </div>
                    <div className="mobile-sub-menu-detail">
                      <h4>Savings Box</h4>
                      <p>Saving for Emergencies</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="mobile-sub-menu-item" href="#">
                    <div className="mobile-icon-container">
                      <img
                        src="images/Ejara-assets/landingPage_images/download (1).svg"
                        alt="goal icon"
                      />
                    </div>
                    <div className="mobile-sub-menu-detail">
                      <h4>Project Savings</h4>
                      <p>Save for your projects</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="mobile-invest-menu-item">
              Invest
              <ul className="mobile-invest-sub-menu-items">
                <li>
                  <a className="mobile-sub-menu-item" href="#">
                    <div className="mobile-icon-container">
                      <img
                        src="images/Ejara-assets/landingPage_images/download.svg"
                        alt="wallet icon"
                      />
                    </div>
                    <div className="mobile-sub-menu-detail">
                      <h4>Investment</h4>
                      <p>Earn up to 6.5% annual interest</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Ejara for Business</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
