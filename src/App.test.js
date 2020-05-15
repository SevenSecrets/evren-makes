import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title "Evren Makes"', () => {
  const { getByText } = render(<App />);
  expect(getByText('Evren Makes')).toBeInTheDocument();
});
