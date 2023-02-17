import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const FooterText = styled.p`
  font-size: 16px;
`;

export { FooterContainer, FooterText };
