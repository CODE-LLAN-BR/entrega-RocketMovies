import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './pages/Styles/theme';
import GlobalStyles from './pages/Styles/global';
import { New } from './pages/New';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <New />
    </ThemeProvider>
  </React.StrictMode>,
);
