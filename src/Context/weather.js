/**
 * @fileoverview weatherContext
 * @name weather.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { createContext, useReducer } from 'react';
import axios from 'axios';

export const WeatherContext = createContext({});

const url = `http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,jp&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
//const url = `http://api.openweathermap.org/data/2.5/forecast`

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'GET_START':
      return Object.assign(state, { loading: true });
    case 'GET_SUCCESS':
      return Object.assign(state, { weather: action.data, loading: false });
    case 'GET_FAILED':
      return Object.assign(state, { error: action.error, loading: false });
    case 'POST_SUCCESS':
      return Object.assign(state, { weather: action.data, loading: false });
    case 'POST_FAILED':
      return Object.assign(state, { error: action.error });
    default:
      return state;
  }
};

export const useWeather = () => {
  const [state, dispatch] = useReducer(weatherReducer, {
    weather: {},
    loading: true,
    error: null,
  });

  const getWeather = async () => {
    try {
      const result = await axios.get(url);
      dispatch({ type: 'GET_SUCCESS', data: result.data });
    } catch(error) {
      dispatch({ type: 'GET_FAILED', error });
    }
  }

  const postWeather = async () => {
    try {
      const result = await axios.get(url);
      dispatch({ type: 'POST_SUCCESS', data: result.data });
    } catch(error) {
      dispatch({ type: 'POST_FAILED', error });
    }
  }
  return [state, { getWeather, postWeather }];
};
