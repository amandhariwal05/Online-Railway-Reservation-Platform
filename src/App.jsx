import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Booking from "./components/Booking.jsx";
import ConnectWithUs from "./components/ConnectWithUs.jsx";
import ExclusiveTrains from "./components/ExclusiveTrains.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import UnderDevelopment from "./components/UnderDevelopment.jsx"; // Import your component

function App() {
  return (
    <Router>
      <div id="app-div">
        <Navbar />
        <Routes>
          {/* Default home page */}
          <Route
            path="/"
            element={
              <>
                <Booking />
                <Services />
                <ExclusiveTrains />
                <ConnectWithUs />
              </>
            }
          />
          {/* Under Development Page */}
          <Route path="/underdevelopment" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;