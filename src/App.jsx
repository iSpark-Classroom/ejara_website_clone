import "./styles/App.css";
import LandingPage from "./components/Landing-page";
import Invest from "./components/Invest";
import EjaraForBusiness from "./components/Ejara-for-business";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Landing-page/Header";
import SavingBox from "./components/Savings/SavingBox";
import SavingProject from "./components/Savings/SavingProject";
import Footer from "./components/Landing-page/Footer";
// import Faqs from "./components/Faqs";
import Faqs from "./components/Faqs";
import TermsAndConditions from "./components/Terms-and-conditions";
import PrivacyPolicy from "./components/Privacy-policy";
import DataProtection from "./components/Data-protection";
import ContactUs from "./components/Contact-us";
import BlogPost from "./components/Blog-post";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/saving-box" element={<SavingBox />} />
        <Route path="/saving-project" element={<SavingProject />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/business" element={<EjaraForBusiness />} />
        <Route path="/tac" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
