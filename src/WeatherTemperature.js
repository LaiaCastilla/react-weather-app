import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="current-temperature">
      <span className="current-temp"> {props.celsius}</span>
      <span className="current-unit degree">°C</span>
      <span className="alternative-units">
        |{" "}
        <a className="alternative-degree" href="/">
          °F
        </a>
      </span>
    </div>
  );
}
