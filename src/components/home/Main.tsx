import type { FC } from 'react';
import { MainButton } from '../ui/MainButton';

export const Main: FC = () => {
  return (
    <>
      <div className="max-w-mainSectionBox1 w-full py-5">
        <h1 className="text-xL40 font-bold mb-9 max-md:text-md24">
          <span>
            <span className="text-gradient max-md:text-l36">Dive</span> Into The
            Depths
          </span>
          <br />
          <span>
            Of{' '}
            <span className="text-gradient max-md:text-l36">
              Virtual Reality
            </span>
          </span>
        </h1>
        <p className="text-sm16 mb-16 max-md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <div className="cursor-pointer flex items-center gap-2.5">
          <MainButton
            children={'build your world'}
            classNameModificator="max-md:w-full"
          />
          <img
            className="max-md:hidden"
            src="/icons/arrow-right.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div className="relative rounded-mainImg bg-mainImgBg px-2.5 pt-3 pb-1">
        <img src="/images/main-img.png" alt="main-img" />
      </div>
    </>
  );
};
