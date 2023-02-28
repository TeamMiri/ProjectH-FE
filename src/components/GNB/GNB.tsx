import * as style from './Styled';
export default function GNB() {
  return (
    <style.Nav>
      <style.NavLogo href="/">HOME</style.NavLogo>
      <style.NavMenu>
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
