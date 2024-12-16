import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("contact componet should contain  button", () => {
  render(<Contact />);

  //querying
  const button = screen.getAllByRole("textbox");

  //assertion
  expect(button.length).toBe(2);
});
