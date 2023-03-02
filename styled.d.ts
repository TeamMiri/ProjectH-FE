// import original module declarations
import 'styled-components';
import { StringLiteral } from 'typescript';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryBold: string;
      primaryLight: string;
      secondary: string;
      secondaryBold: string;
      secondaryLight: string;
      black: string;
      white: string;
      blackLight: string;
      backgroundColor: string;
      componentBackgroundColor: string;
      fontColor: string;
    };
    responsive: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
