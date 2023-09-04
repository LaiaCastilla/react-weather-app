import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxT() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temperature.maximum);
    } else {
      temperature = Math.round((props.data.temperature.maximum * 9) / 5 + 32);
    }
    return `${temperature}° `;
  }
  function minT() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temperature.minimum);
    } else {
      temperature = Math.round((props.data.temperature.minimum * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div>
        <a href="/">
          <WeatherIcon
            className="forecast-icon"
            code={props.data.condition.icon}
            size={40}
          />
        </a>
      </div>
      <div className="forecast-temp">
        <span className="maxT">{maxT()}</span>
        <span className="minT">{minT()}</span>
      </div>
    </div>
  );
}
