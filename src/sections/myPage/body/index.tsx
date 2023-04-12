import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import styled from 'styled-components';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
import { PortPolioRenderer } from '@/components/PortPolioRenderer/PortPolioRenderer';

interface MyPageBodyProps {
  Projs: string[];
  introduce: string;
}
export default function MyPageBody({ Projs, introduce }: MyPageBodyProps) {
  const cardProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };
  const userProps: CommonCardProps = {
    cardType: 'user',
    title: '김상훈',
    subtitle: 'ksanghun10@gmail.com',
    desc: '',
    imageUrl: '/testdoge.jpg',
  };
  return (
    <>
      <MainContainer>
        <div>자기 소개: {introduce}</div>
        <MultiItemCarousel title="참여 프로젝트">
          {Projs.map(value => {
            const props: CommonCardProps = { ...cardProps, title: value };
            return <Card {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <MultiItemCarousel title="나와 일한 사람들">
          {Projs.map(value => {
            const props: CommonCardProps = {
              ...userProps,
              cardType: 'user',
              title: value,
            };
            return <Card {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <div>이력서</div>
        <PortPolioRenderer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 100%;
`;
