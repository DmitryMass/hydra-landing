import type { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-mainContainer w-full mx-auto px-container">
      {children}
    </div>
  );
};
