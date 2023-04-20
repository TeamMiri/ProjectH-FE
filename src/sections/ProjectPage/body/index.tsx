import { MultiItemCarousel } from '@/components/Carousel/Carousel';
import styled from 'styled-components';
import { CommonCard as Card, CommonCardProps } from '@/components/Card/Card';
import { User } from '@/models/User';

interface ProjectBodyProps {
  users: User[];
}
export function ProjectBody({ users }: ProjectBodyProps) {
  const userProps: CommonCardProps = {
    cardType: 'user',
    title: '김상훈',
    subtitle: 'ksanghun10@gmail.com',
    desc: '',
    imageUrl: '/testdoge.jpg',
    id: '',
  };

  return (
    <>
      <MainContainer>
        <MultiItemCarousel title="현재 참가 인원들">
          {users.map(value => {
            const props: CommonCardProps = {
              ...userProps,
              cardType: 'user',
              title: value.name,
              subtitle: value.email,
              id: value.userId,
            };
            return <Card {...props} key={value.userId} />;
          })}
        </MultiItemCarousel>
        {/* <div>프로젝트 소개 PDF</div> */}
        {/* <PortPolioRenderer /> */}
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
