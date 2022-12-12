import { colors } from '@mui/material';
import {createTheme,} from '@mui/material/styles';


const theme = createTheme({
   background: {
      default: '#e53e3e',
      dark: 'fff',
      paper: colors.common.white,
    },
    primary: {
      default: '#ffffff',
    },
    secondary: {
        main: '1aff00'
    },
    text: {
        primary: colors.blueGrey
    },
    neutral: {
        main: '#10df28',
        contrastText: '#fff',
      },
  });

export default theme;