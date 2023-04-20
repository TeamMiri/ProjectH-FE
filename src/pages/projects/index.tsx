import { CommonCard, CommonCardProps } from '@/components/Card/Card';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getAllProjectInfo } from '@/utils/projectinfoAPI';
import { ProjectInterface } from '@/models/ProjectModel';

export default function Project(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const userProps: CommonCardProps = {
    cardType: 'project',
    title: 'Doge Kim',
    subtitle: '내가 참여한 프로젝트',
    desc: 'lorem ipsum 나는 로렘입슘 홍길동입니다. 123456',
    imageUrl: '/testdoge.jpg',
    id: 'd',
  };
  function findOwnerName(list: string[], tofindId: string) {
    for (const iter of list) {
      const [name, id] = iter.split(',');
      if (tofindId == id) return name;
    }
    return 'defaultName';
  }
  return (
    <MainContainer>
      <Title>프로젝트 목록</Title>
      <Row xs={2} md={5} className="g-4">
        {props.projList.map((value, idx) => {
          console.log(value);
          const props: CommonCardProps = {
            ...userProps,
            cardType: 'project',
            title: value.title,
            id: value.projectId,
            subtitle: findOwnerName(value.memberIdList, value.ownerId),
          };
          return (
            <Col key={idx}>
              <CommonCard {...props} key={value.projectId} />
            </Col>
          );
        })}
      </Row>
    </MainContainer>
  );
}

interface AllProjectInterface {
  projList: ProjectInterface[];
}

export const getServerSideProps: GetServerSideProps<
  AllProjectInterface
> = async context => {
  const token = context.req.headers.cookie?.split('=')[1];
  const res = await getAllProjectInfo(token ?? 'HelloWOrld');
  if (!res || res.status === 404) {
    return {
      notFound: true,
    };
  }
  console.log(res.data);
  return {
    props: {
      projList: res.data,
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
