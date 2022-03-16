import React, { useState } from "react";
import {
  ForecastContainer,
  Header,
  LocalTime,
  Icon,
  Temp,
  Description,
  FeelsLikeTemp,
} from "./styles";

// import { format, parseISO } from "date-fns";

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
