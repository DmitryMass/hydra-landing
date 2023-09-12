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
    <div className="fixed top-0">
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
