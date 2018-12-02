/**
 * @fileoverview WeatherContainer
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { WeatherContext, useWeather } from '../Context/weather';
import { DialogContext, useDialog } from '../Context/dialog';
import Weather from '../Components/weather';
import Dialog from '../Components/dialog';


export default () => {
  const [weatherState, weatherAction] = useWeather();
  const [dialogState, dialogAction] = useDialog();

  useEffect(() => {
    weatherAction.getWeather();
  }, []);

  useEffect(() => {
    if (weatherState.error) {
      dialogAction.open(weatherState.error.message);
    }
  }, [weatherState.error])

  if (weatherState.loading) {
    return <CircularProgress />;
  }

  return (
    <DialogContext.Provider value={{state: dialogState, action: dialogAction}}>
      <WeatherContext.Provider value={{state: weatherState, action: weatherAction}}>
        <Dialog />
        <Weather />
      </WeatherContext.Provider>
    </DialogContext.Provider>
  );
};
