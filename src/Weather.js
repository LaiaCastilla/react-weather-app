import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { Oval } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleCurrentResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
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
  function searchWeather() {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleCurrentResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function activeGeolocation(event) {
    event.preventDefault();
    function retrievePosition(position) {
      const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
      axios.get(apiUrl).then(handleCurrentResponse);
    }

    navigator.geolocation.getCurrentPosition(retrievePosition);
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
                  <i
                    className="fa-solid fa-location-dot location"
                    onClick={activeGeolocation}
                  ></i>
                </span>
              </div>
            </form>
            <br />
            <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />

            <WeatherForecast city={weatherData.city} unit={unit} />
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
