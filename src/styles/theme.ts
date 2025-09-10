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
});
