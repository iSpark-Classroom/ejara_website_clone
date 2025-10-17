import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// // ContactUs
import enContactUs from "../locales/en/contactUs.json";
import frContactUs from "../locales/fr/contactUs.json";

// // LandingPage
import enLandingPage from '../locales/en/landingPage.json'
import frLandingPage from '../locales/fr/landingPage.json'

// Invest
import enInvest from '../locales/en/invest.json'
import frInvest from '../locales/fr/invest.json'

//BusinessPage
import enBusinessPage from '../locales/en/businessPage.json'
import frBusinessPage from '../locales/fr/businessPage.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    ns: ["contactUs", "landingPage", "invest", "businessPage"],
    defaultNS: "contactUs",
    resources: {
      en: {
        contactUs: enContactUs,
        landingPage: enLandingPage,
        invest: enInvest,
        businessPage: enBusinessPage
      },
      fr: {
        contactUs: frContactUs,
        landingPage: frLandingPage,
        invest: frInvest,
        businessPage: frBusinessPage,
      },
    },
  });

export default i18n;
