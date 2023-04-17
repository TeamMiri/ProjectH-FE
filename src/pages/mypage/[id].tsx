import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
import { useRecoilState } from 'recoil';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { myPageUserAtom } from '@/atoms/userAtom';
import { User } from '@/models/User';
import { getUserInfo } from '@/utils/userInfoAPI';

export default function Mypage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();

  const [userBasicInfo, setUserBasicInfo] =
    useRecoilState<User>(myPageUserAtom);
  useEffect(() => {
    setUserBasicInfo(props);
  }, [props, setUserBasicInfo]);

  return (
    <>
      {isLogined ? (
        <>
          <MyPageProfile
            name={userBasicInfo.name ?? props.email}
            email={userBasicInfo.email ?? props.email}
            profileImgUrl={
              userBasicInfo.profileImageUrl ?? props.profileImageUrl
            }
            techStack={userBasicInfo.techSpec ?? props.techSpec}
            age={userBasicInfo.age ?? '1'}
            sex={userBasicInfo.gender ?? '0'}
            pn={userBasicInfo.contactNumber ?? '11111111111'}
            offline={userBasicInfo.location ?? ['ㅁㄴㅇㄹ', 'ㅇㄹ']}
          />
          <MyPageBody
            Projs={['tmp', 'tmp']}
            introduce={userBasicInfo.introduction ?? props.introduction}
          />
        </>
      ) : (
        <>로그인해주세요</>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<User> = async context => {
  //url 쿼리 사용해서..
  if (context.params === undefined) {
    return {
      notFound: true,
    };
  }
  const res = await getUserInfo(context.params.id as string);
  if (!res || res.status === 404) {
    return {
      notFound: true,
    };
  }
  return {
    props: res.data,
  };
};
