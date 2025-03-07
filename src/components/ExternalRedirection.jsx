import React, { useState, useEffect } from "react";
import "./ExternalRedirection.css";
const ExternalRedirection = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "";
    }
  }, [countdown]);

  return (
    <div className="external-redirection-container-header">
      <div className="external-redirection-container">
        <div className="external-redirection-container-title">
          <h2>Empty Redirecting Container</h2>
          <p>Redirecting to Main Page in {countdown} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ExternalRedirection;
