import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function Project() {
  const userProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
  };
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#custom-hooks
  return (
    <MainContainer>
      <Title>프로젝트 목록</Title>
      <Row xs={2} md={5} className="g-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, idx) => {
          const props: CommonCardProps = {
            ...userProps,
            cardType: 'project',
            title: value.toString(),
          };
          return (
            <Col key={idx}>
              <CommonCard {...props} key={value} />
            </Col>
          );
        })}
      </Row>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
