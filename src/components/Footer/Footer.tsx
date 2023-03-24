import { FooterContainer, FooterText } from './Styled';

interface FooterProps {
  text?: string;
}
//https://cocoder16.tistory.com/39
//Footer 꾸미기
export const Footer: React.FC<FooterProps> = ({
  text = '김상훈, 한영진 | Team Miri',
}) => {
  return (
    <FooterContainer>
      <div style={{ marginTop: '30px' }}>
        <FooterText>{text}</FooterText>
        <address>경기도 수원시 장안구 율전동 | ksanghun10@gmail.com</address>
        <p className="copyright">
          <small>Copyright &copy; Team Miri ALL RIGHTS RESERVED.</small>
        </p>
      </div>
    </FooterContainer>
  );
};
