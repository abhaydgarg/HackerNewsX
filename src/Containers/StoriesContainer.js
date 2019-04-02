import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import RefreshContext from '../Context/RefreshContext';
import styles from './Styles/StoriesContainerStyles';
import Story from '../Components/Story';

import storiesFixture from '../fixture';

class NewStoriesContainer extends Component {
  // Accessing context using this.context in
  // lifecycle metnods.
  static contextType = RefreshContext;

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  componentDidMount () {
    console.log('NewStoriesContainer[MOUNTED]');
  }

  componentDidUpdate () {
    console.log('NewStoriesContainer[UPDATED]');
    if (this.context.refresh === true) {
      this.context.onRefreshReset();
    }
  }

  render () {
    return (
      <Fragment>
        <Story {...storiesFixture[0]} />
        <Story {...storiesFixture[1]} />
        <Story {...storiesFixture[2]} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(NewStoriesContainer);
