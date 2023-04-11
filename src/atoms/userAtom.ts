import { atom } from 'recoil';
import { defaultUserInfo, User } from '@/models/User';

const userAtom = atom<User>({
  key: 'user',
  // get initial state from local storage to enable user to stay logged in
  default: defaultUserInfo,
});

export { userAtom };
