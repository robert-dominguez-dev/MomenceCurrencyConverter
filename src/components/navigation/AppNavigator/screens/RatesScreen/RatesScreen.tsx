import { ScreenProps } from '../../../types.ts';
import { Text } from 'react-native';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { AppText } from '../../../../common/AppText/AppText.tsx';

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  const footerElement = <Text>Footer</Text>;
  return (
    <AppScreenLayout
      title={'Exchange Rates'}
      footer={footerElement}>
      <AppText>AKSDMSAL MSADM LSAM LDMA LDMASL KM</AppText>
    </AppScreenLayout>
  );
};
