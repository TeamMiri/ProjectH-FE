import Image from 'next/image';
import styled from 'styled-components';
import { Pill } from '@/components/Pill/Pill';
import { ModalButton } from '@/components/ModalContainer/ModalButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from '@/atoms/userAtom';
import { ProjectInterface } from '@/models/ProjectModel';
import { ProjectForm } from '@/components/ProjectForm/ProjectForm';
import { projectAtom } from '@/atoms/projectAtom';
import Button from 'react-bootstrap/Button';
import { Table, Card } from 'react-bootstrap';

export function MyPageProfile(props: ProjectInterface) {
  const userData = useRecoilValue(userAtom);
  const [projectAtomValue, setFormValuesAtom] =
    useRecoilState<ProjectInterface>(projectAtom);
  const isMyPage = userData.name === props.ownerName;
  function toRender(toURL: Blob | null) {
    if (toURL === null) {
      return '/testdoge.jpg';
    }
    return window.URL.createObjectURL(toURL);
  }
  return (
    <>
      <ProfileContainer>
        <Subcon>
          <NextImage
            src={
              toRender(projectAtomValue.projectImageUrl) ??
              toRender(props.projectImageUrl)
            }
            alt="/testdoge2.jpg"
            width={300}
            height={200}
          />
          <Body>
            <InfoTable bordered>
              <tbody>
                <tr>
                  <td>프로젝트명</td>
                  <td> {props.projectName}</td>
                </tr>
                <tr>
                  <td>프로젝트 오너</td>
                  <td> {props.ownerName}</td>
                </tr>
                <tr>
                  <td>프로젝트 오너2</td>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <td>위치</td>
                  <td>{props.offlineTask}</td>
                </tr>
              </tbody>
            </InfoTable>
            <PillContainer>
              {props.techSpec.map(value => {
                return <Pill name={value} key={value} />;
              })}
            </PillContainer>
            {isMyPage ? (
              <ModalButton
                variant="primary"
                size="sm"
                className="mt-2"
                modalTitle="프로젝트 정보 수정"
                buttonTitle="프로젝트 정보 수정하기"
              >
                <ProjectForm />
              </ModalButton>
            ) : (
              <Button>이 프로젝트에 참여하기</Button>
            )}
          </Body>
        </Subcon>
        <TextContainer>
          <Card.Header style={{ textAlign: 'center' }}>자기소개</Card.Header>
          <Card.Body> {props.introduce}</Card.Body>
        </TextContainer>
      </ProfileContainer>
    </>
  );
}
const TextContainer = styled(Card)`
  width: 50%;
  min-width: 50%;
  background-color: ${props => props.theme.colors.primaryBold};
  padding: 1rem;
  margin-top: 1rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;

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
const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
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
const InfoTable = styled(Table)`
  color: ${props => props.theme.colors.fontColor};
  text-align: left;
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
