import Image from 'next/image';
import styled from 'styled-components';
import { Pill } from '@/components/Pill/Pill';
import { ModalButton } from '@/components/ModalContainer/ModalButton';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/atoms/userAtom';
import { MyInfoForm } from '@/components/MyInfoForm/MyInfoForm';
interface MyPageProfileProps {
  name: string;
  email: string;
  profileImgUrl: string;
  techStack: string[];
  age: number;
  sex: number;
  pn: string;
  offline: string;
}

export function MyPageProfile({
  name,
  email,
  profileImgUrl,
  techStack,
  age,
  sex,
  pn,
  offline,
}: MyPageProfileProps) {
  const userData = useRecoilValue(userAtom);
  const isMyPage = userData.name === name;
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
          <div>나이: {age}</div>
          <div>성별: {sex === 0 ? '남' : '여'}</div>
          <div>전화번호: {pn}</div>
          <div>오프라인 참석 여부: {offline}</div>
          <PillContainer>
            {techStack.map(value => {
              return <Pill name={value} key={value} />;
            })}
          </PillContainer>
          {isMyPage ? (
            <div>
              <ModalButton
                variant="primary"
                size="sm"
                className="m-2"
                modalTitle="나의 정보 수정"
                buttonTitle="정보 수정하기"
              >
                <MyInfoForm />
              </ModalButton>
              <ModalButton
                variant="primary"
                size="sm"
                modalTitle="프로젝트 추가"
                buttonTitle="프로젝트 추가하기"
              >
                <MyInfoForm />
              </ModalButton>
            </div>
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
