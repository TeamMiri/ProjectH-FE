import styled from 'styled-components';
import { Card as c } from 'react-bootstrap';
const CardContainer = styled.div`
  padding-left: 5px;
  margin: 0;
  color: ${props => props.theme.colors.fontColor};
`;
const Card = styled(c)`
  background-color: ${props => props.theme.colors.componentBackgroundColor};
`;
export { CardContainer, Card };
