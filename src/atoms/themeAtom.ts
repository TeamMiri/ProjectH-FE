import { atom } from 'recoil';

// Define the theme state atom
export const themeAtom = atom<string>({
  key: 'themeAtomKey',
  default: 'light',
});
