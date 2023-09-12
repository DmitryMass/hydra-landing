import type { FC } from 'react';

const navArr: string[] = ['about', 'services', 'technologies', 'how to'];

export const Nav: FC = () => {
  return (
    <nav>
      <ul className="flex items-center">
        {navArr.map((nav) => (
          <li
            className="uppercase text-xs12 font-bold cursor-pointer py-2.5 px-4"
            key={nav}
          >
            {nav}
          </li>
        ))}
      </ul>
    </nav>
  );
};
