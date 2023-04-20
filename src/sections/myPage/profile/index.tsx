import Image from 'next/image';
import styled from 'styled-components';
import { Pill } from '@/components/Pill/Pill';
import { ModalButton } from '@/components/ModalContainer/ModalButton';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/atoms/userAtom';
import { MyInfoForm } from '@/components/MyInfoForm/MyInfoForm';
import { Card, Table } from 'react-bootstrap';
import { ProjectForm } from '@/components/ProjectForm/ProjectForm';
interface MyPageProfileProps {
  name: string;
  email: string;
  profileImgUrl: string;
  techStack: string[];
  age: number;
  sex: string;
  pn: string;
  offline: string;
  introduce: string;
  id: string;
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
  introduce,
  id,
}: MyPageProfileProps) {
  const userData = useRecoilValue(userAtom);
  const isMyPage = userData.userId === id;
  return (
    <>
      <ProfileContainer>
        <Subcon>
          <NextImage
            src={profileImgUrl}
            alt="/testdoge.jpg"
            width={300}
            height={200}
          />
          <Body>
            <InfoTable bordered>
              <tbody>
                <tr>
                  <td colSpan={2}>{name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td> {email}</td>
                </tr>
                <tr>
                  <td>나이</td>
                  <td> {age}</td>
                </tr>
                <tr>
                  <td>성별</td>
                  <td>{sex === 'M' ? '남' : '여'}</td>
                </tr>
                <tr>
                  <td>전화번호</td>
                  <td>{pn}</td>
                </tr>
                <tr>
                  <td>위치</td>
                  <td>{offline}</td>
                </tr>
              </tbody>
            </InfoTable>
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
                  <ProjectForm />
                </ModalButton>
              </div>
            ) : (
              <div>내 페이지가 아닙니다.</div>
            )}
          </Body>
        </Subcon>
        <TextContainer>
          <Card.Header style={{ textAlign: 'center' }}>자기소개</Card.Header>
          <Card.Body> {introduce}</Card.Body>
        </TextContainer>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Subcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
`;
const NextImage = styled(Image)`
  width: 350px;
  height: 350px;
  border-radius: 2rem;
  margin-right: 3rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 60vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
  object-fit: cover;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1.5rem;
  font-weight: bold;
`;
const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  flex-direction: row;
  margin-left: 3rem;
`;
const TextContainer = styled(Card)`
  width: 50%;
  min-width: 50%;
  background-color: ${props => props.theme.colors.primaryBold};
  padding: 1rem;
  margin-top: 1rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    width: 90vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
`;
const InfoTable = styled(Table)`
  color: ${props => props.theme.colors.fontColor};
  /* width: 50%;
  min-width: 50%;
  background-color: ${props => props.theme.colors.primaryBold};
  padding: 1rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    width: 90vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  } */
`;
