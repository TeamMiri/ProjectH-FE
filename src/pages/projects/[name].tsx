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
import { getUserInfo } from '@/utils/userInfoAPI';
import { User } from '@/models/User';

export default function Project(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();
  const [proj, setProj] = useRecoilState<ProjectInterface>(projectAtom);
  useEffect(() => {
    setProj({ ...props.projinfo });
  }, [props, setProj]);

  return (
    <>
      {isLogined ? (
        <MypageContainer>
          <MyPageProfile {...(props.projinfo ?? proj)} />
          <ProjectBody users={props.mans ?? props.mans} />
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

interface ProjectPageInterface {
  projinfo: ProjectInterface;
  mans: User[];
}

export const getServerSideProps: GetServerSideProps<
  ProjectPageInterface
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
  const tofetch: ProjectInterface = res.data;
  const response = await Promise.all(
    tofetch.memberIdList
      .map((v, i, a) => {
        const parsed = v.split(',');
        if (parsed.length == 2) {
          return parsed[1];
        }
        return parsed[0];
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(v => {
        return getUserInfo(v, token);
      })
  );
  const usermap: User[] = response.map(v => v!.data.body.user);
  return {
    props: {
      projinfo: res.data,
      mans: usermap,
    },
  };
};
