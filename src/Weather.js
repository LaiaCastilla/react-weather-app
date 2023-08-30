import React from "react";
import sunCloud from "./images/sun-cloud.png";
import Daytime from "./Daytime";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <form>
            <div className="row">
              <span className="mb-3 col-8 col-md-9  ">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeHolder="Enter a city..."
                  autoFocus="on"
                  autoComplete="off"
                />
              </span>
              <span className="col-2 text-center">
                <button type="submit" className="btn shadow">
                  Search
                </button>
              </span>
              <span className="col-2 col-md-1 text-end">
                <i className="fa-solid fa-location-dot location"></i>
              </span>
            </div>
          </form>
          <div className="header row">
            <img
              className="card-img day0-weather"
              src={sunCloud}
              alt="SunCloud"
            />
            <div className="header-left col-6">
              <div className="day-time">
                <Daytime />
              </div>
              <div className="city">Barcelona</div>
              <div className="current-weather-description">
                Partially clouded
              </div>
            </div>
            <div className="header-right col-6">
              <div className="current-temperature">
                <span className="current-temp"> 23</span>
                <span className="current-unit degree">°C</span>
                <span className="alternative-units">
                  |{" "}
                  <a className="alternative-degree" href="/">
                    °F
                  </a>
                </span>
              </div>

              <div className="extra-information">
                <div className="humidity">
                  Humidity: <span>65</span>%
                </div>
                <div className="wind">
                  Wind: <span> 3</span> km/h
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <footer>
          <a
            href="https://github.com/Aylhenia/react-weather-app"
            target="_blank noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://laiafrontend.netlify.app/"
            target="_blank noreferrer"
          >
            Laia
          </a>
        </footer>
      </div>
    </div>
  );
}
