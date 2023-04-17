import { atom } from 'recoil';
import { defaultUserInfo, User } from '@/models/User';

const userAtom = atom<User>({
  key: 'user',
  // 로그인한 사용자
  default: defaultUserInfo,
});

const myPageUserAtom = atom<User>({
  key: 'mypageuser',
  // 모달에서 정보수정할때 사용하는 추가 데이터
  default: defaultUserInfo,
});

export { userAtom, myPageUserAtom };
