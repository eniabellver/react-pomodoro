import { render, screen } from "@testing-library/react";
import App from './App'

test('renders a header with a heading and settings button', () => {
    render(<App />);
    const heading = screen.getByText('React Pomodoro');
    const settingsButton = screen.getByText('Settings');
    expect(heading).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
})
