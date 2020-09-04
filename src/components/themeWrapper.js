import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#B5A897',
      paper: '#EBDBC5',
    },
  },
});

const Themewrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themewrapper;
