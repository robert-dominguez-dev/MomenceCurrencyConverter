import { TextStyle } from 'react-native';

export type AppTextStatus = 'default' | 'muted' | 'success' | 'danger';

export type AppTextCategory =
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption';

export type AppTextConfig = Required<
  Pick<
    TextStyle,
    'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'fontFamily'
  >
>;
