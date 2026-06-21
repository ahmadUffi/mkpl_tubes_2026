import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

describe('Button Component', () => {
  test('renders button with correct label', () => {
    render(<Button label="Klik Saya" onClick={() => {}} />);
    expect(screen.getByText('Klik Saya')).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = vi.fn();

    render(<Button label="Test" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
