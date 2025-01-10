import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './pages/Styles/theme';
import GlobalStyles from './pages/Styles/global';
import { Home } from './pages/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
