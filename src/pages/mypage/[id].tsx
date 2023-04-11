import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
import { useAuth } from '@/hooks/useAuth';
export default function Post(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();

  return (
    <>
      {isLogined ? (
        <>
          <MyPageProfile
            name={props.name}
            email={props.email}
            profileImgUrl={props.profileImgUrl}
            techStack={props.techStack}
          />
          <MyPageBody
            Projs={props.Projs}
            pdfLink={props.pdfLink}
            introduce={props.introduce}
          />
        </>
      ) : (
        <>로그인해주세요</>
      )}
    </>
  );
}

export interface MyPageData {
  name: string;
  email: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
  Projs: string[];
  pdfLink: string;
}

export const getServerSideProps: GetServerSideProps<
  MyPageData
> = async context => {
  //url 쿼리 사용해서..
  if (context.params === undefined) {
    return {
      notFound: true,
    };
  }
  console.log(context.params.id);
  const res: Response = await fetch(
    `http://localhost:3000/api/mypage?name=${context.params.id}`
  );
  if (res.status === 404) {
    return {
      notFound: true,
    };
  }
  //console.log(res);
  const data: MyPageData = await res.json();
  return {
    props: data,
  };
};
