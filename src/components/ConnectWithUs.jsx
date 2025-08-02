import React from "react";
import "./ConnectWithUs.css";

const ConnectWithUs = () => {
  return (
    <div>
      <div className="social-connect-container">
        <div className="social-connect-container-title">
          <h2>Get Connected with us on : </h2>
        </div>
        <div className="social-connect-container-content">
          <a href="">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
