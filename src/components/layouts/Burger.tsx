import clsx from 'clsx';
import { FC, useState } from 'react';
import { Nav } from './Nav';

export const Burger: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <button onClick={handleOpenMenu}>
        <img src="/icons/burger-icon.svg" alt="burger" />
      </button>
      <div
        className={clsx(
          isMenuOpen ? 'translate-y-[0%]' : 'translate-y-[-100%]',
          'fixed z-50 inset-0 translate-y-0 bg-blue-80 bg-opacity-80 transition-all duration-200 flex justify-center',
        )}
      >
        <button className="absolute top-4 right-4" onClick={handleOpenMenu}>
          CLOSE
        </button>
        <div className="max-h-[80vh] bg-blue-80 flex justify-center items-center w-full">
          <Nav handleOpenMenu={handleOpenMenu} />
        </div>
      </div>
    </div>
  );
};
