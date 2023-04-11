import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
import { useAuth } from '@/hooks/useAuth';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
export default function Post(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();
  const router = useRouter();
  const cardProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };

  return (
    <>
      {isLogined ? (
        <>
          <MyPageProfile
            name={props.name}
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
  const res = await fetch(
    `http://localhost:3000/api/mypage?name=${context.params.id}`
  );
  //console.log(res);
  const data: MyPageData = await res.json();
  return {
    props: data,
  };
};
