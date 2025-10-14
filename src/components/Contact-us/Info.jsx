import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Info = () => {
  return (
    <div>
        <div> 
            <h2>Contact Us</h2>
            <p>We are bridging the gap between service providers and end users</p>
        </div>&nbsp;
        <div>
          < classname ="phones" FaPhoneAlt />
            <h5>Chat with our Experts</h5>
            <p>+09373847848(WhatsApp)
                +2345746474(WhatsApp)
            </p>

            < classname ="mails" IoMdMail />
            <h5>Send us a mail</h5>
            <p>Our friendly team is here to help you.Send a mail to 
                <a>Epsilon@gmail.com</a>
            </p>
        </div>
        <div>Connect with us on social media</div>
    </div>
  );
};

export default Info;
