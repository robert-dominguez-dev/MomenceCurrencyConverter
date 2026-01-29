type HexColor = `#${string}`;

type DesignSystemColors = {
  0: HexColor;
  50: HexColor;
  100: HexColor;
  200: HexColor;
  300: HexColor;
  400: HexColor;
  500: HexColor;
  600: HexColor;
  700: HexColor;
  800: HexColor;
  900: HexColor;
};

const appDesignSystemColors: Record<string, DesignSystemColors> = {
  primary: {
    0: '#ffddc2',
    50: '#ffc595',
    100: '#ffaf6d',
    200: '#ff9945',
    300: '#fc8321',
    400: '#ef6d04',
    500: '#d3650a',
    600: '#b75a0f',
    700: '#9c5012',
    800: '#824614',
    900: '#6a3b15',
  },
  secondary: {
    0: '#7dbeff',
    50: '#43a1ff',
    100: '#1c8dff',
    200: '#0079f3',
    300: '#0065cb',
    400: '#0053a5',
    500: '#044687',
    600: '#073a6d',
    700: '#082e54',
    800: '#08233d',
    900: '#071727',
  },
  grayscale: {
    0: '#ffffff',
    50: '#eeeeee',
    100: '#dddddd',
    200: '#cccccc',
    300: '#aaaaaa',
    400: '#999999',
    500: '#888888',
    600: '#666666',
    700: '#444444',
    800: '#222222',
    900: '#000000',
  },
  negative: {
    0: '#ffb7be',
    50: '#ff7b89',
    100: '#ff5465',
    200: '#ff2c41',
    300: '#f70c23',
    400: '#d5071b',
    500: '#b80c1d',
    600: '#9d101e',
    700: '#83121d',
    800: '#6a131c',
    900: '#531219',
  },
};

export const appColors = {
  primary: appDesignSystemColors.primary['400'],
  primaryLight: appDesignSystemColors.primary['0'],
  primaryDark: appDesignSystemColors.primary['600'],
  secondary: appDesignSystemColors.secondary['400'],
  secondaryLight: appDesignSystemColors.secondary['0'],
  secondaryDark: appDesignSystemColors.secondary['600'],
  secondaryVeryDark: appDesignSystemColors.secondary['800'],
  negative: appDesignSystemColors.negative['400'],
  negativeLight: appDesignSystemColors.negative['0'],
  white: appDesignSystemColors.grayscale['50'],
  blackDisabled: appDesignSystemColors.grayscale['600'],
  gray: appDesignSystemColors.grayscale['400'],
  grayDark: appDesignSystemColors.grayscale['600'],
  black: appDesignSystemColors.grayscale['800'],
  pink: '#a50076',
  pinkDark: '#6a004c',
  green: '#089146',
  greenDark: '#055e2e',
  blue: '#06a7d4',
  blueDark: '#0084a9',
  yellow: '#d9c000',
  yellowDark: '#aa9602',
  brown: '#914808',
  brownDark: '#683406',
  semiTransparentOverlay: '#00000080',
} as const satisfies Record<string, HexColor>;
