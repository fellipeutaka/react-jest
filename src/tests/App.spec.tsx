import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("should render h1 with text", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello Jest with React")).toBeInTheDocument();
  });

  it("should render h1 with className", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello Jest with React")).toHaveAttribute("class", "test");
  });
});
