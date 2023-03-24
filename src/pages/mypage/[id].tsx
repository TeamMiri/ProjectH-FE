import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
export default function Post(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const cardProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };
  return (
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

export const getServerSideProps: GetServerSideProps<MyPageData> = async () => {
  const res = await fetch('http://localhost:3000/api/mypage');
  const data: MyPageData = await res.json();
  return {
    props: data,
  };
};
