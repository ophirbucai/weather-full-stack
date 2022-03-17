import React, { useState } from "react";
import styled from "styled-components";

const SearchBarInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const SearchWeather = ({ searchQueryHandler }) => {
  const [query, setQuery] = useState("");

  const search = () => {
    searchQueryHandler(query);
  };

  return (
    <div>
      <SearchBarInput
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        style={{ width: "200px" }}
        data-testid="searchbarinput"
      />
      <button data-testid="searchbarsubmit" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchWeather;
