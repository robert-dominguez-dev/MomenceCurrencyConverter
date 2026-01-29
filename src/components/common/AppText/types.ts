import { TextStyle } from 'react-native';

export type AppTextStatus =
  | 'default'
  | 'muted'
  | 'success'
  | 'warning'
  | 'danger';

export type AppTextCategory = 'title' | 'subtitle' | 'body' | 'caption';

export type AppTextConfig = Required<
  Pick<
    TextStyle,
    'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'fontFamily'
  >
>;
