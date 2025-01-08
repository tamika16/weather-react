import React from "react";
import Search from "./Search.js";
import Data from "./Data.js";
import Forecast from "./Forecast.js";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 className="main-header">Coffee Shop Weather</h1>
      </div>
      <div className="weather-app">
        <Search />
        <Data />
        <Forecast />
        <footer>
          This project was coded by
          <a
            href="https://github.com/tamika16"
            target="_blank"
            rel="noreferrer"
          >
            Tamika Englehart
          </a>
          , is open-sourced on
          <a
            href="https://github.com/tamika16/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on
          <a
            href="https://coffeeshopweather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
