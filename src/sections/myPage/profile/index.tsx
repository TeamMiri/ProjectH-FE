import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import styled from 'styled-components';
import { TEST_IMAGE_URL_DOGE } from '@/constants';
import { Button } from 'react-bootstrap';
import { Pill } from '@/components/Pill/Pill';
import { ModalButton } from '@/components/ModalContainer/ModalButton';
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
          <ModalButton
            variant="primary"
            size="sm"
            modalTitle="나의 정보 수정"
            buttonTitle="정보 수정하기"
          >
            <div>모달의 내용은 바로 이것</div>
          </ModalButton>
        </Body>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.responsive.mobile} {
    flex-direction: column;
    color: red;
  }
  justify-content: center;
  align-items: center;
`;
const NextImage = styled(Image)`
  width: 250px;
  height: 250px;
  margin-right: 3rem;
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 95vw;
    height: auto;
    margin-top: 1rem;
    margin-right: 0;
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
