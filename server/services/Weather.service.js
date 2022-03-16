const {
  getWeather: getWeatherApi,
} = require("../repositories/Weather.repository");

const getWeather = async ({ locationName }) => {
  const weather = await getWeatherApi({ locationName });
  return weather;
};

module.exports = { getWeather };
