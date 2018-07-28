import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import store, { history } from './Store/storeCreator';
import App from './Containers/App';
import './reset.css';

const target = document.getElementById('root');

const theme = {
  breakpoints: {
    mobile: 767,
    desktop: 768,
  },
  fonts: {
    baseFont: 'Helvetica',
    sansFont: 'Gotham',
    displayFont: 'Playfair Display',
  },
  baseSizeUnit: 8,
  baseFontUnit: 16,
  colors: {
    yellow: '#f0ff0f',
    red: '#9d0404',
    gray: '#cfcfcf',
    darkGray: '#333',
    green: '#049d63',
    darkGreen: '#024028',
    white: '#eee',
    black: '#111',
    transparentBlack: 'rgba(0, 0, 0, 0.1)',
  },
  fontSizes: {
    xsm: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xlg: '1.5rem',
    xxlg: '2.25rem',
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  target,
);
