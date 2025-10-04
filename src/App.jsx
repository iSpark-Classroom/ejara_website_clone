import "./styles/App.css";
import LandingPage from "./components/Landing-page";
import Invest from "./components/Invest";
import EjaraForBusiness from "./components/Ejara-for-business";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
    
  return (
    <BrowserRouter className="main-container">
   
    

     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/business" element={<EjaraForBusiness/>} />

      </Routes>

    </BrowserRouter>
  );
  
}

export default App;
