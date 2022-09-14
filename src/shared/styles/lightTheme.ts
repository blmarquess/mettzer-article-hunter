import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#00897b',
      light: '#00bcd4',
    },
    secondary: {
      main: '#512da8',
    },
    background: {
      default: 'rgba(255,254,254,0.95)',
    },
    text: {
      primary: 'rgba(0,0,0,0.85)',
      secondary: '#01031a',
    },
    error: {
      main: '#d500f9',
    },
    info: {
      main: '#ffff00',
    },
    success: {
      main: '#00e676',
    },
  },
})
