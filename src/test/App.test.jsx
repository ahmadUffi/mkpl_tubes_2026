import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  test('renders app without crashing', () => {
    render(<App />);
  });

  test('renders get started heading', () => {
    render(<App />);
    const heading = screen.getByText(/get started/i);
    expect(heading).toBeInTheDocument();
  });
});
