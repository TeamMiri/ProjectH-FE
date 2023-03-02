import { themeAtom } from '@/atoms/themeAtom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
export const useTheme = () => {
  // 브라우저 테마 정보 확인
  const [theme, setTheme] = useRecoilState(themeAtom);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [setTheme]);

  const setMode = (mode: string) => {
    // 테마정보 변경하면 localstorage 에 저장해 다음에도 지정한 값으로 테마가 보이도록 설정
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    console.log(theme);
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};
//https://blog.woolta.com/categories/1/posts/199
