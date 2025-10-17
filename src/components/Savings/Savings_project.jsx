import React from "react";
import "../../styles/Savings_project/project.css";
function SectionTwo() {
  return (
    <>
      <div className="savingsProject">
        <div className="text-container">
          <h1>Project savingsProject savings</h1>
          <p>
            Make your dreams come true with Project Savings. Whether it's for
            back-to-school, a wedding, or a trip, we help you achieve your
            savings goals with a personalized plan and automatic reminders.
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
          <img src="/images/Ejara-assets/savings/phone_p.png" alt="phone_p" />
        </div>
      </div>
      <section className="process-section">
        <div className="title">
          <h1>plan your future</h1>
          <p>Achieve your financial goals step by step</p>
        </div>
        <div className="img-card-section">
          <div className="img-card">
            <div className="image-wrapper">
              <img
                src="/images/Ejara-assets/savings/phn_box.png"
                alt="phn_box"
              />
            </div>
            <div className="text">
              <h3>Secure & Rewarded Growth</h3>
              <p>
                Your savings are protected by government bonds with an annual
                interest rate of 3%. Stay engaged and reap the benefits!
              </p>
            </div>
          </div>
          <div className="img-card">
            <div className="image-wrapper">
              <img src="/images/Ejara-assets/savings/page.png" alt="page" />
            </div>
            <div className="text">
              <h3>Flexible Savings Options</h3>
              <p>
                Choose from several categories such as Travel, Education, etc.
                Save between 5,000 and 10,000,000 FCFA over a period adapted to
                your pace (from 1 week to 24 months).
              </p>
            </div>
          </div>
          <div className="img-card">
            <img src="/images/Ejara-assets/savings/phone.png" alt="phone" />
          </div>
          <div className="text">
            <h3>Progress Tracking</h3>
            <div className="image-wrapper">
              <p>
                Visualize the progress of your goals with clear metrics and
                receive friendly reminders to stay on track. Manage up to 10
                savings goals at once.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionTwo;
