import React, { Component } from "react";

export default class weatherContainer extends Component {
  render() {
    return (
      <div>
        <weatherSearch fetchWeather={this.fetchWeather} />
        <weatherList weather={this.state.weather} />
      </div>
    );
  }

  fetchWeather = (query = "London") => {
    fetch(
      `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={e205c8e56ca4ee10c7ef8a8ca832cae1}`
    );
  };
}
