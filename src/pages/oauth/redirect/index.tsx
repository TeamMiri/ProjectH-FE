import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useCallback } from 'react';

function Auth() {
  const router = useRouter();
  const { isLogined, login } = useAuth();
  const loginProcess = useCallback(async () => {
    if (isLogined) {
      router.push('/');
    }
    try {
      const access_token: string | null = new URL(
        window.location.href
      ).searchParams.get('token');
      console.log(access_token);
      if (!access_token) {
        console.log(
          '에러',
          new URL(window.location.href).searchParams.get('error')
        );
        return;
      }
      console.log('로그인 호출');
      login(access_token);
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
