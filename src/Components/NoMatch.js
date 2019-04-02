import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    height: '100%'
  },
  content: {
    textAlign: 'center'
  }
};

function NoMatch (props) {
  return (
    <Grid container alignItems='center' justify='center' className={props.classes.root}>
      <Grid item className={props.classes.content}>
        <Typography color='error' variant='h1' className='animated slow bounce'>404</Typography>
        <Typography color='textSecondary' variant='subtitle2'>PAGE NOT FOUND</Typography>
      </Grid>
    </Grid>
  );
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoMatch);
