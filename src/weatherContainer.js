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
}
