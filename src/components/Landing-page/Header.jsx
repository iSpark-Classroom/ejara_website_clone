import React from "react";
import "../../styles/landing-page/header.css"; // Importing CSS
import { Link } from "react-router";
import LanguageSelector from "../language-selector";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
