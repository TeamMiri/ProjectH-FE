import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import styled from 'styled-components';
import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { PortPolioRenderer } from '@/components/PortPolioRenderer/PortPolioRenderer';
import { Card } from 'react-bootstrap';

interface MyPageBodyProps {
  Projs: string[];
}
export default function MyPageBody({ Projs }: MyPageBodyProps) {
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
        <MultiItemCarousel title="나의 프로젝트">
          {Projs.map(value => {
            const props: CommonCardProps = { ...cardProps, title: value };
            return <CommonCard {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <MultiItemCarousel title="참여 프로젝트">
          {Projs.map(value => {
            const props: CommonCardProps = { ...cardProps, title: value };
            return <CommonCard {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <MultiItemCarousel title="나와 일한 사람들">
          {Projs.map(value => {
            const props: CommonCardProps = {
              ...userProps,
              cardType: 'user',
              title: value,
            };
            return <CommonCard {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <div>이력서</div>
        <PortPolioRenderer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 60%;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
    height: auto;
  }
`;
