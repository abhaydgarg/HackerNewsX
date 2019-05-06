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
          height={50}
          ariaLabel='Loading story...'
          primaryColor={props.theme.palette.type === 'light' ? '#f3f3f3' : '#2c2c2c'}
          secondaryColor={props.theme.palette.type === 'light' ? '#ecebeb' : '#181818'}
        >
          <rect x='7' y='5' rx='3' ry='3' width='259' height='4' />
          <rect x='7' y='15' rx='3' ry='3' width='237' height='4' />
          <rect x='358' y='5' rx='4' ry='4' width='30' height='30' />
          <rect x='7' y='43' rx='3' ry='3' width='52' height='7' />
          <rect x='70' y='43' rx='3' ry='3' width='52' height='7' />
          <rect x='346' y='43' rx='3' ry='3' width='42' height='7' />
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
