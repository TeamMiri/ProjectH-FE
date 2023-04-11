import { atom } from 'recoil';

const authAtom = atom<string>({
  key: 'auth',
  // get initial state from local storage to enable user to stay logged in
  default: '-',
});

const isLoginedAtom = atom<boolean>({
  key: 'login',
  // get initial state from local storage to enable user to stay logged in
  default: false,
});

export { authAtom, isLoginedAtom };
