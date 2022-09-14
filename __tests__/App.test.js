import {render, screen} from '@testing-library/react';
import App from '../App';

test('Shows Title', () => {
  render(<App />);
  const linkElement = screen.getByText('CSE183 Assignment 4 - React I');
  expect(linkElement).toBeInTheDocument();
});
