import React, { Component } from "react";

export default class WeatherContainer extends Component {
  render() {
    return (
      <div>
        Test {this.fetchWeather()}
        {/* <WeatherSearch fetchWeather={this.fetchWeather} /> */}
        {/* <weatherList weather={this.state.weather} /> */}
      </div>
    );
    console.log(this.fetchWeather);
  }

  fetchWeather = () => {
    return <div>Hello</div>; //create fetch request using api-key && don't forget to fix base_url
  };
}
