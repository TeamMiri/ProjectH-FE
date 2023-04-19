import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { User } from '@/models/User';
import { getAllUserInfo } from '@/utils/userInfoAPI';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
export default function Mypage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <MainContainer>
      <Title>사용자 목록</Title>
      <Row xs={2} md={5} className="g-4">
        {props.userList.map((val, idx) => {
          const tmp: CommonCardProps = {
            cardType: 'user',
            title: val.name,
            subtitle: val.email,
            desc: val.introduction,
            imageUrl: val.profileImageUrl,
            id: val.userId,
          };
          return (
            <Col key={idx}>
              <CommonCard {...tmp} />
            </Col>
          );
        })}
      </Row>
    </MainContainer>
  );
}

interface AllUserInterface {
  userList: User[];
}

export const getServerSideProps: GetServerSideProps<
  AllUserInterface
> = async context => {
  const token = context.req.headers.cookie?.split('=')[1];
  if (!token) {
    alert('유효하지 않은 로그인 정보입니다.');
    return {
      notFound: true,
    };
  }
  const res = await getAllUserInfo(token);
  if (!res || res.status === 404) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      userList: res.data,
    },
  };
};

const MainContainer = styled.section`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
