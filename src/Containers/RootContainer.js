/**
 * First visual component in the app.
 * It is the ancestor of all other screens and components.
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import AppRoute from '../Route';
import { RefreshProvider } from '../Context/RefreshContext';
import styles from './Styles/RootContainerStyles';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import NoMatch from '../Components/NoMatch';
import StoriesContainer from './StoriesContainer';

class RootContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      refresh: false
    };
  }

  rootRedirect = () => {
    return (
      <Redirect to='/new' />
    );
  }

  handleRefresh = () => {
    this.setState({
      refresh: true
    });
  }

  handleRefreshReset = () => {
    this.setState({
      refresh: false
    });
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <Header onRefresh={this.handleRefresh} />
        <RefreshProvider value={{ refresh: this.state.refresh, onRefreshReset: this.handleRefreshReset }}>
          <Main>
            <Switch>
              <AppRoute exact path='/' render={this.rootRedirect} />
              <AppRoute title='10 recent new stories' exact path='/new' component={StoriesContainer} />
              <AppRoute title='10 recent best stories' exact path='/best' component={StoriesContainer} />
              <AppRoute title='10 recent top stories' exact path='/top' component={StoriesContainer} />
              {/* when none of the above match, <NoMatch> will be rendered */}
              <AppRoute title='Page not found' component={NoMatch} />
            </Switch>
          </Main>
        </RefreshProvider>
        <Footer />
      </div >
    );
  }
}

export default withStyles(styles)(RootContainer);
