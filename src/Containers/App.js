/**
 * First component loaded after index.js. The purpose of this file
 * is to setup Redux or any other non-visual "global" modules.
 */
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getTheme from '../Theme';
import Util from '../Lib/Util';
import RootContainer from './RootContainer';

const __DEV__ = process.env.NODE_ENV === 'development';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      theme: this.createTheme(Util.getCurrentTheme())
    };
  }

  createTheme = (type) => {
    let theme = getTheme(type);
    theme.toggleTheme = this.toggleTheme;
    return createMuiTheme(theme);
  }

  toggleTheme = () => {
    const theme = Util.setTheme();
    this.setState({
      theme: this.createTheme(theme)
    });
  }

  basename = () => {
    if (__DEV__ === true) {
      return;
    }
    return '/HackerNewsX';
  }

  render () {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <Router basename={this.basename()}>
          <RootContainer />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
