import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeTheme, ThemeEnum } from 'store/reducers/theme';

export default function useTheme(): void {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const themeSwitch = useCallback(() => dispatch(changeTheme()), [dispatch]);
  const mediaThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (theme === ThemeEnum.DARK && mediaThemeQuery) {
      return;
    }

    themeSwitch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
