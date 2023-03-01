import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
${reset}
  :root {
  --max-width: 1100px;
  --border-radius: 12px;
  --foreground-rgb: 0,0,0;
  --font-mono: ui-  monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
}
#wrap {
    min-height: calc(100vh - 80px);
    position: relative;
    width: 100%;
}
section {
  margin-top : 80px;
	padding-bottom: 110px; /* footer의 height값과 동일 */
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
