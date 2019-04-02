import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './Styles/MainStyles';

function Main (props) {
  return (
    <div className={props.classes.root}>
      <Grid container direction='column' wrap='nowrap' spacing={24}>
        {props.children}
      </Grid>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
