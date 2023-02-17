import styled from 'styled-components';
import { FooterContainer, FooterText } from './Styled';

interface FooterProps {
  text?: string;
}

export const Footer: React.FC<FooterProps> = ({ text = 'Default' }) => {
  return (
    <FooterContainer>
      <FooterText>{text}</FooterText>
    </FooterContainer>
  );
};
