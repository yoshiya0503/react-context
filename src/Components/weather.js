/**
 * @fileoverview WeatherComponents
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { useContext } from 'react';
import { WeatherContext } from '../Context/weather';
import Detail from './detail';

export default () => {
  const ctx = useContext(WeatherContext);
  return (
    <div>
      <button type='button' onClick={ctx.action.postWeather}>
        <h1> reflesh!!! </h1>
      </button>
      <Detail />
    </div>
  );
};
