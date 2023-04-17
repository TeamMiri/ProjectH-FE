import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import jwt_decode from 'jwt-decode';
import { authAtom, isLoginedAtom } from '@/atoms/authAtom';
import { userAtom } from '@/atoms/userAtom';
import { APIinstance } from '@/utils/axiosInstance';
import { JWTUserInfo, defaultUserInfo } from '@/models/User';
import { useRouter } from 'next/router';
export function useAuth() {
  const setAuthToken = useSetRecoilState(authAtom);
  const router = useRouter();
  const [userinfo, setUserinfo] = useRecoilState(userAtom);
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);

  useEffect(() => {
    async function loginVerify() {
      const tokenFromServer: string | null = localStorage.getItem('token');
      console.log('로그인 확인 / 토큰 :', tokenFromServer);
      if (tokenFromServer) {
        const decodedToken = jwt_decode<JWTUserInfo>(tokenFromServer);
        const { token, ...userinfo } = decodedToken;
        if (userinfo.exp && userinfo.exp * 1000 > Date.now()) {
          console.log('로그인 성공');
          APIinstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${tokenFromServer}`;
          try {
            const response = await APIinstance.get('/api/v1/users');
            setUserinfo({
              ...userinfo,
              ...response.data.body.user,
            });
          } catch (error) {
            console.error(error);
          }
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
      loginVerify();
    }
  }, [setAuthToken, setUserinfo, setIsLogined]);

  const login = async (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    const decodedToken = jwt_decode<JWTUserInfo>(accessToken);
    if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
      APIinstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;
      setAuthToken(accessToken);
      try {
        const response = await APIinstance.get('/api/v1/users');
        setUserinfo({
          ...userinfo,
          ...response.data.body.user,
        });
      } catch (error) {
        console.error(error);
      }
      setAuthToken('');
      setIsLogined(true);
    } else {
      alert('토큰 유효기간 만료됨');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken('');
    setUserinfo(defaultUserInfo);
    setIsLogined(false);
    router.push('/');
  };

  return { isLogined, login, logout };
}
