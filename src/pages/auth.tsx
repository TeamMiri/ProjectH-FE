import { useRouter } from 'next/router';
import { APIinstance } from '@/utils/axiosInstance';
import React from 'react';
import { ToFrontEndData } from './api/auth';
import { useAuth } from '../hooks/useAuth';
import { useCallback } from 'react';

function Auth() {
  const router = useRouter();
  const { isLogined, login } = useAuth();
  const loginProcess = useCallback(async () => {
    //이미 로그인 된 상태면 다시 부르지 않도록 처리해야함
    if (isLogined) router.push('/');
    try {
      const code = new URL(window.location.href).searchParams.get('code');
      const res = await APIinstance.post<ToFrontEndData>('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { code },
      });
      //res.data에는 no
      //리프레시 토큰 쿠키 설정
      //액세스 토큰 atom 설정
      // localStorage.setItem('accessToken', res.data.access_token);
      login(res.data.access_token);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [login, router, isLogined]);

  React.useEffect(() => {
    loginProcess();
  }, [loginProcess]);

  return <></>;
}

export default Auth;
