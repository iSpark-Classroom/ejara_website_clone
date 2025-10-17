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

            <div className="mail"><IoMdMail classname ="mails"/>
            <h5>{t("send_mail")}</h5>
            <p>{t("send_mail_intro")}
                <a>Epsilon@gmail.com</a>
            </p>
            </div>

        </div>
        <div className="medias">{t("connect_with")}
          <div className="logos">
            <IoLogoFacebook color="#199FF7" className="social"/>
          <RiInstagramFill color="#DB4688" className="social"/>
          <FaSquareXTwitter color="#080808" className="social"/>
          <FaLinkedin color="#116AC3" className="social"/>
          </div>
        </div>

    </div>
  );
};

export default Info;
