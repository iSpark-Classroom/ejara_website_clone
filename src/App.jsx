import "./styles/App.css";
import LandingPage from "./components/Landing-page";
import Invest from "./components/Invest";
import Investment from "./components/Invest/Investment";
import InvestedSafely from "./components/Invest/InvestedSafely";
import Guaranteed from "./components/Invest/Guaranteed";

function App() {
  return (
    <div className="container">
      <LandingPage />
      <Investment />
      <InvestedSafely />
      <Guaranteed />
    </div>
  );
}

export default App;
