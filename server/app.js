const express = require("express");
const cors = require("cors");
const weatherController = require("./controllers/Weather.controller");
const PORT = 4000;

const start = () => {
  const app = express();
  app.use(cors());
  console.log("Start");
  weatherController.search({ app });
  app.listen(PORT, () => {
    console.log("listening on port localhost:" + PORT);
  });
};

module.exports.start = start;
