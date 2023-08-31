import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

// import { Oval } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description:
        response.data.condition.description.charAt(0).toUpperCase() +
        response.data.condition.description.slice(1),
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });

    console.log(response);
  }
  function searchWeather() {
    const apiKey = "fdt0a6ab6o2733f48fa51ccaa0c76a01";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <span className="mb-3 col-8 col-md-9  ">
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    placeHolder="Enter a city..."
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCityUpdate}
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
            <WeatherInfo data={weatherData} />
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
  } else {
    searchWeather();
    return (
      <p>
        Loading...
        {/* <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        /> */}
      </p>
    );
  }
}
