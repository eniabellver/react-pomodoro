import { render, screen, fireEvent } from "@testing-library/react";

import SettingsBtn from "./SettingsBtn";

test("button is rendered", () => {
  const handleClick = jest.fn();
  render(<SettingsBtn onClick={handleClick}></SettingsBtn>);
  const button = screen.getByText("Settings");
  expect(button).toBeInTheDocument();
});

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<SettingsBtn onClick={handleClick} />);
  const button = screen.getByText("Settings");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
