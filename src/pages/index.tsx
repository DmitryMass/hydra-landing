import { Contact } from '@/components/home/Contact';
import { Main } from '@/components/home/Main';
import { Container } from '@/components/layouts/Container';
import { SectionBox } from '@/components/ui/SectionBox';
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
      <Main />
      <Contact />
      <SectionBox
        title="INTRODUCTION"
        subtitle="TO HYDRA VR"
        desc="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
    </>
  );
};

export default Home;
