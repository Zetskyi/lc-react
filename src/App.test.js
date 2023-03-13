import { render, screen } from '@testing-library/react';
import AppOriginal from './components/AppOriginal';

test('renders learn react link', () => {
  render(<AppOriginal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
