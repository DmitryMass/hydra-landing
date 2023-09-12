import { useEffect, type FC } from 'react';

type ThemeSwithcerProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeSwitcher: FC<ThemeSwithcerProps> = ({
  isDarkTheme,
  toggleTheme,
}) => {
  useEffect(() => {
    document.body.className = isDarkTheme ? 'light-theme' : 'dark-theme';
  }, [isDarkTheme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
