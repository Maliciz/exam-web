import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // Neon Blue
      contrastText: '#0a0d16',
    },
    secondary: {
      main: '#b927fc', // Neon Purple
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0d16',
      paper: '#111625',
    },
    text: {
      primary: '#f3f4f6',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.05em',
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
          },
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '0 0 15px rgba(185, 39, 252, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundImage: 'none',
          backgroundColor: 'rgba(22, 29, 48, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(22, 29, 48, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '8px 0',
          },
        },
      },
    },
  },
});

export default theme;
