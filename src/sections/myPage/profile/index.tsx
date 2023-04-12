import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import styled from 'styled-components';
import { Pill } from '@/components/Pill/Pill';
import { ModalButton } from '@/components/ModalContainer/ModalButton';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/atoms/userAtom';
import { MyInfoForm } from '@/components/MyInfoForm/MyInfoForm';
import { ListGroup } from 'react-bootstrap';
interface MyPageProfileProps {
  name: string;
  email: string;
  profileImgUrl: string;
  techStack: string[];
}

export function MyPageProfile({
  name,
  email,
  profileImgUrl,
  techStack,
}: MyPageProfileProps) {
  const userData = useRecoilValue(userAtom);
  const isMyPage = userData.name === name;
  //const [theme, _] = useTheme();
  return (
    <>
      <ProfileContainer>
        <NextImage
          src={profileImgUrl}
          alt="/testdoge.jpg"
          width={300}
          height={200}
        />
        <Body>
          <div>{name}</div>
          <div>Email: {email}</div>
          <div>나이: 12</div>
          <div>성별: 남</div>
          <div>전화번호: 010-6515-6410</div>
          <div>오프라인 참석 여부: 가능</div>
          <PillContainer>
            {techStack.map(value => {
              return <Pill name={value} key={value} />;
            })}
          </PillContainer>
          {isMyPage ? (
            <ModalButton
              variant="primary"
              size="sm"
              modalTitle="나의 정보 수정"
              buttonTitle="정보 수정하기"
            >
              <MyInfoForm />
            </ModalButton>
          ) : (
            <div>내 페이지가 아닙니다.</div>
          )}
        </Body>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
    color: red;
  }
  justify-content: center;
  align-items: center;
`;
const NextImage = styled(Image)`
  width: 250px;
  height: 250px;
  margin-right: 3rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
  object-fit: cover;
`;
const Body = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
`;
