import { useRouter } from 'next/router';
import { APIinstance } from '@/utils/axiosInstance';
import React from 'react';

interface AxiosResponse {
  accessToken: string;
}

function Auth() {
  const router = useRouter();
  async function login() {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    try {
      const res = await APIinstance.post<AxiosResponse>('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { code },
      });
      console.log(res.data, '돌려받은 친구');
      localStorage.setItem('accessToken', res.data.accessToken);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    login();
    console.log('Oauth 성공');
  }, []);

  return <></>;
}

export default Auth;
