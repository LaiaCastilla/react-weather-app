import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props.data);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sat</div>
          <div>
            <a href="/">
              <WeatherIcon
                className="forecast-icon"
                code="clear-sky-day"
                size={70}
              />
            </a>
          </div>
          <div className="forecast-temp">
            <span className="maxT">19°</span>
            <span className="minT">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
