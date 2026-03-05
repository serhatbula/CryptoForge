// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoForge/i);
    expect(titleElement).toBeInTheDocument();
});
