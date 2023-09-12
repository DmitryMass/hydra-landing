import { Container } from '@/components/layouts/Container';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { type FC, useState } from 'react';

const Home: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <section>
      <Container>
        <ThemeSwitcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <h1 className="text-red-600">DATA</h1>
      </Container>
    </section>
  );
};

export default Home;
