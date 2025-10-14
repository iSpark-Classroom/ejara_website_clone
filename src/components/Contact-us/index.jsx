import React from "react";
import Info from "./Info";
import ContactForm from "./Contact-form";
import '../../styles/contact-us/index.css'
import { useTranslation } from "react-i18next";

const ContactUs = () => {

  const {t} = useTranslation("contactUs")
  console.log("T is =>",t);
  
  return (
    <section className="contactus-container">
      <Info t = {t} />
      <ContactForm t = {t} />
      
    </section>
  );
};

export default ContactUs;
