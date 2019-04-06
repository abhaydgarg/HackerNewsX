import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  content: {
    textAlign: 'center'
  }
};

function ScreenMessage (props) {
  return (
    <Grid container alignItems='center' justify='center'>
      <Grid item className={`${props.classes.content} animated pulse`}>
        {props.children}
      </Grid>
    </Grid>
  );
}

ScreenMessage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreenMessage);
