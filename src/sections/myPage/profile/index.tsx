import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import styled from 'styled-components';
import { TEST_IMAGE_URL_DOGE } from '@/constants';
import { Button } from 'react-bootstrap';
import { Pill } from '@/components/Pill/Pill';
interface MyPageProfileProps {
  name: string;
  profileImgUrl: string;
  techStack: string[];
}

export function MyPageProfile({
  name,
  profileImgUrl,
  techStack,
}: MyPageProfileProps) {
  const [theme, _] = useTheme();
  return (
    <>
      <ProfileContainer>
        <NextImage
          src="/testdoge.jpg"
          alt="/testdoge.jpg"
          width={300}
          height={200}
        />
        <Body>
          <div>User Name: {name}</div>
          <PillContainer>
            {techStack.map(value => {
              return <Pill name={value} key={value} />;
            })}
          </PillContainer>
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
  @media ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
    color: red;
  }
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;
const NextImage = styled(Image)`
  width: 300px;
  height: 300px;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    height: auto;
  }
  object-fit: cover;
`;
const Body = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
`;
