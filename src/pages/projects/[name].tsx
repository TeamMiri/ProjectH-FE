import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { MyPageProfile } from '@/sections/ProjectPage/profile/index';
import { ProjectBody } from '@/sections/ProjectPage/body';
import { useRecoilState } from 'recoil';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { ProjectInterface } from '@/models/ProjectModel';
import { projectAtom } from '@/atoms/projectAtom';
import { getProjectInfo } from '@/utils/projectinfoAPI';
import styled from 'styled-components';

export default function Project(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();
  const [proj, setProj] = useRecoilState<ProjectInterface>(projectAtom);
  useEffect(() => {
    console.log(props);
    setProj({ ...props });
  }, [props, setProj]);
  return (
    <>
      {isLogined ? (
        <MypageContainer>
          <MyPageProfile {...(props ?? proj)} />
          <ProjectBody users={proj.memberIdList ?? props.memberIdList} />
        </MypageContainer>
      ) : (
        <>로그인해주세요</>
      )}
    </>
  );
}
const MypageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const getServerSideProps: GetServerSideProps<
  ProjectInterface
> = async context => {
  if (context.params === undefined) {
    return {
      notFound: true,
    };
  }
  const token = context.req.headers.cookie?.split('=')[1];
  if (!token) {
    return {
      notFound: true,
    };
  }
  const res = await getProjectInfo(context.params.name as string, token);
  if (!res || res.status === 404) {
    return {
      notFound: true,
    };
  }
  console.log(res.data);
  return {
    props: res.data,
  };
};
