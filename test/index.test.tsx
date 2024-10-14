import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages';

describe('Home Page', () => {
  it('should render two inputs and allow user input', () => {
    render(<HomePage />);

    const usernameInput: HTMLInputElement = screen.getByTestId('username');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    expect(usernameInput.value).toBe('admin');
    fireEvent.change(passwordInput, { target: { value: 'test' } });
    expect(passwordInput.value).toBe('test');
  });
});
