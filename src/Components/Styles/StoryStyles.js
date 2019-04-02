export default (theme) => ({
  paper: {
    padding: '16px',
    // Above 1280px
    [theme.breakpoints.up('lg')]: {
      maxWidth: '960px'
    },
    // Above 1920px
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1280px'
    }
  },
  topContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  websiteChip: {
    margin: '5px 0 15px 0',
    borderRadius: 0,
    height: '25px'
  },
  imageContainer: {
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center'
    }
  },
  image: {
    marginLeft: '35px',
    borderRadius: '4px',
    maxWidth: '100%',
    width: '250px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: '15px',
      width: 'auto'
    }
  },
  bottomChip: {
    height: '25px'
  },
  commentButtonContainer: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  buttonCommentIcon: {
    marginRight: '5px'
  }
});
