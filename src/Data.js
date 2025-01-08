import React from "react";

import "./Data.css";

export default function Data() {
  return (
    <div className="Data">
      <main className="weather-app-data">
        <div>
          <h1 className="weather-app-city">Pittsburgh</h1>
          <p className="weather-app-details">
            <span>Sunday 18:30</span>, <span>partly cloudy</span>
            <br />
            Humidity: <strong>76%</strong> Wind: <strong>2mph</strong>
          </p>
        </div>
        <div className="weather-app-temperature">
          <div className="weather-app-icon">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
              alt="Current weather icon"
            />
          </div>
          <div className="weather-app-value">26</div>
          <div className="weather-app-unit">°F</div>
        </div>
      </main>
    </div>
  );
}
