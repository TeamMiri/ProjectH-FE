import { atom } from 'recoil';

const pdfAtom = atom<string | null>({
  key: 'pdf',
  // get initial state from local storage to enable user to stay logged in
  default: null,
});

export { pdfAtom };
