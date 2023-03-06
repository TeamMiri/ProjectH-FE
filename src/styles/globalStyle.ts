import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { size } from './Theme';
export const GlobalStyle = createGlobalStyle`
${reset}
  :root {
  --max-width: 1100px;
  --border-radius: 12px;
  --foreground-rgb: 0,0,0;
  font-family: 'LINESeedKR-Rg';
    * {
      ::-webkit-scrollbar {
        width: 4px;
        position: relative;
      }
      ::-webkit-scrollbar-track {
        display: none;
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgb(199, 199, 199);
      }
    }
}
#wrap {
    min-width : ${size.mobile};
    min-height: calc(100vh - 80px);
    position: relative;
    width: 100%;
}
section {
  max-width : 1920px;
  margin-top : 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw;
  padding-bottom: calc(110px + 1vw);
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: ${props => props.theme.colors.fontColor};
  background:  ${props => props.theme.colors.backgroundColor};
}
`;
