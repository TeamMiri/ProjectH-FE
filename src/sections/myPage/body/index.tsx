import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import { useTheme } from '@/hooks/useTheme';
import styled from 'styled-components';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';

interface MyPageBodyProps {
  Projs: string[];
  pdfLink: string;
}
export default function MyPageBody({ Projs, pdfLink }: MyPageBodyProps) {
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
        <MultiItemCarousel title="참여 프로젝트">
          {Projs.map(value => {
            const props = { ...cardProps, title: value };
            return <Card {...props} key={value} />;
          })}
        </MultiItemCarousel>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 100%;
`;
