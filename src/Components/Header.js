import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenuIcon from '@material-ui/icons/Menu';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

import styles from './Styles/HeaderStyles';

const GitHubIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
    </SvgIcon>
  );
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onRefresh: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleRefresh = () => {
    this.props.onRefresh();
  }

  toggleTheme = () => {
    this.props.theme.toggleTheme();
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  renderMenuMobileLink = itemProps => <NavLink {...itemProps} activeClassName={this.props.classes.menuMobileActive} />;

  renderDrawerMenu = () => {
    return (
      <div className={this.props.classes.drawer}>
        <List component='nav'>
          <ListItem button component={this.renderMenuMobileLink} to='/new'>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary='New stories' />
          </ListItem>
          <ListItem button component={this.renderMenuMobileLink} to='/top'>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary='Top stories' />
          </ListItem>
          <ListItem button component={this.renderMenuMobileLink} to='/best'>
            <ListItemIcon>
              <ArtTrackIcon />
            </ListItemIcon>
            <ListItemText primary='Best stories' />
          </ListItem>
          <Divider />
          <ListItem button onClick={this.toggleTheme}>
            <ListItemIcon>
              <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText primary='Toggle theme' />
          </ListItem>
          <Divider />
          <ListItem button component='a' href='https://github.com/abhaydgarg/HackerNewsX' target='__blank'>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary='GitHub repo' />
          </ListItem>
        </List>
      </div>
    );
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <img alt='HackerNewsX' src='./static/logo.png' className={this.props.classes.logo} />
            <Grid container spacing={8} wrap='nowrap' className={this.props.classes.menu}>
              <Grid container item xs alignItems='center' wrap='nowrap'>
                <Tooltip title='10 recent new stories'>
                  <Button
                    className={this.props.classes.button}
                    component={NavLink}
                    activeClassName={this.props.classes.menuActive}
                    to='/new'
                    size='medium'
                    color='inherit'
                  >
                    New
                  </Button>
                </Tooltip>
                <Tooltip title='10 recent top stories'>
                  <Button
                    className={this.props.classes.button}
                    component={NavLink}
                    activeClassName={this.props.classes.menuActive}
                    to='/top'
                    size='medium'
                    color='inherit'
                  >
                    Top
                  </Button>
                </Tooltip>
                <Tooltip title='10 recent best stories'>
                  <Button
                    className={this.props.classes.button}
                    component={NavLink}
                    activeClassName={this.props.classes.menuActive}
                    to='/best'
                    size='medium'
                    color='inherit'
                  >
                    Best
                  </Button>
                </Tooltip>
              </Grid>
              <Grid container item xs justify='flex-end' wrap='nowrap'>
                <IconButton
                  color='inherit'
                  onClick={this.handleRefresh}
                >
                  <Tooltip title='Refresh'>
                    <RefreshIcon />
                  </Tooltip>
                </IconButton>
                <IconButton
                  color='inherit'
                  onClick={this.toggleTheme}
                >
                  <Tooltip title='Toggle light/dark theme'>
                    <InvertColorsIcon />
                  </Tooltip>
                </IconButton>
                <IconButton color='inherit'>
                  <Tooltip title='GitHub repo'>
                    <Link
                      target='__blank'
                      href='https://github.com/abhaydgarg/HackerNewsX'
                      color='inherit'
                    >
                      <GitHubIcon />
                    </Link>
                  </Tooltip>
                </IconButton>
              </Grid>
            </Grid>
            <div className={this.props.classes.menuMobile}>
              <IconButton
                color='inherit'
                onClick={this.handleRefresh}
              >
                <RefreshIcon />
              </IconButton>
              <IconButton
                color='inherit'
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='right'
          open={this.state.open}
          onClose={this.handleDrawerClose}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.handleDrawerClose}
            onKeyDown={this.handleDrawerClose}
          >
            {this.renderDrawerMenu()}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
