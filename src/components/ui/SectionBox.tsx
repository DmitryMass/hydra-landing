import type { FC } from 'react';
import { Container } from '../layouts/Container';

type SectionBoxProps = {
  title: string;
  subtitle: string;
  desc: string;
};

export const SectionBox: FC<SectionBoxProps> = ({ desc, subtitle, title }) => {
  return (
    <section className="mb-24">
      <Container classNameModificator="flex items-center justify-between max-lg:justify-center">
        <div className="max-lg:text-center">
          <p className="text-l36 font-bold mb-2.5 max-lg:text-md26">{title}</p>
          <div className="relative">
            <p className="text-l36 font-thin max-lg:text-md26">{subtitle}</p>
            <img
              className="absolute top-0 -right-12 max-lg:hidden"
              src="/icons/long-arrow.svg"
              alt="long"
            />
          </div>
        </div>
        <div className="max-w-description w-full max-lg:hidden">
          <p className="text-sm16">{desc}</p>
        </div>
      </Container>
    </section>
  );
};
