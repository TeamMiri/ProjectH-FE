import Button, { ButtonProps } from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '@/hooks/useAuth';
import qs from 'qs';

interface LoginButtonProps extends ButtonProps {
  buttonTitle: string;
}

function OauthLoginPrompt() {
  const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
  const queryStr = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri:
      process.env.NEXT_PUBLIC_REDIRECT_URI_OAUTH ??
      'http://localhost:3000/auth',
    response_type: 'code',
    scope:
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  });
  const loginUrl = AUTHORIZE_URI + '?' + queryStr;
  window.location.href = loginUrl;
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
          {/* <FontAwesomeIcon
            icon={faGooglePlus}
            className="fa-lg"
            color="black"
          /> */}
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
