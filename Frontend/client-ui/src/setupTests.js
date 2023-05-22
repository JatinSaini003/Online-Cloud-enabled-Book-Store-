// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { screen } from '@testing-library/dom';

it('should render all the components', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(screen.getByText('BOOKS')).toBeInTheDocument();
});
