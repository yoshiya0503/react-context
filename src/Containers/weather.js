/**
 * @fileoverview WeatherContainer
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { useEffect, useReducer } from 'react';
import { weatherReducer, WeatherContext, getWeather, postWeather } from '../Context/weather';
import Weather from '../Components/weather';


export default () => {
  const [state, dispatch] = useReducer(weatherReducer);

  const value = { state, postWeather: postWeather(dispatch) };

  useEffect(() => {
    getWeather(dispatch)()
  }, []);

  return (
    <WeatherContext.Provider value={value}>
      <Weather />
    </WeatherContext.Provider>
  );
};
