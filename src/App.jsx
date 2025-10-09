import "./styles/App.css";
import LandingPage from "./components/Landing-page";
import Invest from "./components/Invest";
import EjaraForBusiness from "./components/Ejara-for-business";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Landing-page/Header";
import SavingBox from "./components/Savings/SavingBox";
import SavingProject from "./components/Savings/SavingProject";
import Footer from "./components/Landing-page/Footer";

function App() {
  return (
    <BrowserRouter className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/saving-box" element={<SavingBox />} />
        <Route path="/saving-project" element={<SavingProject />} /> 
        <Route path="/invest" element={<Invest />} />
        <Route path="/business" element={<EjaraForBusiness />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
