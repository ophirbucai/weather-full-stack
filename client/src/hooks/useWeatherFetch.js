import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/';

export const useWeatherFetch = async () => {
  const [weather, setWeather] = useState([{}]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(apiUrl);
      setIsLoading(false);
      setWeather(data);
    } catch (error) {
      setError(error);
    }
  };
  console.log(weather);
  return { weather, error, isLoading };
};
