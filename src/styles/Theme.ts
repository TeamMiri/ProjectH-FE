import { DefaultTheme } from 'styled-components';

export const size = {
  mobile: '375px',
  tablet: '767px',
  laptop: '1023px',
  desktop: '1240px',
};
const responsive = {
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.laptop})`,
  laptop: `(max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
const themeLight: DefaultTheme = {
  colors: {
    primary: '#3dd5f3',
    primaryBold: '#0aa2c0',
    primaryLight: '#9eeaf9',
    secondary: '#fd9843',
    secondaryBold: '#fd7e14',
    secondaryLight: '#feb272',
    black: '#101010',
    blackLight: '#3c3c3c',
    white: '#ffffff',
    backgroundColor: '#efefef',
    componentBackgroundColor: '#ffffff',
    fontColor: '#000000',
  },
  responsive: responsive,
};
const themeDark: DefaultTheme = {
  colors: {
    primary: '#0aa2c0',
    primaryBold: '#4ea2c0',
    primaryLight: '#9eeaf9',
    secondary: '#fd9843',
    secondaryBold: '#fd7e14',
    secondaryLight: '#feb272',
    black: '#101010',
    blackLight: '#3c3c3c',
    white: '#ffffff',
    backgroundColor: '#3c3c3c',
    componentBackgroundColor: '#aaaaaa',
    fontColor: '#ffffff',
  },
  responsive: responsive,
};

export { themeDark, themeLight };
