import React from "react";
import Info from "./Info";
import ContactForm from "./Contact-form";
import '../../styles/contact-us/index.css'
import { useTranslation } from "react-i18next";
import '../../styles/contact-us/Contact-form.css'
import '../../styles/contact-us/Info.css'

const ContactUs = () => {

  const {t} = useTranslation("contactUs")
  
  return (
    <section className="contactus-container">
      <Info t = {t} />
      <ContactForm t = {t} />
      
    </section>
  );
};

export default ContactUs;
