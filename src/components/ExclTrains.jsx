import React from "react";
import "./ExclTrains.css";

const ExclTrains = () => {
  return (
    <div className="excl-trains-container">
      <div className="excl-trains-title">
        <h1>Exclusive Trains</h1>
      </div>
      <div className="excl-trains-content">
        <div className="excl-trains-items">
          <div className="excl-trains-item">
            <h3>Maharajas' Express</h3>
            <p>
              Experience luxury on rails with India's most expensive and
              luxurious tourist train. The Maharajas' Express offers spectacular
              journeys across India's most fascinating destinations with
              world-class amenities and traditional hospitality.
            </p>
          </div>
          <div className="excl-trains-item">
            <h3>Bharat Gaurav Tourist Train</h3>
            <p>
              Discover India's rich cultural heritage through themed journeys
              covering important historical, cultural, and religious
              destinations. These trains offer comfortable travel with curated
              experiences showcasing India's diversity.
            </p>
          </div>
          <div className="excl-trains-item">
            <h3>Vande Bharat Express</h3>
            <p>
              India's indigenous semi-high speed train set, featuring
              state-of-the-art technology and passenger amenities. Known for its
              speed, safety, and modern comfort, it represents the future of
              Indian Railways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclTrains;
