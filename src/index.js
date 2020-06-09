import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import WeatherContainer from "./containers/WeatherContainer";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<WeatherContainer />, document.getElementById("root"));
