export default (theme) => ({
  paper: {
    padding: '16px',
    width: '100%',
    // Above 1280px
    [theme.breakpoints.up('lg')]: {
      width: '960px'
    },
    // Above 1920px
    [theme.breakpoints.up('xl')]: {
      width: '1280px'
    }
  },
  websiteChip: {
    margin: '5px 0 15px 0',
    borderRadius: 0,
    height: '25px'
  },
  description: {
    wordBreak: 'break-word',
    '& a': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'underline'
      }
    }
  },
  imageContainer: {
    width: '150px',
    height: '150px',
    marginLeft: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    borderRadius: 4,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '&:hover': {
      backgroundSize: 'contain',
      borderRadius: 0
    }
  },
  xsScreenImageContainer: {
    display: 'none',
    padding: '0 !important',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 'auto',
      padding: '16px 16px 0px 16px !important'
    }
  },
  xsScreenImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 4
  },
  commentButtonContainer: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  buttonCommentIcon: {
    marginRight: '5px'
  }
});
