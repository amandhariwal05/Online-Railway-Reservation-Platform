import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <div className="services-container">
        <div className="services-container-title">
          <h1>Services We Provide</h1>
        </div>
        <div className="services-container-content">
          <div className="services-container-content-item">
            <div>
              <a className="serv" href="">
                <img src="/flight.png" alt="" />
                <h3>Flights</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/hotel.png" alt="" />
                <h3>Hotels</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/raildristhi.png" alt="" />
                <h3>Rail Dristhi</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/catering.png" alt="" />
                <h3>E-Catering</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/bus.png" alt="" />
                <h3>Bus</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/holidaypackages.png" alt="" />
                <h3>Holiday Packages</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/touristtrain.png" alt="" />
                <h3>Tourist Train</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/hill.png" alt="" />
                <h3>Hill Railways</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/vip.png" alt="" />
                <h3>Charter Train</h3>
              </a>
            </div>
            <div>
              <a className="serv" href="">
                <img src="/gallery.png" alt="" />
                <h3>Gallery</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
