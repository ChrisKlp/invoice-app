// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = {
  indigo: '#7C5DFA',
  indigoFaded: '#9277FF',
  indigoDark: '#252945',
  indigoDarker: '#1E2139',
  grayish: '#DFE3FA',
  // grayishFaded: '#DFE3FA10',
  grayishLight: '#F9FAFE',
  grayishSlick: '#888EB0',
  grayishSky: '#7E88C3',
  grayishDark: '#0C0E16',
  red: '#EC5757',
  redFaded: '#FF9797',
  green: '#33D69F',
  greenFaded: 'rgba(51, 214, 159, 0.06)',
  yellow: '#FF8F00',
  yellowFaded: 'rgba(255, 143, 0, 0.06)',
  dim: '#373B53',
  dimFaded: 'rgba(55, 59, 83, 0.06)',
  light: '#F8F8FB',
  dark: '#141625',
  divider: '#494E6E',
  shadow: '#48549F25',
  shadow2: '#48549F10',
  // light_01: '#00000001',
  // light_10: '#00000010',
  white: '#FFFFFF',
};

const light = {
  body: {
    bg: colors.light,
  },
  text: {
    heading: colors.grayishDark,
    paragraph: colors.grayishSlick,
  },
  btn: {
    primary: {
      bg: colors.indigo,
      hover: colors.indigoFaded,
      color: colors.white,
    },
    secondary: {
      bg: colors.grayishLight,
      hover: colors.grayish,
      color: colors.grayishSky,
    },
    delete: {
      bg: colors.red,
      hover: colors.redFaded,
      color: colors.white,
    },
    draft: {
      bg: colors.dim,
      hover: colors.grayishDark,
      color: colors.grayishSlick,
    },
  },
  sidebar: {
    bg: colors.dim,
    divider: colors.divider,
  },
  logo: {
    primary: colors.indigo,
    secondary: colors.indigoFaded,
  },
  dropdown: {
    bg: colors.white,
    shadow: colors.shadow,
  },
  checkbox: {
    bg: colors.grayish,
    active: colors.indigo,
  },
  status: {
    paid: {
      bg: colors.greenFaded,
      color: colors.green,
    },
    pending: {
      bg: colors.yellowFaded,
      color: colors.yellow,
    },
    draft: {
      bg: colors.dimFaded,
      color: colors.dim,
    },
  },
  invoice: {
    bg: colors.white,
    shadow: colors.shadow2,
    date: colors.grayishSky,
    hover: colors.indigoFaded,
  },
};

const theme = light;

export type ThemeType = typeof theme;
export default theme;
