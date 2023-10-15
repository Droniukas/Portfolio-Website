import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono', 'Inter'].join(','),
    fontSize: 16,
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#F5EFE7',
    },
  },
  components: {},
});

export default theme;
