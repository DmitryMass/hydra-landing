import type { FC } from 'react';
import { Container } from '../layouts/Container';
import { howWeBuildList } from '@/utils/howWeBuildList';

export const HowWeBuild: FC = () => {
  return (
    <section className="relative mb-24">
      <div className="build-bg" />
      <Container>
        <div className="grid grid-cols-4 items-center place-items-center max-lg:grid-cols-2 max-lg:gap-10">
          {howWeBuildList.map(({ id, link }) => (
            <div className="relative max-w-[240px] w-full mx-auto" key={id}>
              <div className="w-[180px] h-[180px] bg-services mb-6 rounded-full p-3.5 mx-auto">
                <div className="w-full h-full button-gradient rounded-full flex justify-center items-center text-blue-80 font-bold text-lg64">
                  0{id}
                </div>
              </div>
              <div className="flex">
                <img
                  className="w-[50px]"
                  src="/icons/arrow-right.svg"
                  alt="arrow"
                />
                <a href="#" target="_blank" className="text-md24 font-bold">
                  {link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
