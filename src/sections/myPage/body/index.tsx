import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import { useTheme } from '@/hooks/useTheme';
import styled from 'styled-components';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';

interface MyPageBodyProps {
  Projs: string[];
  introduce: string;
  pdfLink: string;
}
export default function MyPageBody({
  Projs,
  pdfLink,
  introduce,
}: MyPageBodyProps) {
  const [theme, _] = useTheme();
  const cardProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };
  return (
    <>
      <MainContainer>
        <div>자기 소개: {introduce}</div>
        <MultiItemCarousel title="참여 프로젝트">
          {Projs.map(value => {
            const props = { ...cardProps, title: value };
            return <Card {...props} key={value} />;
          })}
        </MultiItemCarousel>
        <div>이력서</div>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 100%;
`;
