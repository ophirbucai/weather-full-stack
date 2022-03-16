const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/:locationName', async (req, res) => {
  let { locationName } = req.params;

  const url = `http://api.weatherapi.com/v1/current.json?key=bd2d88e4012244f5adb113522221603&q=${locationName}`;

  try {
    let response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(4000, () => console.log('app listening on port 4000!'));
