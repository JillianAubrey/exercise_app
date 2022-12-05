import React from "react";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Toggle from '../buttons_toggles/Toggle'

  afterEach(cleanup);
  
  it("renders its label props as text", async () => {
    await render(
      <Toggle
        toggleType="footer"
        leftLabel="My Workouts"
        leftClick={console.log("click")}
        rightLabel="Shared Workouts"
        rightClick={console.log("click")}
      />);
    expect(screen.getByText('My Workouts')).toBeInTheDocument()
  });

  it("renders clickable toggle buttons", async () => {
    const handleClick = jest.fn()
    await render(
      <Toggle
        toggleType="footer"
        leftLabel="My Workouts"
        leftClick={handleClick}
        rightLabel="Shared Workouts"
        rightClick={handleClick}
      />);
    await fireEvent.click(screen.getByText('My Workouts'))
    await fireEvent.click(screen.getByText('Shared Workouts'))
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  

