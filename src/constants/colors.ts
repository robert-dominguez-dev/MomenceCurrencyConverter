export type HexColor = `#${string}`;

export type PaletteColors = {
  0?: HexColor;
  50: HexColor;
  100: HexColor;
  200: HexColor;
  300: HexColor;
  400: HexColor;
  500: HexColor;
  600: HexColor;
  700?: HexColor;
  800?: HexColor;
  900?: HexColor;
};

export const palette = {
  primary: {
    50: '#E3FFFA',
    100: '#BEF5EC',
    200: '#16F3CD',
    300: '#0BCFAD',
    400: '#19BDA0',
    500: '#1F8A77',
    600: '#195349',
  },
  gray: {
    0: '#ffffff',
    50: '#eeeeee',
    100: '#dddddd',
    200: '#aaaaaa',
    300: '#888888',
    400: '#777777',
    500: '#555555',
    600: '#333333',
    700: '#222222',
    800: '#111111',
    900: '#000000',
  },
  danger: {
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
} satisfies Record<string, PaletteColors>;

export const appColorsLight = {
  transparent: '#00000000',
  accent: palette.primary[300],
  text: palette.gray[700],
  textMuted: palette.gray[500],
  background: palette.gray[50],
  surface: palette.gray[0],
  surfaceAlt: palette.primary[200],
  border: palette.gray[100],
  shadow: palette.gray[800],
  icon: palette.gray[700],
  danger: palette.danger[400],
  dangerSoft: palette.danger[50],
} as const satisfies Record<string, HexColor>;

export type AppColorName = keyof typeof appColorsLight;
export type AppColors = Record<AppColorName, HexColor>;

export const appColorsDark = {
  transparent: appColorsLight.transparent,
  accent: palette.primary[500],
  text: palette.gray[100],
  textMuted: palette.gray[300],
  background: palette.gray[800],
  surface: palette.gray[700],
  surfaceAlt: palette.primary[500],
  border: palette.gray[600],
  shadow: palette.gray[500],
  icon: palette.gray[100],
  danger: palette.danger[200],
  dangerSoft: palette.danger[50],
} as const satisfies AppColors;
