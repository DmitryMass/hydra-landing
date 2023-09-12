import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type MainButtonProps = {
  children: string | ReactNode;
  mainButton?: boolean;
  classNameModificator?: string;
};

export const MainButton: FC<MainButtonProps> = ({
  children,
  mainButton = true,
  classNameModificator,
}) => {
  return (
    <button
      className={clsx(
        'px-button-x py-button-y uppercase text-xs12 text-blue-80 font-bold rounded-button max-md:text-s14',
        mainButton
          ? 'bg-gradient-to-r from-slate-500 to-violet-300 text-blue-70'
          : 'border-2 border-white text-white',
        classNameModificator,
      )}
    >
      {children}
    </button>
  );
};
