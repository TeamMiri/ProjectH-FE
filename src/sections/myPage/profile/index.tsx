import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import styled from 'styled-components';
import { TEST_IMAGE_URL_DOGE } from '@/constants';
import { Button } from 'react-bootstrap';
import { Pill } from '@/components/Pill/Pill';
interface MyPageProfileProps {
  name: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
}

export function MyPageProfile({
  name,
  introduce,
  profileImgUrl,
  techStack,
}: MyPageProfileProps) {
  const [theme, _] = useTheme();
  return (
    <>
      <ProfileContainer>
        <Image
          src="/testdoge.jpg"
          alt="/testdoge.jpg"
          width={500}
          height={500}
        />
        <Body>
          <div>User Name: {name}</div>
          <div>자기 소개: {introduce}</div>
          {techStack.map(value => {
            return <Pill name={value} key={value} />;
          })}
          <Button variant="primary" size="sm">
            정보 수정하기
          </Button>
        </Body>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;
const ProfileImageContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Body = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
