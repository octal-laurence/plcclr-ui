import React from 'react';
import ReactDOM from 'react-dom';

// SASS
import { ThemeProvider } from 'styled-components';
import theme from '../ui/styles/theme';

export default (App) => (
  <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>
);