import React from 'react'
import { SiJohndeere } from 'react-icons/si';
import "../../styles/contact-us/Contact-form.css"

const ContactForm = ({t}) => {
  return (
    <div className='contact_form'>
        <h2>{t("supportFormTitle")}</h2>

        <form>
            <div className="nameInput">

           <label htmlFor='name'>{t("name")}</label>
           <input
           id='name'
           type="text"
        //    value={}
           placeholder='E.g. Damilola John'
           />
            </div>

            <div className="emailInput">

           <label htmlFor='email'>{t("email")}</label>
           <input
           id='email'
           type="email"
        //    value={}
           placeholder='E.g. Dami@gmail.com'
           />
            </div>

            <div className="nameInput">

           <label htmlFor='message'>{t("message")}</label>
           <textarea name="message" id="message" cols="30" rows="5" placeholder={t("message_placeholder")}></textarea>
            </div>
            <button type="submit" className='submit'>{t("submit_button")}</button>
        </form>
    </div>
  );
};

export default ContactForm;