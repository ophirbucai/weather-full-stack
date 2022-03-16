const weatherService = require("../services/Weather.service");

const search = ({ app }) => {
  app.get("/search/:locationName", async (req, res) => {
    try {
      const { locationName } = req.params;
      const weather = await weatherService.getWeather({ locationName });
      res.json(weather);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

module.exports = { search };
