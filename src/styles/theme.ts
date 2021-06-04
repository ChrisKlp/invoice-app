// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = {
  indigo: '#7C5DFA',
  indigoFaded: '#9277FF',
  indigoDark: '#252945',
  indigoDarker: '#1E2139',
  grayish: '#DFE3FA',
  grayishFaded: 'rgba(223, 227, 250, 0.06)',
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
  white: '#FFFFFF',
};

const base = {
  colors: {
    primary: colors.indigo,
    primaryAlt: colors.indigoFaded,
    secondary: colors.red,
    hash: colors.grayishSky,
    shadow: 'rgba(72, 84, 159, 0.10)',
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
  btn: {
    primary: {
      bg: colors.indigo,
      hover: colors.indigoFaded,
      color: colors.white,
    },
    delete: {
      bg: colors.red,
      hover: colors.redFaded,
      color: colors.white,
    },
  },
};

const themeLight = {
  ...base,
  body: {
    bg: colors.light,
    bg2: colors.white,
  },
  sidebar: {
    bg: colors.dim,
    divider: colors.divider,
  },
  text: {
    heading: colors.grayishDark,
    paragraph: colors.grayishSlick,
    invoiceText: colors.grayishSky,
    invoiceTotal: colors.white,
  },
  btn: {
    ...base.btn,
    secondary: {
      bg: colors.grayishLight,
      hover: colors.grayish,
      color: colors.grayishSky,
    },
    draft: {
      bg: colors.dim,
      hover: colors.grayishDark,
      color: colors.grayishSlick,
    },
  },
  status: {
    ...base.status,
    draft: {
      bg: colors.dimFaded,
      color: colors.dim,
    },
  },
  invoice: {
    tableBg: colors.grayishLight,
    tableTotalBg: colors.dim,
  },
  dropdown: {
    bg: colors.white,
    shadow: 'rgba(72, 84, 159, 0.25)',
    divider: colors.grayish,
  },
  checkbox: {
    bg: colors.grayish,
  },
  form: {
    border: colors.grayish,
    bg: colors.white,
  },
};

const themeDark = {
  ...base,
  body: {
    bg: colors.dark,
    bg2: colors.indigoDarker,
  },
  text: {
    heading: colors.white,
    paragraph: colors.white,
    invoiceText: colors.grayish,
    invoiceTotal: colors.white,
  },
  sidebar: {
    bg: colors.indigoDarker,
    divider: colors.divider,
  },
  btn: {
    ...base.btn,
    secondary: {
      bg: colors.indigoDark,
      hover: colors.white,
      color: colors.grayishSky,
    },
    draft: {
      bg: colors.dim,
      hover: colors.indigoDarker,
      color: colors.grayish,
    },
  },
  status: {
    ...base.status,
    draft: {
      bg: colors.grayishFaded,
      color: colors.grayish,
    },
  },
  invoice: {
    tableBg: colors.indigoDark,
    tableTotalBg: colors.grayishDark,
  },
  dropdown: {
    bg: colors.indigoDark,
    shadow: 'rgba(0, 0, 0, 0.25)',
    divider: colors.indigoDarker,
  },
  checkbox: {
    bg: colors.indigoDarker,
  },
  form: {
    border: colors.indigoDark,
    bg: colors.dark,
  },
};

const theme = {
  themeLight,
  themeDark,
};

export default theme;
export type ThemeType = typeof themeLight;
