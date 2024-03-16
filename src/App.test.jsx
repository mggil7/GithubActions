import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
  
  const linkElement = screen.getByText(/btmx/i);
  expect(linkElement).toBeInTheDocument();
});