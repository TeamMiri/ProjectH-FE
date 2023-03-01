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
      fontColor: string;
    };
    responsive: {
      mobile: string;
      tablet: string;
      laptopS: string;
      laptopM: string;
      desktop: string;
    };
  }
}
