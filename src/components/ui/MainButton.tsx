import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type MainButtonProps = {
  children: string | ReactNode;
  mainButton?: boolean;
};

export const MainButton: FC<MainButtonProps> = ({
  children,
  mainButton = true,
}) => {
  return (
    <button
      className={clsx(
        'px-button-x py-button-y uppercase text-xs12 text-blue-80 font-bold rounded-button',
        mainButton
          ? 'bg-gradient-to-r from-slate-500 to-violet-300 text-blue-70'
          : 'border-2 border-white text-white',
      )}
    >
      {children}
    </button>
  );
};
