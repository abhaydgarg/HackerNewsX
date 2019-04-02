import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import styles from './Styles/FooterStyles';

function Footer (props) {
  return (
    <div className={props.classes.root}>
      <Typography
        variant='body2'
        className={props.classes.description}
      >
        10 recent new, top and best <Link target='__blank' href='https://news.ycombinator.com/' color='inherit' underline='always'>Hacker News</Link> stories.
      </Typography>
      <Typography
        variant='body1'
        color='primary'
      >
        HackerNewsX
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
