import { render } from "@testing-library/react";
import App from "./App";

describe("render the App", () => {
  it("renders App component", () => {
    expect(<App />).toBeTruthy();
    //expect(<App />).toBeInTheDocument(); -> Es necesario que el valor sea un HTML
    render(<App />);
  });
});
