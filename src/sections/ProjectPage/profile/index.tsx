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
        <NextImage
          src={
            toRender(projectAtomValue.pictureURL) ?? toRender(props.pictureURL)
          }
          alt="/testdoge2.jpg"
          width={300}
          height={200}
        />
        <Body>
          <div>프로젝트명 : {props.projectName}</div>
          <div>프로젝트 오너 : {props.ownerName}</div>
          <div>프로젝트 오너2 : {userData.name}</div>
          <div>오프라인 참석 여부: {props.offlineTask}</div>
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
