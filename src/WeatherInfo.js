import React from "react";
import WeatherIcon from "./WeatherIcon";
import Daytime from "./Daytime";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon
            code={props.data.icon}
            size={120}
            className="day0-weather"
          />
          <div className="current-temperature">
            <WeatherTemperature celsius={props.data.temperature} />
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
