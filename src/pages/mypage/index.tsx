import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function Mypage() {
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
      <Title>사용자 목록</Title>
      <Row xs={2} md={5} className="g-4">
        {Array.from({ length: 30 }).map((_, idx) => (
          <Col key={idx}>
            <CommonCard {...cardProps} />
          </Col>
        ))}
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
