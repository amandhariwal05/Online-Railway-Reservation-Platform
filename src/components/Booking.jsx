import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="booking-background">
      <div className="booking-wrapper">
        <div className="booking-form">
          <h1>Book Your Journey</h1>
          <div className="form-fields">
            <div className="input-group">
              <input
                type="text"
                name="from"
                placeholder="From"
                className="input-field"
              />
              <input type="date" name="date" className="input-field" />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="to"
                placeholder="To"
                className="input-field"
              />

              <div id="class-div">
                <select name="class-Selector" id="class-selector">
                  <option value="General" className="train-classes" selected>
                    General
                  </option>
                  <option value="Ladies" className="train-classes">Ladies</option>
                  <option value="Tatkal" className="train-classes">Tatkal</option>
                  <option value="Premium" className="train-classes">Premium</option>
                </select>
              </div>
            </div>
          </div>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" />
              Railway Pass Concession
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              Flexible with Date
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              Train with Available Berth
            </label>
          </div>
          <div className="button-container">
            <button className="search-button">
              <a href="">Search</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
