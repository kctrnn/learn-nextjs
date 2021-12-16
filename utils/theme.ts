import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
      light: '#EDF7FA',
    },
    error: {
      main: red.A400,
    },
  },

  typography: {
    fontFamily: 'Heebo, sans-serif',
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

    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: { color: 'white' },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

// theme.typography.h3 = {
// 	fontSize: '2rem',

// 	[theme.breakpoints.up('md')]: {
// 		fontSize: '3rem',
// 	},
// }
