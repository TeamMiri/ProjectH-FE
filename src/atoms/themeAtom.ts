import { atom } from 'recoil';

// Define the theme state atom
export const themeAtom = atom<string>({
  key: 'themeAtom',
  default: 'light',
});
