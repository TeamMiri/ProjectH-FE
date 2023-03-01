import { useTheme } from '@/hooks/useTheme';
import { Button } from 'react-bootstrap';
import * as style from './Styled';
export default function GNB() {
  const [_, toggle] = useTheme();

  return (
    <style.Nav>
      <style.NavLogo href="/">Project H</style.NavLogo>
      <style.NavMenu>
        <style.NavMenuItem>
          <Button className="h-auto" onClick={toggle}>
            {_}
          </Button>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <style.NavMenuLink href="/home">Home</style.NavMenuLink>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <style.NavMenuLink href="/about">About</style.NavMenuLink>
        </style.NavMenuItem>
        <style.NavMenuItem>
          <style.NavMenuLink href="/contact">Contact</style.NavMenuLink>
        </style.NavMenuItem>
      </style.NavMenu>
    </style.Nav>
  );
}
