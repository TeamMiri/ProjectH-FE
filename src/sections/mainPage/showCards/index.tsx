import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import { AllUserInterface } from '@/pages';
import styled from 'styled-components';

export default function HomeShowCard(props: AllUserInterface) {
  const cardProps = {
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
        {props.userList.map(value => {
          const props: CommonCardProps = {
            ...cardProps,
            cardType: 'user',
            title: value.name,
            subtitle: value.email,
            id: value.userId,
            imageUrl: value.profileImageUrl,
          };
          return <CommonCard {...props} key={value.userId} />;
        })}
      </MultiItemCarousel>
      <MultiItemCarousel title="이 달의 프로젝트">
        {props.projList.map(value => {
          const props: CommonCardProps = {
            ...cardProps,
            cardType: 'project',
            title: value.title,
            id: value.projectId,
            subtitle: value.location,
          };
          return <CommonCard {...props} key={value.ownerId} />;
        })}
      </MultiItemCarousel>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
