import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { Oval } from "react-loader-spinner";

// import { Oval } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleCurrentResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      longitude: response.data.coordinates.longitude,
      latitude: response.data.coordinates.latitude,
      description:
        response.data.condition.description.charAt(0).toUpperCase() +
        response.data.condition.description.slice(1),
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
    });
  }
  function handleForecastResponse(response) {
    setForecastData({
      ready: true,
      response: response.data,
    });
  }
  function searchWeather() {
    const apiKey = "fdt0a6ab6o2733f48fa51ccaa0c76a01";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleCurrentResponse);
    axios.get(apiForecastUrl).then(handleForecastResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCityUpdate(event) {
    event.preventDefault();
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
            <br />
            <WeatherInfo data={weatherData} />
            <WeatherForecast data={forecastData.response} />
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
      <p
        className="loading"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <br />
        <Oval
          height={200}
          width={200}
          color="#389c9c"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="##389c9c"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </p>
    );
  }
}
