import React from 'react';

require('./ForecastItem.css');

const ForecastItem = (forecastItem) => {
  const itemTime = forecastItem.forecastItem.dt_txt;
  return (
    <li>{itemTime}</li>
  );
};

export default ForecastItem;
