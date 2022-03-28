import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  test("renders a header", () => {
    render(<App />);
    const heading = screen.getByText("React Pomodoro");
    expect(heading).toBeInTheDocument();
  });
  test("renders buttons", () => {
    render(<App />);
    const settings = screen.getByText("Settings");
    const addTask = screen.getByText("Add task");
    expect(settings).toBeInTheDocument()
    expect(addTask).toBeInTheDocument()
  });
});
