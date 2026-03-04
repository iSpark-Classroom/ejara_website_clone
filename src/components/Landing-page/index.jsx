import React from "react";
import Hero from "./Hero";
import Sections from "./Sections";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const {t} = useTranslation("landingPage")
  return (
    <div>
      {/* <Header /> */}
      
      <Hero t = {t} />
      <Sections t = {t} />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
