import { useTheme } from '@/hooks/useTheme';
import { Button } from 'react-bootstrap';
import { LoginButton } from '../LoginButton/LoginButton';
import * as style from './Styled';
export default function GNB() {
  const [themeMode, toggle] = useTheme();

  return (
    <style.Nav>
      <style.NavLogo href="/">Project H</style.NavLogo>
      <style.NavMenu>
        <style.NavMenuItem>
          <Button className="h-auto" onClick={toggle}>
            {themeMode}
          </Button>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <style.NavMenuLink href="/mypage">Users</style.NavMenuLink>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <style.NavMenuLink href="/projects">projects</style.NavMenuLink>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <LoginButton buttonTitle="로그인" />
        </style.NavMenuItem>
      </style.NavMenu>
    </style.Nav>
  );
}
