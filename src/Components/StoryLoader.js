import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
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
  }
});

function StoryLoader (props) {
  return (
    <Grid container item justify='center'>
      <Paper className={`${props.classes.paper} animated slower fadeIn`}>
        <ContentLoader
          height={90}
          ariaLabel='Loading story...'
          primaryColor={props.theme.palette.type === 'light' ? '#f3f3f3' : '#2c2c2c'}
          secondaryColor={props.theme.palette.type === 'light' ? '#ecebeb' : '#181818'}
        >
          <rect x='7' y='14' rx='3' ry='3' width='259' height='4' />
          <rect x='7' y='25' rx='3' ry='3' width='237' height='4' />
          <rect x='7' y='36' rx='3' ry='3' width='201' height='6' />
          <rect x='350' y='13' rx='4' ry='4' width='40' height='40' />
          <rect x='7' y='70' rx='3' ry='3' width='62' height='11' />
          <rect x='75' y='70' rx='3' ry='3' width='62' height='11' />
          <rect x='328' y='70' rx='3' ry='3' width='62' height='11' />
        </ContentLoader>
      </Paper>
    </Grid>
  );
}

StoryLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(StoryLoader);
