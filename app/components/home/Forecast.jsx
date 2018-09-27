import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

require('./Forecast.css');

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: ['testing from forecast component'],
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=5746545&units=imperial&APPID=2e67bf2756763f6ded1d40dfc8a78998')
    .then(resp => resp.json())
    .then((json) => {
      this.setState({ weatherData: json.list });
    })
    .catch((err) => {
      this.setState({ weatherData: `there was an error: ${err}` });
    });
  }

  render() {
    let forecastItems = 'loading';
    const weatherData = this.state.weatherData;
    if (weatherData.length > 1) {
      forecastItems = weatherData.map(forecastItem =>
        <ForecastItem forecastItem={forecastItem} key={forecastItem.dt} />,
      );
      return (
        <ul>{forecastItems}</ul>
      );
    }
    return (
      <ul>{forecastItems}</ul>
    );
  }
}


export default Forecast;
