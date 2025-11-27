import React from "react";
import "../../styles/save_Box/save.css";
function SectionOne() {
  return (
    <>
      <div className="savingsBox">
        <div className="text-container">
          <h1>savings box</h1>
          <p>
            The Savings Box helps you effortlessly save for emergencies while
            earning a 2% annual interest rate. Backed by government bonds, it
            guarantees security, flexibility, and easy access to your funds—all
            without disrupting your financial habits.
          </p>
          <div className="pic">
            <img
              src="/images/Ejara-assets/savings/apple_store.png"
              alt="apple_store"
            />

            <img src="/images/Ejara-assets/savings/google.png" alt="google" />
          </div>
        </div>

        <div className="image-container">
          <img src="/images/Ejara-assets/savings/phone.png" alt="phone" />
        </div>
      </div>
      <section className="process-section">
        <div className="title">
          <h1>Savings without constraints</h1>
          <p>Save without the stress of emergencies</p>
        </div>

        <div className="img-card-section">
          <div className="img-card">
            <div className="image-wrapper">
              <img src="/images/Ejara-assets/savings/phone.png" alt="" />
            </div>
            <h3>Simple & Flexible Savings</h3>
            <p>Start with just 500 FCFA and save at your own pace.</p>
          </div>
          <div className="img-card">
            <div className="image-wrapper">
              <img src="/images/Ejara-assets/savings/phone.png" alt="" />
            </div>
            <h3>Win by Saving</h3>
            <p>
              Enjoy a 2% annual interest rate, automatically added to your
              balance each year.
            </p>
          </div>
          <div className="img-card">
            <div className="image-wrapper">
              <img src="/images/Ejara-assets/savings/phone.png" alt="" />
            </div>
            <h3>Quarterly Withdrawals</h3>
            <p>
              Enjoy one free withdrawal per quarter, giving you flexible access
              to your savings while promoting financial discipline.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionOne;
