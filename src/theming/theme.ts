export interface ThemePaletteType {
  colorPrimary: string;
  type: 'light' | 'dark';
}

const lightPalette: ThemePaletteType = {
  colorPrimary: '#3fbb83',
  type: 'light',
};

const darkPalette: ThemePaletteType = {
  colorPrimary: '#f6d55c',
  type: 'dark',
};

export const theme = {
  light: lightPalette,
  dark: darkPalette,
};
