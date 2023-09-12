import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type MainButtonProps = {
  children: string | ReactNode;
  mainButton?: boolean;
  classNameModificator?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const MainButton: FC<MainButtonProps> = ({
  children,
  mainButton = true,
  classNameModificator,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'px-button-x py-button-y uppercase text-xs12 text-blue-80 font-bold rounded-button max-md:text-s14 relative z-10',
        mainButton
          ? 'button-gradient text-blue-70'
          : 'border-2 border-white text-white',
        classNameModificator,
      )}
    >
      {children}
    </button>
  );
};
