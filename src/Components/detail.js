/**
 * @fileoverview WeatherDetail
 * @name detail.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { useContext } from 'react';
import { WeatherContext } from '../Context/weather';

export default () => {
  const ctx = useContext(WeatherContext);
  return (
    <div>
      { JSON.stringify(ctx.state.weather.list[0]) }
    </div>
  );
};
