export interface Theme {
  background: string;
  colorPrimary: string;
  type: 'light' | 'dark';
}

const lightPalette: Theme = {
  background: '#F6F9FC',
  colorPrimary: '#3fbb83',
  type: 'light',
};

const darkPalette: Theme = {
  background: '#2F2F2F',
  colorPrimary: '#f6d55c',
  type: 'dark',
};

export const theme = {
  light: lightPalette,
  dark: darkPalette,
};
