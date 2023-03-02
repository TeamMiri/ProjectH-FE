import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fontColor};
  width: 100%;
  height: 110px;
  position: absolute;
  bottom: 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 16px;
`;

export { FooterContainer, FooterText };
