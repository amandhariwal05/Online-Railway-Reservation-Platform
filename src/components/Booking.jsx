import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Booking.css";

const filterButtons = [
  "Railway Pass Concession",
  "Flexible with Date",
  "Train with avaliable Berth",
];

const Booking = () => {
  return (
    <div>
      <div id="booking-img-container">
        <div id="main-container">
          <div id="booking-form-container">
            <h1>Book your journey</h1>
            <div id="booking-form-container-inputs">
              <div id="lvl-1">
                <input
                  type="text"
                  name="from"
                  id="from"
                  placeholder="From"
                  className="booking-input"
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date"
                  className="booking-input date-input"
                />
              </div>
              <div id="lvl-2">
                <input
                  type="text"
                  name="to"
                  id="to"
                  placeholder="To"
                  className="booking-input"
                />
                <div id="category-container">
                  <div id="category-container-header">
                    <p>Select Class</p>
                    <IoIosArrowDropdown />
                  </div>
                  <div id="category-container-buttons">
                    <p className="class_button">AC First Class</p>
                    <p className="class_button">AC 2 Tier</p>
                    <p className="class_button">AC 3 Tier</p>
                    <p className="class_button">Sleeper Class</p>
                    <p className="class_button">Second Sitting</p>
                  </div>
                </div>
              </div>
              <div id="lvl-3">
                {filterButtons.map((item, index) => (
                  <div id="lvl-3-container">
                    <div>
                      <input type="checkbox" id="filterButtons"></input>
                      <label htmlFor="filterButtons" id="labelFilterButtons">{item}</label>
                    </div>
                  </div>
                ))}
                <div id="searchButtonDiv">
                  <button id="searchButton">
                    <h4>Search</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
