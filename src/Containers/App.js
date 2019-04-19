/**
 * First component loaded after index.js. The purpose of this file
 * is to setup Redux or any other non-visual "global" modules.
 */
import { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getTheme from '../Theme';
import Util from '../Lib/Util';
import RootContainer from './RootContainer';

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

  render () {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <Router>
          <RootContainer />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
