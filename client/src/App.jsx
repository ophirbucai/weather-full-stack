import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { SearchWeather } from "./components/SearchWeather/SearchWeather";
import Forecast from "./components/Forecast/Forecast";

const apiUrl = "http://localhost:4000/";
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffecae;
  padding: 20px;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [memo, setMemo] = useState({});

  const searchQueryHandler = async (query) => {
    try {
      if (memo[query]) {
        setWeather(memo[query]);
        return;
      }
      const { data } = await axios.get(`${apiUrl}search/${query}`);
      setMemo({ query: data });
      setWeather(data);
    } catch (e) {
      setError(e);
    }
  };
  console.log(weather);

  return (
    <AppContainer>
      {error && <div>{error.message}</div>}
      <SearchWeather searchQueryHandler={searchQueryHandler} />
      {/* <Forecast weather={weather} /> */}
    </AppContainer>
  );
}

export default App;
