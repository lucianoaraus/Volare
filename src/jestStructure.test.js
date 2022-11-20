import { render, beforeEach, afterEach } from "@testing-library/react";

describe("Login", () => {
  let renderInstance;
  const mockedUser = {
    name: "Alan",
    email: "alan@gmail.com",
  };

  beforeEach(() => {
    renderInstance = render(<Login />);
  });

  afterEach(jest.clearAllMocks);

  it("renders Login component", () => {
    expect(renderInstance).toBeTruthy;
    //expect(renderInstance).toBeInTheDocument; -> Otra posibilidad
  });
});
