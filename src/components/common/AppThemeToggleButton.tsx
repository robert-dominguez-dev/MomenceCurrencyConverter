import { AppSize, AppTheme } from '../../constants/common.ts';
import React from 'react';
import { useAppTheme } from '../../contexts/AppThemeProvider.tsx';
import { AppText } from './AppText/AppText.tsx';
import styled from 'styled-components/native';

const themeEmojiMap: Record<AppTheme, string> = {
  [AppTheme.light]: '🌚',
  [AppTheme.dark]: '🌞',
};

export const AppThemeToggleButton = () => {
  const { theme, toggleTheme } = useAppTheme();

  const emoji = themeEmojiMap[theme];

  return (
    <PressableStyled onPress={toggleTheme}>
      <AppText category={'heading'}>{emoji}</AppText>
    </PressableStyled>
  );
};

const PressableStyled = styled.Pressable`
  padding-top: ${AppSize.xs}px;
`;
