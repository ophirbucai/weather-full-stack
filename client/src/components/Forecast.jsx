import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const ForecastContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 300px;
  min-width: 250px;
  padding: 1.5rem;
  margin: 3em auto;
  border-radius: 16px;
  background: skyblue;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.2s;
`;

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const LocalTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
`;
const Temp = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const Description = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const FeelsLikeTemp = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

function Forecast({ weather }) {
  return (
    <ForecastContainer>
      <Header> {weather?.location.name}</Header>
      <LocalTime>
        {/* {format(parseISO(weather?.location.localtime), 'MMMM dd, yyyy')} */}
        <Icon
          src={weather?.current.condition.icon}
          alt={weather?.current.condition.text}
        />
      </LocalTime>

      <Temp>{weather?.current.temp_c}&deg;C</Temp>
      <FeelsLikeTemp>{weather?.current.feelslike_c}</FeelsLikeTemp>
      <Description>{weather?.current.condition.text}</Description>
    </ForecastContainer>
  );
}

export default Forecast;
