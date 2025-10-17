import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "../../styles/contact-us/Info.css"

const Info = ({t}) => {
  return (
    <div>
      <div>
        <h2>Contact Us</h2>
        <p>We are bridging the gap between service providers and end users</p>
      </div>
      &nbsp;
      <div>
        <FaPhoneAlt className="phones" />
        <h5>Chat with our Experts</h5>
        <p>+09373847848(WhatsApp) +2345746474(WhatsApp)</p>
    <div className="contact">
        <div> 
            <h2>{t("title")}</h2>
            <p>{t("intro")}</p>
        </div>
        
        <div>
          <div className="phone"> 
          <FaPhoneAlt className ="phones" />
            <h5>{t("chat with experts")}</h5>
            <p>+09373847848(WhatsApp)
                +2345746474(WhatsApp)
            </p>
            </div>

        <IoMdMail classname="mails" />
        <h5>Send us a mail</h5>
        <p>
          Our friendly team is here to help you.Send a mail to
          <a>Epsilon@gmail.com</a>
        </p>
      </div>
      <div>Connect with us on social media</div>
    </div>
  );
};

export default Info;
