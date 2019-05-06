import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './Styles/MainStyles';

function Main (props) {
  return (
    <div className={props.classes.root}>
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
