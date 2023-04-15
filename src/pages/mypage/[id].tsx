import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
import { useRecoilState } from 'recoil';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { additionalUserInfoAtom, myPageuserAtom } from '@/atoms/userAtom';
import { FormInterface, User } from '@/models/User';
import { MyPageData, getUserInfo } from '@/utils/getUserInfo';

export default function Mypage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();

  const [userBasicInfo, setUserBasicInfo] =
    useRecoilState<User>(myPageuserAtom);
  const [userFormInfo, setUserFormInfo] = useRecoilState<FormInterface>(
    additionalUserInfoAtom
  );
  useEffect(() => {
    console.log(props.techStack);
    setUserBasicInfo({
      name: props.name,
      email: props.email,
      pictureURL: props.profileImgUrl,
    } as User);
    setUserFormInfo(prev => ({ ...prev, techSpec: props.techStack }));
  }, [props, setUserBasicInfo, setUserFormInfo]);

  return (
    <>
      {isLogined ? (
        <>
          <MyPageProfile
            name={userBasicInfo.name ?? props.email}
            email={userBasicInfo.email ?? props.email}
            profileImgUrl={userBasicInfo.pictureURL ?? props.profileImgUrl}
            techStack={userBasicInfo.techSpec ?? props.techStack}
            age={userFormInfo.age ?? '1'}
            sex={userFormInfo.sex ?? '0'}
            pn={userFormInfo.phoneNumber ?? '11111111111'}
            offline={userFormInfo.offlineTask ?? ['ㅁㄴㅇㄹ', 'ㅇㄹ']}
          />
          <MyPageBody
            Projs={props.Projs}
            introduce={userFormInfo.introduce ?? props.introduce}
          />
        </>
      ) : (
        <>로그인해주세요</>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  MyPageData
> = async context => {
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
