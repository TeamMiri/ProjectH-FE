import Button, { ButtonProps } from 'react-bootstrap/Button';
import { useAuth } from '@/hooks/useAuth';

interface LoginButtonProps extends ButtonProps {
  buttonTitle: string;
}
function OauthLoginPrompt() {
  // alert(
  //   process.env.NEXT_PUBLIC_BACKEND_SERVER_IP +
  //     '/oauth2/authorization/google?redirect_uri=' +
  //     process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH
  // );
  window.location.href =
    process.env.NEXT_PUBLIC_BACKEND_SERVER_IP +
    '/oauth2/authorization/google?redirect_uri=' +
    process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH;
  // http://54.180.150.153:8080/oauth2/authorization/google?redirect_uri=http://54.180.150.153:8080/login/oauth2/code/google
  // window.location.href =
  //   process.env.NEXT_PUBLIC_BACKEND_SERVER_IP +
  //   '/oauth2/authorization/google?redirect_uri=' +
  //   'http://54.180.150.153:8080/login/oauth2/code/google';
  // https://salahdin.iptime.org:8081/
  // const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
  // alert(process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH);
  // const queryStr = qs.stringify({
  //   client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  //   redirect_uri:
  //     process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH ??
  //     'http://localhost:3000/auth',
  //   response_type: 'code',
  //   scope:
  //     'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  // });
  // const loginUrl = AUTHORIZE_URI + '?' + queryStr;
  // window.location.href = loginUrl;
  // 내가 직접 구글로 연결할떄..
}

export function LoginButton(props: LoginButtonProps) {
  const { isLogined, logout } = useAuth();
  return (
    <>
      {!isLogined ? (
        <Button
          className="btn"
          variant={props.variant}
          size={props.size}
          onClick={OauthLoginPrompt}
        >
          {props.buttonTitle}
        </Button>
      ) : (
        <Button
          className="btn"
          variant={props.variant}
          size={props.size}
          onClick={logout}
        >
          로그아웃
        </Button>
      )}
    </>
  );
}
