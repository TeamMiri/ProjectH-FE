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
import { joinProject } from '@/utils/projectJoinAPI';
import { authAtom } from '@/atoms/authAtom';

export function MyPageProfile(props: ProjectInterface) {
  const userData = useRecoilValue(userAtom);
  const [projectAtomValue, setFormValuesAtom] =
    useRecoilState<ProjectInterface>(projectAtom);
  const isMyPage = userData.userId === props.ownerId;
  const isProjectContainMe = (
    userList: string[],
    targetId: string
  ): boolean => {
    console.log(userList);
    for (const str of userList) {
      const [_, id] = str.split(',');
      console.log(id, targetId);
      if (id === targetId) {
        return true;
      }
    }
    return false;
  };
  const isAlreadyJoined = isProjectContainMe(
    props.memberIdList,
    userData.userId
  );
  console.log(isAlreadyJoined);
  const token = useRecoilValue(authAtom);
  const userinfo = useRecoilValue(userAtom);
  function toRender(toURL: Blob | null) {
    if (toURL === null) {
      return '/testdoge.jpg';
    }
    return window.URL.createObjectURL(toURL);
  }
  function findOwnerName(list: string[], tofindId: string) {
    for (const iter of list) {
      const [name, id] = iter.split(',');
      if (tofindId == id) return name;
    }
    return 'defaultName';
  }
  async function handleJoin() {
    alert('Hello');
    console.log(userinfo.userId, props.projectId, token);
    const res = await joinProject(userinfo.userId, props.projectId, token);
    console.log('조인 결과:', res);
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
                  <td> {props.title}</td>
                </tr>
                <tr>
                  <td>프로젝트 오너</td>
                  <td> {findOwnerName(props.memberIdList, props.ownerId)}</td>
                </tr>
                <tr>
                  <td>프로젝트 오너 ID</td>
                  <td>{props.ownerId}</td>
                </tr>
                <tr>
                  <td>위치</td>
                  <td>{props.location}</td>
                </tr>
              </tbody>
            </InfoTable>
            <PillContainer>
              {props.techSpec.map(value => {
                return <Pill name={value} key={value} />;
              })}
            </PillContainer>
            {isMyPage ? (
              <> {'이 프로젝트는 당신의 프로젝트입니다.'}</>
            ) : // <ModalButton
            //   variant="primary"
            //   size="sm"
            //   className="mt-2"
            //   modalTitle="프로젝트 정보 수정"
            //   buttonTitle="프로젝트 정보 수정하기"
            // >
            //   <ProjectForm />
            // </ModalButton>
            !isAlreadyJoined ? (
              <Button onClick={handleJoin}>이 프로젝트에 참여하기</Button>
            ) : (
              <Button
                onClick={() => {
                  alert('이미 참여한 프로젝트입니다!');
                }}
              >
                이미 참여한 프로젝트입니다.
              </Button>
            )}
          </Body>
        </Subcon>
        <TextContainer>
          <Card.Header style={{ textAlign: 'center' }}>자기소개</Card.Header>
          <Card.Body> {props.introduction}</Card.Body>
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
  margin-top: 1rem;
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
