import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchWeather from "../../src/components/SearchWeather/SearchWeather";

describe("<SearchWeather />", () => {
  test("Search query should be delivered back", () => {
    const searchQueryToBeSent = "New York";
    const searchQueryHandler = jest.fn((query) => {});
    render(<SearchWeather searchQueryHandler={searchQueryHandler} />);

    const searchInput = screen.getByTestId("searchbarinput");
    fireEvent.change(searchInput, { target: { value: searchQueryToBeSent } });
    expect(searchInput.value).toBe(searchQueryToBeSent);

    const submitButton = screen.getByTestId("searchbarsubmit");
    fireEvent(
      submitButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(searchQueryHandler.mock.calls[0][0]).toBe(searchQueryToBeSent);
  });
});
