/**
 * @fileoverview WeatherContainer
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { useEffect } from 'react';
import { WeatherContext, useWeather } from '../Context/weather';
import Weather from '../Components/weather';


export default () => {
  const [state, action] = useWeather();

  useEffect(() => {
    action.getWeather();
  }, []);

  if (state.error) {
    return <div> this is error dialog {state.error.message}</div>;
  }

  if (state.loading) {
    return <div> Loading...  </div>;
  }
  return (
    <WeatherContext.Provider value={{state, action}}>
      <Weather />
    </WeatherContext.Provider>
  );
};
