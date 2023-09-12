import { Main } from '@/components/home/Main';
import { Container } from '@/components/layouts/Container';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { type FC, useState } from 'react';

const Home: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <>
      <ThemeSwitcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Container classNameModificator="flex justify-between items-center gap-10 max-lg:flex-col-reverse max-md:flex-col-reverse max-md:text-center">
        <Main />
      </Container>
    </>
  );
};

export default Home;
