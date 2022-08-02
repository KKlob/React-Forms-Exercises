import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test("it renders without crashing", function () {
  render(<App />);
});

test("it matches the snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});