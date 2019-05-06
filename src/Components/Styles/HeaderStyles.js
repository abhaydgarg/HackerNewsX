export default (theme) => {
  return {
    root: {
      display: 'flex'
    },
    logo: {
      width: '50px',
      height: 'auto',
      maxWidth: '100%',
      marginRight: '20px'
    },
    menu: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      }
    },
    button: {
      fontWeight: 'bolder'
    },
    menuActive: {
      color: theme.palette.secondary.light,
      pointerEvents: 'none',
      cursor: 'not-allowed'
    },
    menuMobile: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    menuMobileActive: {
      backgroundColor: theme.type === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.14)',
      pointerEvents: 'none',
      cursor: 'not-allowed'
    },
    drawer: {
      width: '250px'
    }
  };
};
