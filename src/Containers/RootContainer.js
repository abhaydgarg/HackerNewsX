/**
 * First visual component in the app.
 * It is the ancestor of all other screens and components.
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import Util from '../Lib/Util';
import AppRoute from '../Route';
import styles from './Styles/RootContainerStyles';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import NoMatch from '../Components/NoMatch';
import StoriesContainer from './StoriesContainer';

class RootContainer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      newRouteKey: 'newRouteKey',
      topRouteKey: 'topRouteKey',
      bestRouteKey: 'bestRouteKey'
    };
  }

  rootRedirect = () => {
    return (
      <Redirect to='/new' />
    );
  }

  handleRefresh = () => {
    const routes = ['new', 'top', 'best'];
    const pathname = this.props.location.pathname.substring(1);
    if (routes.indexOf(pathname) !== -1) {
      this.setState({
        [`${pathname}RouteKey`]: `${pathname}RouteKey${Util.random1To10()}`
      });
    }
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <Header onRefresh={this.handleRefresh} />
        <Main>
          <Switch>
            <AppRoute exact path='/' render={this.rootRedirect} />
            <AppRoute key={this.state.newRouteKey} title='10 recent new stories' exact path='/new' component={StoriesContainer} />
            <AppRoute key={this.state.bestRouteKey} title='10 recent best stories' exact path='/best' component={StoriesContainer} />
            <AppRoute key={this.state.topRouteKey} title='10 recent top stories' exact path='/top' component={StoriesContainer} />
            <AppRoute title='Page not found' component={NoMatch} />
          </Switch>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(RootContainer));
