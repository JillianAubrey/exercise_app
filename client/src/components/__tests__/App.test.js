import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, getByPlaceholderText, prettyDOM, getAllByTestId, getByAltText, queryByAltText, getByTestId, queryByText } from "@testing-library/react";

import App from "../../App";

import axios from "../../__mocks__/axios";
  
afterEach(cleanup);
  
it("defaults to My Workouts and loads workoutList", async () => {
  render(<App />);

  await findByText("Leg Day")
  expect(getByText("Legs")).toBeInTheDocument()
});

  


