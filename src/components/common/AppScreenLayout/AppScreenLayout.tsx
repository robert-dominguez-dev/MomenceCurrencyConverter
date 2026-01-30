import React, { ReactNode, useMemo } from 'react';
import { StatusBar, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppSize } from '../../../constants/common.ts';
import {
  AppScreenHeader,
  AppScreenHeaderProps,
} from './components/AppScreenHeader.tsx';
import { AppScreenFooterWrapper } from './components/AppScreenFooterWrapper.tsx';
import { useAppThemedColors } from '../../../hooks/useAppThemedColors.ts';

const contentContainerStyle: ViewStyle = { minHeight: '100%' };

type AppScreenLayoutProps = AppScreenHeaderProps & {
  title: string;
  footer?: ReactNode;
};

export const AppScreenLayout = ({
  title,
  headerLeft,
  headerRight,
  footer,
  children,
}: AppScreenLayoutProps) => {
  const { background } = useAppThemedColors();

  const { top, bottom } = useSafeAreaInsets();

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      flex: 1,
      gap: AppSize.m,
      paddingHorizontal: AppSize.m,
      paddingTop: top,
      paddingBottom: bottom,
      backgroundColor: background,
    }),
    [top, bottom, background],
  );

  return (
    <View style={containerStyle}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <AppScreenHeader
        headerLeft={headerLeft}
        headerRight={headerRight}>
        {title}
      </AppScreenHeader>
      <ContentStyled contentContainerStyle={contentContainerStyle}>
        {children}
      </ContentStyled>
      {!!footer && <AppScreenFooterWrapper>{footer}</AppScreenFooterWrapper>}
    </View>
  );
};

const ContentStyled = styled.ScrollView`
  flex: 1;
`;
