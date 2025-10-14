import React from "react";
import "../../styles/Ejara-for-business/companies.css"; // Importing CSS

function Companies() {
  return (
    <div className="companies">
      <div className="target">
        <p className="paragraph-1">OUR TARGET</p>

        <h2>Companies from various industries Trust us</h2>

        <p className="paragraph-2">
          Here are some of the organizations that Ejara for Business with can
          help you transact:
        </p>
      </div>

      <div className="images">
        <div className="icons">
          <img
            className="react-icon"
            src="images/Ejara-assets/Ejara_for_business/images/heart1.svg"
            alt="image of a heart"
          />
          <p>NGO</p>
        </div>

        <div className="icons">
          <img
            className="react-icon"
            src="images/Ejara-assets/Ejara_for_business/images/building.svg"
            alt="image of a building"
          />
          <p>Fintechs</p>
        </div>

        <div className="icons">
          <img
            className="react-icon"
            src="images/Ejara-assets/Ejara_for_business/images/wallet.svg"
            alt="image of a wallet"
          />
          <p>FX / Remittance</p>
        </div>

        <div className="icons">
          <img
            className="react-icon"
            src="images/Ejara-assets/Ejara_for_business/images/bank.svg"
            alt="image of a bank"
          />
          <p>Banks</p>
        </div>

        <div className="icons">
          <img
            className="react-icon"
            src="images/Ejara-assets/Ejara_for_business/images/rocket.svg"
            alt="image of a rockect"
          />
          <p>Start-ups</p>
        </div>
      </div>
    </div>
  );
}

export default Companies;
