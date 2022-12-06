import React from "react";

import { render, screen, cleanup, getByText, prettyDOM } from "@testing-library/react";

import App from "../../App";

import axios from "axios";
  
// afterEach(cleanup);

// test("good response", () => {
//   axios.get.mockImplementation(() => Promise.resolve({ data: { hi: "hi"} }));
//   // ...
// });

// test("bad response", () => {
//   axios.get.mockImplementation(() => Promise.reject({ hi: "hi" }));
//   // ...
// });
  
xit("defaults to My Workouts and loads workoutList", async () => {
  //jest.mock("axios");
  await render(<App />);
  expect(screen.getByText("About")).toBeInTheDocument()
  console.log(prettyDOM(App));
});

  


