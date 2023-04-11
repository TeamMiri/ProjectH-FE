import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import jwt_decode from 'jwt-decode';
import { authAtom, isLoginedAtom } from '@/atoms/authAtom';
import { userAtom } from '@/atoms/userAtom';

import { JWTUserInfo, defaultUserInfo } from '@/models/User';
import { useRouter } from 'next/router';
export function useAuth() {
  const setAuthToken = useSetRecoilState(authAtom);
  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);

  // useEffect(() => {
  //   if (!isLogined) {
  //     console.log('로그인되어있지 않네', router);
  //     router.push('/');
  //   }
  // }, [isLogined, router]);

  useEffect(() => {
    // 처음에 확인
    const tokenFromServer: string | null = localStorage.getItem('token');
    console.log('안실행됨?', tokenFromServer);
    if (tokenFromServer) {
      const decodedToken = jwt_decode<JWTUserInfo>(tokenFromServer);
      const { token, ...userinfo } = decodedToken;
      if (userinfo.exp && userinfo.exp * 1000 > Date.now()) {
        setAuthToken(token);
        setUser(userinfo);
        console.log(userinfo);
        console.log('로그인됨');
        setIsLogined(true);
      } else {
        localStorage.removeItem('token');
        console.log('만료되어 로그인 해제');
        setIsLogined(false);
      }
    } else {
      console.log('너 토큰이 없구나, 로그인상태가 아니야.');
      setIsLogined(false);
    }
  }, [setAuthToken, setUser, setIsLogined]);

  const login = (JWTtoken: string) => {
    localStorage.setItem('token', JWTtoken);
    const decodedToken = jwt_decode<JWTUserInfo>(JWTtoken);
    const { token, ...userinfo } = decodedToken;
    if (userinfo.exp && userinfo.exp * 1000 > Date.now()) {
      console.log('로그인함');
      setAuthToken(token);
      setUser(userinfo);

      setIsLogined(true);
    }
  };

  const logout = () => {
    alert('로그아웃 버튼을 클릭함');
    localStorage.removeItem('token');
    setAuthToken('');
    setUser(defaultUserInfo);
    setIsLogined(false);
    router.push('/');
  };

  return { isLogined, login, logout };
}
