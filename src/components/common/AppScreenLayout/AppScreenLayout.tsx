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
import { checkIsValidNumber } from '../../../helpers/checkIsValidNumber.ts';

const contentStyle: ViewStyle = {
  flex: 1,
};

const defaultContentContainerStyle: ViewStyle = {
  paddingTop: AppSize.m,
  paddingBottom: AppSize.m,
};

type AppScreenLayoutProps = ChildrenProp &
  AppScreenHeaderProps & {
    footer?: ReactNode;
    contentContainerStyle?: ViewStyle;
    paddingTopOverride?: number;
    shouldUseScrollView?: boolean;
  };

export const AppScreenLayout = ({
  title,
  subtitle,
  headerLeft,
  headerRight,
  footer,
  paddingTopOverride,
  children,
  shouldUseScrollView = true,
  contentContainerStyle = defaultContentContainerStyle,
}: AppScreenLayoutProps) => {
  const { background } = useAppThemedColors();

  const { top, bottom } = useSafeAreaInsets();

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      flex: 1,
      paddingHorizontal: AppSize.m,
      paddingTop: checkIsValidNumber(paddingTopOverride)
        ? paddingTopOverride
        : top,
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
    <View style={{ ...contentStyle, ...contentContainerStyle }}>
      {children}
    </View>
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
