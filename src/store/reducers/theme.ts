import { createSlice } from '@reduxjs/toolkit';

export enum ThemeEnum {
  LIGHT = 'themeLight',
  DARK = 'themeDark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: ThemeEnum.LIGHT,
  reducers: {
    changeTheme: (state) => {
      if (state === ThemeEnum.LIGHT) {
        state = ThemeEnum.DARK;
      } else {
        state = ThemeEnum.LIGHT;
      }
      return state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
