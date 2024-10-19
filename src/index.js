import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import theme from './theme'; // Adjust path if needed
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
