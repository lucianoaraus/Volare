import { render, screen } from "@testing-library/react";
import Error from "./index";
import { ERROR_TYPES } from "../error/constants";

it("should render an error", () => {
  const error = { type: ERROR_TYPES.Quantity, data: "jose" };
  render(<Error />);
  const errorElement = screen.getByTestId("current-error");
  expect(error).toBeInTheDocument();
  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveTextContent(error.data);
});
