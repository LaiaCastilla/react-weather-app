import React from "react";
import WeatherIcon from "./WeatherIcon";
import Daytime from "./Daytime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="header row">
        <div className="header-left col-6">
          <div className="day-time">
            <Daytime />
          </div>
          <div className="city">{props.data.city}</div>
          <div className="current-weather-description ">
            {props.data.description}
          </div>
        </div>
        <div className="header-right col-6">
          <WeatherIcon code={props.data.icon} />
          <div className="current-temperature">
            <span className="current-temp"> {props.data.temperature}</span>
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
              Humidity: <span>{props.data.humidity}</span>%
            </div>
            <div className="wind">
              Wind: <span> {props.data.wind}</span> km/h
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
