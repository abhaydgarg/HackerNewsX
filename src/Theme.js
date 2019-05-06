let theme = {
  palette: {
    primary: {
      main: '#ff6701',
      light: 'rgb(255, 133, 51)', // #ff993f
      dark: 'rgb(178, 72, 0)', // #c43500
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#000000',
      light: 'rgb(51, 51, 51)', // #2c2c2c
      dark: 'rgb(0, 0, 0)', // #000000
      contrastText: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
};

function getTheme (type) {
  theme.palette.type = type;
  return theme;
}

export default getTheme;
