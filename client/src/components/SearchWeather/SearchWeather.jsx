import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const SearchWeather = ({ fetchWeather, handleWeather }) => {
  const [query, setQuery] = useState("");

  const search = () => {
    handleWeather(query);
  };

  return (
    <>
      <SearchBar
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        style={{ width: "200px" }}
      />
      <button onClick={search}>Search</button>
    </>
  );
};
