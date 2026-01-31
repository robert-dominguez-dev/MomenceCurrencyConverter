import React, { JSX, ReactNode, useMemo } from 'react';
import { ScrollView, StatusBar, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppSize } from '../../../constants/common.ts';
import {
  AppScreenHeader,
  AppScreenHeaderProps,
} from './components/AppScreenHeader.tsx';
import { AppScreenFooterWrapper } from './components/AppScreenFooterWrapper.tsx';
import { useAppThemedColors } from '../../../hooks/useAppThemedColors.ts';
import { ChildrenProp } from '../../../types/common.ts';

const contentStyle: ViewStyle = {
  flex: 1,
};

const contentContainerStyle: ViewStyle = {
  minHeight: '100%',
  paddingTop: AppSize.m,
  paddingBottom: AppSize.m,
};

type AppScreenLayoutProps = ChildrenProp &
  AppScreenHeaderProps & {
    footer?: ReactNode;
    shouldUseScrollView?: boolean;
  };

export const AppScreenLayout = ({
  title,
  subtitle,
  headerLeft,
  headerRight,
  footer,
  children,
  shouldUseScrollView = true,
}: AppScreenLayoutProps) => {
  const { background } = useAppThemedColors();

  const { top, bottom } = useSafeAreaInsets();

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      flex: 1,
      paddingHorizontal: AppSize.m,
      paddingTop: top,
      paddingBottom: bottom,
      backgroundColor: background,
    }),
    [top, bottom, background],
  );

  const contentElement: JSX.Element = shouldUseScrollView ? (
    <ScrollView
      style={contentStyle}
      contentContainerStyle={contentContainerStyle}>
      {children}
    </ScrollView>
  ) : (
    <View style={contentStyle}>{children}</View>
  );

  return (
    <View style={containerStyle}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <AppScreenHeader
        title={title}
        subtitle={subtitle}
        headerLeft={headerLeft}
        headerRight={headerRight}
      />
      {contentElement}
      {!!footer && <AppScreenFooterWrapper>{footer}</AppScreenFooterWrapper>}
    </View>
  );
};
