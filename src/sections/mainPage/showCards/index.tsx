import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import styled from 'styled-components';

export default function HomeShowCard() {
  const cardProps: CommonCardProps = {
    cardType: 'user',
    title: 'Doge Kim',
    subtitle: 'subtitle',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#custom-hooks
  return (
    <MainContainer>
      <MultiItemCarousel title="이 달의 사용자">
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
      </MultiItemCarousel>
      <MultiItemCarousel title="이 달의 프로젝트">
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
        <CommonCard {...cardProps} />
      </MultiItemCarousel>
      <MultiItemCarousel title="컨텐츠 없을시 예시" />
    </MainContainer>
  );
}
const MainContainer = styled.main`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
