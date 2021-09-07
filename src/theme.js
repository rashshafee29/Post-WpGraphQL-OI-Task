import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createTheme({
    spacing: 8,
    typography: {
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '5rem',
      },
      h2: {
        fontSize: '3.5rem',
        fontStyle: 'bold',
      },
      h3: {
        fontSize: '2.5rem',
      },
    },
    palette: {
        card: {
            bg: "#ecf0f1",
            padding: '20rem'
        },
      background: {
        default: '#ecf0f1'
      },
      primary: {
        main: '#e74c3c',
        red: '#c0392b'
      },
      date: {
        main: '#c0392b',
      },
      info: {
        main: '#1abc9c',
      },

      category: {
        main: '#2980b9',
      },
      text: {
        primary: '#2c3e50',
        secondary: '#34495e',
        alttext: '#ecf0f1',
        red: '#e74c3c'

      },
    },
  }));

export default theme;