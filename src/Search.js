import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter city where coffee shop is located here"
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
    </div>
  );
}
