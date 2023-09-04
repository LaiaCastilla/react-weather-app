import React, { useState } from "react";

export default function WeatherTemperature(props) {
  // const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  if (props.unit === "celsius") {
    return (
      <div className="current-temperature">
        <span className="current-temp"> {props.celsius}</span>
        <span className="current-unit degree">°C </span>
        <span className="alternative-units">
          |{" "}
          <a
            className="alternative-degree"
            href="/"
            onClick={convertToFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="current-temperature">
        <span className="current-temp"> {fahrenheit}</span>
        <span className="current-unit degree">°F </span>
        <span className="alternative-units">
          |{" "}
          <a className="alternative-degree" href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
