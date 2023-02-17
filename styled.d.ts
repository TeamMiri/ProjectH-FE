// import original module declarations
import 'styled-components';

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
      blackLight: string;
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
