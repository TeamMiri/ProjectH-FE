import { useTheme } from '@/hooks/useTheme';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export default function HomeIntroduce() {
  const [theme, _] = useTheme();
  return (
    <>
      <MainContainer currentTheme={theme}>
        <Title>Project H를 경험해 보세요!</Title>
        <SubTitle>원하는 프로젝트에 참가하고, 당신을 어필하세요</SubTitle>
        <Button>로그인하기 혹은 마이페이지(로그인 개발하고 변경)</Button>
      </MainContainer>
    </>
  );
}
interface ContainerProps {
  currentTheme: string;
}
const MainContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background: linear-gradient(
    ${props => props.theme.colors.primary},
    60%,
    ${props =>
      props.currentTheme === 'dark'
        ? props.theme.colors.black
        : props.theme.colors.white}
  );
`;
const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
