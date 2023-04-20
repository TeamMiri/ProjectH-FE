// import '@/styles/globals.css';

import HomeIntroduce from '@/sections/mainPage/introduce';
import styled from 'styled-components';

export default function Custom404() {
  return (
    <>
      <HomeIntroduce />
      <SectionS>로그인 해주세요</SectionS>
    </>
  );
}

const SectionS = styled.section`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
