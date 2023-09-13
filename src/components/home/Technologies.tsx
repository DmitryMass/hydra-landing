import type { FC } from 'react';
import { Container } from '../layouts/Container';
import { Titles } from '../ui/Titles';
import { techList } from '@/utils/techList';

export const Technologies: FC = () => {
  return (
    <section id="technologies" className="mb-20">
      <Container>
        <div className="relative flex justify-center items-center h-[300px] mb-10">
          <div className="techno-bg" />
          <div className="relative">
            <Titles
              title="technologies & hardware"
              subtitle="used by hydra vr"
              classNameModificator="text-center max-sm:text-md24"
            />
          </div>
        </div>
        <div className="relative grid grid-cols-4 items-center place-items-center gap-5">
          {techList.map(({ logo }) => (
            <div key={logo}>
              <img src={logo} alt="tech" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
