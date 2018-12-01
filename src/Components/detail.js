/**
 * @fileoverview WeatherDetail
 * @name detail.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { useContext } from 'react';
import { WeatherContext } from '../Context/weather';

export default () => {
  const weather = useContext(WeatherContext);
  if (!weather.state) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      { JSON.stringify(weather.state.list[0]) }
    </div>
  );
};
