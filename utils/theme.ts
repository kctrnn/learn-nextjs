import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },

      styleOverrides: {
        maxWidthSm: {
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },

        maxWidthMd: {
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'none',
      },

      styleOverrides: {
        root: {
          color: '#000',
          transition: 'color 200ms ease-in-out',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
  },
});
