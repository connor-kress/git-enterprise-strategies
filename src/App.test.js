import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the team greeting and gator logo', () => {
  render(<App />);
  expect(screen.getByText('Hello World! This is our team project.')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'logo' })).toHaveAttribute('src', 'gator.gif');
});
