import { createTheme } from '@mui/material/styles';
import { blueGrey, indigo } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[400],
    },
    secondary: {
      main: indigo[500],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: sans-serif;
        }
      `,
    },
  },
});
