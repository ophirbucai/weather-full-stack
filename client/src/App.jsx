import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Forecast from './components/Forecast';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffecae;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const apiUrl = 'http://localhost:4000/';
      const { data } = await axios.get(`${apiUrl}${query}`);

      setWeather(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!query.trim().length) {
      setWeather(null);
      return;
    }

    let timeout = setTimeout(async () => {
      try {
        await fetchData();
      } catch (error) {
        console.log(error);
        setWeather('');
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  console.log(weather);

  return (
    <AppContainer>
      {' '}
      <SearchBar
        type='search'
        value={query}
        onChange={(e) => {
          e.stopPropagation();
          setQuery(e.target.value);
        }}
        style={{ width: '200px' }}
      />
      <Forecast weather={weather} />
    </AppContainer>
  );
}

export default App;
