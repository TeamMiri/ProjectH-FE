import { Pill } from '@/components/Pill/pill';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Button } from 'react-bootstrap';
import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
export default function Post(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const cardProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: 'testdoge.jpg',
  };
  return (
    <>
      <Button variant="primary" size="sm">
        정보 수정하기
      </Button>
      <div>User Name: {props.name}</div>
      <div>자기 소개: {props.introduce}</div>
      {props.techStack.map(value => {
        return <Pill name={value} key={value} />;
      })}
      <MultiItemCarousel title="참여 프로젝트">
        {props.Projs.map(value => {
          const props = { ...cardProps, title: value };
          return <Card {...props} key={value} />;
        })}
      </MultiItemCarousel>
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
