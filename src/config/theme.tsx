import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 14,
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#D8C4B6',
      light: '#F5EFE7',
    },
    secondary: {
      main: '#213555',
      light: '#4F709C',
    },
    info: {
      main: '#F4F4F4',
      contrastText: '#000048',
    },
  },
  components: {},
});

export default theme;
