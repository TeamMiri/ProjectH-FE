import { Form } from 'react-bootstrap';
import styled from 'styled-components';
const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const FormText = styled(Form.Label)`
  color: ${props => props.theme.colors.fontColor};
`;
const FormElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //background-color: ${props => props.theme.colors.componentBackgroundColor};
  color: ${props => props.theme.colors.fontColor};
`;
export { FormContainer, FormElement };
