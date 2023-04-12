import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import styled from 'styled-components';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
import { PortPolioRenderer } from '@/components/PortPolioRenderer/PortPolioRenderer';

interface ProjectBodyProps {
  users: string[];
  introduce: string;
}
export function ProjectBody({ users, introduce }: ProjectBodyProps) {
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
        <div>프로젝트 소개: {introduce}</div>
        <MultiItemCarousel title="현재 참가 인원들">
          {users.map(value => {
            const props: CommonCardProps = {
              ...userProps,
              cardType: 'user',
              title: value,
            };
            return <Card {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <div>프로젝트 소개 PDF</div>
        <PortPolioRenderer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 100%;
`;
