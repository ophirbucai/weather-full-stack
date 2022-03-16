const axios = require("axios");
const API_KEY = "bd2d88e4012244f5adb113522221603";
const baseUrl = "http://api.weatherapi.com/v1/current.json";

const getWeather = async ({ locationName }) => {
  const url = `${baseUrl}?key=${API_KEY}&q=${locationName}`;
  const { data } = await axios.get(url);
  return data;
};

module.exports = { getWeather };
