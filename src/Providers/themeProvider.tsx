import React, { useState, useEffect } from 'react';
import { ThemeProvider as TP } from 'styled-components';
import { themeDark, themeLight } from '@/styles/Theme';
import { useTheme } from '@/hooks/useTheme';

interface MyComponentProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: MyComponentProps) => {
  const [themeMode] = useTheme();
  const theme = themeMode === 'light' ? themeLight : themeDark;

  return <TP theme={theme}>{children}</TP>;
};
