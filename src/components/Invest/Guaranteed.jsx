import React from "react";
import "../../styles/Guaranteed.css";

const Guaranteed = () => {
  return (
    <section className="guaranteed-container ">
      <div className="capital">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/invest/images/imgi_5_67f68d0955b6e582eadd342b_Bank_of_Central_African_States_logo.svg.png"
            alt="A picture of Antelopes"
          />
        </div>
        <h2>Guaranteed Capital</h2>
        <div>
          <p>
            Your investment is secured by the BEAC,offering maximum protection
            of your capital with minimal risk.
          </p>
        </div>
      </div>

      <div className="ota-cameroon">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/invest/images/imgi_6_67f68d08a3a917592890e34c_Screenshot 2025-04-09 at 4.57.18 PM.png"
            alt="A small picture of the cameroon flag and a text under"
          />
        </div>

        <h2>Attractive Yeild</h2>
        <div>
          <p>
            Benefit from an annual interest rate of up to 6.5%, among the best
            on the market for a state-guaranteed investment.
          </p>
        </div>
      </div>

      <div className="accessible">
        <div className="image-container">
          <img
            src="public/images/Ejara-assets/invest/images/imgi_7_67f68e53347391895e2b727f_illustration.png"
            alt="A hand holding some buildings and another hand on top"
          />
        </div>

        <h2>Accessible Investment</h2>
        <div>
          <p>
            Start investing from 1000 FCFA and build your investment portfolio
            at your pace, with no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guaranteed;
