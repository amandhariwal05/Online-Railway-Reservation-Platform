import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Booking from "./components/Booking.jsx";
import Services from "./components/Services.jsx";
import ExclTrains from "./components/ExclTrains.jsx";
import SocialConnect from "./components/SocialConnect.jsx";
import ExternalRedirection from "./components/ExternalRedirection.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Booking />
      <Services />
      <ExclTrains /> 
      <SocialConnect />
      {/* <ExternalRedirection /> */}
    </>
  );
}

export default App;
