import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxT() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}° `;
  }
  function minT() {
    let temperature = Math.round(props.data.temperature.minimum);
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
