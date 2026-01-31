import { ScreenProps } from '../../../../../types.ts';
import { TabsNavigatorScreen, TabsNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import React from 'react';
import { AppText } from '../../../../../../common/AppText/AppText.tsx';
import { Switch } from 'react-native';
import { useAppTheme } from '../../../../../../../contexts/AppThemeProvider.tsx';
import styled from 'styled-components/native';
import { AppTheme } from '../../../../../../../constants/common.ts';
import { useAppThemedColors } from '../../../../../../../hooks/useAppThemedColors.ts';

type SettingsScreenProps = ScreenProps<
  TabsNavigatorScreenParams,
  TabsNavigatorScreen.SettingsScreen
>;

export const SettingsScreen = ({}: SettingsScreenProps) => {
  const { theme, toggleTheme } = useAppTheme();

  const { surfaceAlt, surface } = useAppThemedColors();

  const isDarkTheme = theme === AppTheme.dark;

  return (
    <AppScreenLayout title={'Settings'}>
      <RowStyled>
        <AppText category={'subtitle'}>Dark mode</AppText>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
          trackColor={{
            false: surface,
            true: surfaceAlt,
          }}
          thumbColor={surface}
        />
      </RowStyled>
    </AppScreenLayout>
  );
};

const RowStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
