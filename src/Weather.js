import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

// import { Oval } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card">
            <form>
              <div className="row">
                <span className="mb-3 col-8 col-md-9  ">
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    placeHolder="Enter a city..."
                    autoFocus="on"
                    autoComplete="off"
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
    const apiKey = "fdt0a6ab6o2733f48fa51ccaa0c76a01";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <p>
        Loading
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
