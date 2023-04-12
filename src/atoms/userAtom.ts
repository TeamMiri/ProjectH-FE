import { atom } from 'recoil';
import { defaultUserInfo, initialFormValues, User } from '@/models/User';
import { FormInterface } from '../models/User';

const userAtom = atom<User>({
  key: 'user',
  // 로그인한 사용자
  default: defaultUserInfo,
});

const myPageuserAtom = atom<User>({
  key: 'myPageuser',
  // 마이페이지 보여줄 사용자
  default: defaultUserInfo,
});

const additionalUserInfoAtom = atom<FormInterface>({
  key: 'forminterface',
  // 모달에서 정보수정할때 사용하는 추가 데이터
  default: initialFormValues,
});

export { userAtom, additionalUserInfoAtom, myPageuserAtom };
