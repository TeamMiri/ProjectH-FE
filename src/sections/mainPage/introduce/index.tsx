import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useAuth } from '@/hooks/useAuth';
import { userAtom } from '@/atoms/userAtom';
import { useRecoilValue } from 'recoil';

export default function HomeIntroduce() {
  const [theme, _] = useTheme();
  const { isLogined } = useAuth();
  const userData = useRecoilValue(userAtom);
  function moveToMyPage(): string {
    return '/mypage/' + userData.userId;
  }
  return (
    <>
      <MainContainer currentTheme={theme}>
        <Title>Project H를 경험해 보세요!</Title>
        <SubTitle>원하는 프로젝트에 참가하고, 당신을 어필하세요</SubTitle>
        <Link href={moveToMyPage()}>
          {isLogined ? <Button>마이 페이지로 이동하기</Button> : <></>}
        </Link>
      </MainContainer>
    </>
  );
}
interface ContainerProps {
  currentTheme: string;
}
const MainContainer = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 1rem;
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
