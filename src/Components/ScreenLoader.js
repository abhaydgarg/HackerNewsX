import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

function ScreenLoader (props) {
  return (
    <Grid container alignItems='center' justify='center'>
      <CircularProgress color='primary' />
    </Grid>
  );
}

export default ScreenLoader;
