import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import RefreshContext from '../Context/RefreshContext';
import styles from './Styles/RootContainerStyles';
import Story from '../Components/Story';

const data = {
  image: './static/003.png',
  url: '#',
  website: 'new.com',
  time: '1 hour ago',
  points: 100000,
  comments: 123456789,
  commentUrl: 'https://news.ycombinator.com/item?id=19536005',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum sollicitudin tellus. Sed volutpat magna ligula, sit amet rutrum risus facilisis maximus. Aenean pretium neque vitae dictum aliquam.',
  description: 'Vestibulum maximus aliquet felis, et congue quam sagittis sit amet. Nullam tristique eget metus at vestibulum. Fusce aliquam, diam eu condimentum interdum, ipsum odio congue tellus, quis eleifend lorem nulla eu metus. In nisl ante, facilisis nec urna et, ultricies scelerisque leo. Donec mauris dolor, sagittis a nisl et, feugiat sagittis ligula. Pellentesque non sollicitudin lorem. Quisque finibus, nulla nec pellentesque sollicitudin, ex diam molestie diam, a porta nunc nibh sed nulla. Donec ut sollicitudin nunc. Vivamus luctus malesuada nulla sit amet accumsan. Proin commodo dui libero, in mollis augue condimentum a. Nam dictum purus sit amet accumsan commodo. In at molestie augue. Sed vestibulum, nisi et sollicitudin accumsan, leo diam blandit velit, a luctus lacus ante in lacus. Vestibulum vitae ullamcorper nunc, at posuere turpis.'
};

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
        <Story {...data} />
        <Story {...data} />
        <Story {...data} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(NewStoriesContainer);
