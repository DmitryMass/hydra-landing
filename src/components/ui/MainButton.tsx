import type { FC, ReactNode } from 'react';

type MainButtonProps = {
  children: string | ReactNode;
};

export const MainButton: FC<MainButtonProps> = ({ children }) => {
  return (
    <button className="px-button-x py-button-y text-xs12 bg-gradient-to-r from-slate-500 to-violet-300 text-blue-70 font-bold rounded-button">
      {children}
    </button>
  );
};
