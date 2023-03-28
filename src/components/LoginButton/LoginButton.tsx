import Button, { ButtonProps } from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import qs from 'qs';

interface LoginButtonProps extends ButtonProps {
  buttonTitle: string;
}

export function LoginButton(props: LoginButtonProps) {
  const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';

  const queryStr = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/auth',
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/contacts.readonly',
  });
  const loginUrl = AUTHORIZE_URI + '?' + queryStr;
  return (
    <>
      <Button
        className="btn"
        variant={props.variant}
        size={props.size}
        onClick={() => {
          window.location.href = loginUrl;
        }}
      >
        <FontAwesomeIcon icon={faGooglePlus} className="fa-lg" color="black" />
        {props.buttonTitle}
      </Button>
    </>
  );
}

// const LoginButton = ({ className }: { className?: string }) => {
//   const { isLoading, error, data } = useAuth();

//   return isLoading || !data ? (
//     <Button color="red" className={'' + className}>
//       <a href="/api/auth">
//         <FontAwesomeIcon icon={faGithub} className="fa-lg" />
//         &nbsp;Continue with Github
//       </a>
//     </Button>
//   ) : null;
// };

// export { Button, LoginButton };
