import React from 'react';
import menu from '../../menu';
import Forecast from './Forecast';

require('./Home.css');

const Home = (state) => {
  const { title, description } = menu;
  return (
    <div className="home">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <Forecast />
    </div>
  );
};

export default Home;
