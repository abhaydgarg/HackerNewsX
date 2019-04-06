import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '@abhaydgarg/is';
import TimeAgo from 'react-timeago';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import TimerIcon from '@material-ui/icons/Timer';
import CommentIcon from '@material-ui/icons/AddComment';

import styles from './Styles/StoryStyles';

function Story (props) {
  const renderImage = () => {
    if (isEmpty(props.image)) {
      return null;
    }
    return (
      <Grid item className={props.classes.imageContainer} style={{ backgroundImage: `url(${props.image})` }} />
    );
  };

  const renderXsScreenImage = () => {
    if (isEmpty(props.image)) {
      return null;
    }
    return (
      <Grid item className={props.classes.xsScreenImageContainer}>
        <img src={props.image} className={props.classes.xsScreenImage} />
      </Grid>
    );
  };

  const handleComment = () => {
    window.open(props.commentUrl, '__blank');
  };

  return (
    <Grid container item justify='center'>
      <Paper className={`${props.classes.paper} animated slower fadeIn`}>
        <Grid container direction='column' spacing={32} >
          {renderXsScreenImage()}
          <Grid item>
            <Grid container wrap='nowrap'>
              <Grid item xs>
                <Typography variant='h6'>
                  <Link
                    target='__blank'
                    color='inherit'
                    href={props.url}
                  >
                    {props.title}
                  </Link>
                </Typography>
                <Chip
                  label={props.website}
                  className={props.classes.websiteChip}
                  variant='outlined'
                  color='default'
                />
                <Typography variant='body2' color='textSecondary' dangerouslySetInnerHTML={{ __html: props.description }} />
              </Grid>
              {renderImage()}
            </Grid>
          </Grid>
          <Grid container item justify='flex-end'>
            <Grid container alignItems='center' spacing={8}>
              <Grid item>
                <Chip
                  avatar={<Avatar><TimerIcon /></Avatar>}
                  label={<TimeAgo date={props.time} live />}
                  color='default'
                />
              </Grid>
              <Grid item>
                <Chip
                  avatar={<Avatar>PT</Avatar>}
                  label={props.points}
                  color='default'
                />
              </Grid>
              <Grid item className={props.classes.commentButtonContainer}>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  onClick={handleComment}
                >
                  <CommentIcon className={props.classes.buttonCommentIcon} />
                  {`${props.comments} Comments`}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid >
  );
}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  commentUrl: PropTypes.string.isRequired,
  points: PropTypes.number,
  comments: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string
};

Story.defaultProps = {
  image: null,
  description: null,
  comments: 0,
  points: 0
};

export default withStyles(styles)(Story);
