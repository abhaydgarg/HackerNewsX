import Cookies from 'js-cookie';

import Config from '../Config';

export default class {
  static getCurrentTheme () {
    let theme = Cookies.get(Config.themeKey);
    if (theme === undefined) {
      theme = 'dark';
      Cookies.set(Config.themeKey, theme);
    }
    return theme;
  }

  static setTheme () {
    let theme = Cookies.get(Config.themeKey) === 'light' ? 'dark' : 'light';
    Cookies.set(Config.themeKey, theme);
    return theme;
  }

  static random1To10 () {
    return Math.floor((Math.random() * 10) + 1);
  }

  static consoleLog (message) {
    if (Config.dev === true) {
      console.log(message);
    }
  }

  static consoleWarn (message) {
    if (Config.dev === true) {
      console.warn(message);
    }
  }

  static consoleError (message) {
    if (Config.dev === true) {
      console.error(message);
    }
  }
}
