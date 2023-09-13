import { navArr } from '@/utils/navMenu';
import clsx from 'clsx';
import { FC } from 'react';

type NavListProps = {
  classNameModificator?: string;
  handleOpenMenu?: () => void;
};
export const NavList: FC<NavListProps> = ({
  classNameModificator,
  handleOpenMenu,
}) => {
  return (
    <ul className={clsx('relative z-10', classNameModificator)}>
      {navArr.map((nav) => (
        <li
          className="uppercase text-sm16 font-bold cursor-pointer py-2.5 px-3 max-lg:text-xs12 hover:shadow-md"
          key={nav}
          onClick={handleOpenMenu}
        >
          {nav}
        </li>
      ))}
    </ul>
  );
};
