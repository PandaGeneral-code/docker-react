import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return { addListener: () => {}, matches: false, removeListener: () => {} };
  };

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/table/i);
  expect(headingElement).toBeInTheDocument();
});
