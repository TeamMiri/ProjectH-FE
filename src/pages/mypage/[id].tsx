import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { MyPageProfile } from '@/sections/myPage/profile/index';
import MyPageBody from '@/sections/myPage/body';
import { useRecoilState } from 'recoil';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { additionalUserInfoAtom, myPageuserAtom } from '@/atoms/userAtom';
import { FormInterface, User } from '@/models/User';

export interface MyPageData {
  name: string;
  email: string;
  introduce: string;
  profileImgUrl: string;
  techStack: string[];
  Projs: string[];
}

export default function Post(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { isLogined } = useAuth();
  const [userBasicInfo, setUserBasicInfo] =
    useRecoilState<User>(myPageuserAtom);
  const [userFormInfo, setUserFormInfo] = useRecoilState<FormInterface>(
    additionalUserInfoAtom
  );
  useEffect(() => {
    setUserBasicInfo({
      name: props.name,
      email: props.email,
      pictureURL: props.profileImgUrl,
      techSpec: props.techStack,
    } as User);
  }, [props, setUserBasicInfo]);

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
  console.log(context.params.id);
  const res: Response = await fetch(
    `http://localhost:3000/api/mypage?name=${context.params.id}`
  );
  if (res.status === 404) {
    return {
      notFound: true,
    };
  }
  const data: MyPageData = await res.json();
  return {
    props: data,
  };
};
