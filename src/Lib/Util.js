import Cookies from 'js-cookie';

const HackerNewsXTheme = 'HackerNewsXTheme';
const __DEV__ = process.env.NODE_ENV === 'development';

export default class {
  static getCurrentTheme () {
    let theme = Cookies.get(HackerNewsXTheme);
    if (theme === undefined) {
      theme = 'dark';
      Cookies.set(HackerNewsXTheme, theme);
    }
    return theme;
  }

  static setTheme () {
    let theme = Cookies.get(HackerNewsXTheme) === 'light' ? 'dark' : 'light';
    Cookies.set(HackerNewsXTheme, theme);
    return theme;
  }

  static random1To10 () {
    return Math.floor((Math.random() * 10) + 1);
  }

  static consoleLog (message) {
    if (__DEV__ === true) {
      console.log(message);
    }
  }

  static consoleWarn (message) {
    if (__DEV__ === true) {
      console.warn(message);
    }
  }

  static consoleError (message) {
    if (__DEV__ === true) {
      console.error(message);
    }
  }
}
