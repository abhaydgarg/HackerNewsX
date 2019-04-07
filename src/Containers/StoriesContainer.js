import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import Util from '../Lib/Util';
import styles from './Styles/StoriesContainerStyles';
import { getStories } from '../Lib/Services';
import ScreenLoader from '../Components/ScreenLoader';
import ScreenMessage from '../Components/ScreenMessage';
import StoryContainer from './StoryContainer';

class StoriesContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      fetched: false,
      error: false,
      stories: []
    };
  }

  getType () {
    return this.props.location.pathname.substring(1);
  }

  async fetchSrories () {
    try {
      const stories = await getStories(this.getType());
      this.setState({
        fetched: true,
        error: false,
        stories: stories
      });
    } catch (err) {
      Util.consoleError(err);
      this.setState({
        fetched: false,
        error: true
      });
    }
  }

  componentDidMount () {
    this.fetchSrories();
  }

  renderStories = () => {
    return this.state.stories.map((story) => {
      return (
        <StoryContainer
          key={story}
          id={story}
        />
      );
    });
  }

  render () {
    if (this.state.error === true) {
      return (
        <ScreenMessage>
          <ErrorIcon color='error' fontSize='large' />
          <Typography variant='subtitle2' className={this.props.classes.screenMessageText}>
            {`Cannot fetch ${this.getType()} stories`}
          </Typography>
        </ScreenMessage>
      );
    }
    if (this.state.fetched === true) {
      if (this.state.stories.length === 0) {
        return (
          <ScreenMessage>
            <InfoIcon color='primary' fontSize='large' />
            <Typography variant='subtitle2' className={this.props.classes.screenMessageText}>
              {`Empty ${this.getType()} stories`}
            </Typography>
          </ScreenMessage>
        );
      }
      return (
        <Grid container direction='column' wrap='nowrap' spacing={24}>
          {this.renderStories()}
        </Grid>
      );
    }
    return (
      <ScreenLoader />
    );
  }
}

export default withStyles(styles)(StoriesContainer);
