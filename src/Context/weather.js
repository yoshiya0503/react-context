/**
 * @fileoverview weatherContext
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { createContext } from 'react';

export const WeatherContext = createContext(null);

const url = `http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,jp&APPID=${process.env.REACT_APP_WEATHER_KEY}`;

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return action.data;
    case 'GET_FAILED':
      return { message: 'failed GET' };
    case 'POST_SUCCESS':
      return action.data;
    case 'POST_FAILED':
      return { message: 'failed POST' };
    case 'DELETE_SUCCESS':
    case 'DELETE_FAILED':
    default:
      return state;
  }
};

export const getWeather = (dispatch) => (
  async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({ type: 'GET_SUCCESS', data: json });
    } catch(e) {
      dispatch({ type: 'GET_FAILED' });
    }
  }
);

export const postWeather = (dispatch) => (
  async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({ type: 'POST_SUCCESS', data: json });
    } catch(e) {
      dispatch({ type: 'POST_FAILED' });
    }
  }
);

export const deleteWeather = (dispatch) => (
  async () => {
    try {
      const weather = await fetch();
      dispatch({ type: 'POST_SUCCESS', weather });
    } catch(e) {
      dispatch({ type: 'POST_FAILED' });
    }
  }
);
