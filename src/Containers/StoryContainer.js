import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './Styles/StoriesContainerStyles';
import Util from '../Lib/Util';
import { getStory, getMetadata } from '../Lib/Services';
import StoryLoader from '../Components/StoryLoader';
import Story from '../Components/Story';

class StoryContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      fetched: false,
      error: false,
      story: {}
    };
  }

  async fetchMetadata (id, url) {
    try {
      const metadata = await getMetadata(id, url);
      this.setState((prevState, props) => {
        return {
          story: { ...prevState.story, ...metadata }
        };
      });
    } catch (err) {
      Util.consoleWarn(err);
    }
  }

  async fetchStory () {
    try {
      let story = await getStory(this.props.id);
      this.setState({
        fetched: true,
        error: false,
        story: story
      }, () => {
        if (story.canFetchMetadata === true) {
          this.fetchMetadata(story.id, story.url);
        }
      });
    } catch (err) {
      this.setState({
        fetched: false,
        error: true
      });
      Util.consoleWarn(err);
    }
  }

  componentDidMount () {
    this.fetchStory();
  }

  render () {
    if (this.state.error === true) {
      // Remove the story.
      return null;
    }
    if (this.state.fetched === true) {
      return (
        <Story {...this.state.story} />
      );
    }
    return (
      <StoryLoader />
    );
  }
}

export default withStyles(styles)(StoryContainer);
