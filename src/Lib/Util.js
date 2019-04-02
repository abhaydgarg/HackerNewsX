import Cookies from 'js-cookie';

const HackerNewsXTheme = 'HackerNewsXTheme';

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
}
