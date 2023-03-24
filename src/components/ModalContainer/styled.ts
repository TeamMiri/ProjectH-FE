import styled from 'styled-components';
import { ModalContainer as M } from './ModalContainer';
const ModalContainer = styled(M)`
  background-color: ${props => props.theme.colors.componentBackgroundColor};
  color: ${props => props.theme.colors.fontColor};
`;
export { ModalContainer };
