import type { FC } from 'react';
import { HeaderButtons } from './HeaderButtons';

const navArr: string[] = ['about', 'services', 'technologies', 'how to'];
type NavProps = {
  handleOpenMenu?: () => void;
};
export const Nav: FC<NavProps> = ({ handleOpenMenu }) => {
  return (
    <nav>
      <div className="lg:hidden">
        <img
          className="mx-auto mb-2.5"
          src="/icons/hydra-logo.svg"
          alt="logo"
        />
      </div>
      <ul className="flex items-center max-lg:flex-col max-lg:mb-5">
        {navArr.map((nav) => (
          <li
            className="uppercase text-xs12 font-bold cursor-pointer py-2.5 px-4 max-lg:text-sm16"
            key={nav}
            onClick={handleOpenMenu}
          >
            {nav}
          </li>
        ))}
      </ul>
      <div className="lg:hidden">
        <HeaderButtons />
      </div>
    </nav>
  );
};
