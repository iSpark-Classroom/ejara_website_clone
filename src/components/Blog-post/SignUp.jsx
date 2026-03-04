import React from "react";
import "../../styles/Blog-post/SignUp.css";

const SignUp = () => {
  return (
    <div className="sign">
      <h1>Sign up to our Newsletter</h1>
      <p>Stay up to date with latest news announcements and articles.</p>
      <form>
        <label htmlFor="email">Email*</label>
        <input type="email" placeholder="Enter Email" name="email" />
      </form>
    </div>
  );
};

export default SignUp;
