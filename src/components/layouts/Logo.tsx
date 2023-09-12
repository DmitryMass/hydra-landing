import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <div className="flex items-center gap-3.5">
      <img src="/icons/hydra-logo.svg" alt="hydra-logo" />
      <img src="/icons/hydra-text.svg" alt="hydra-text" />
    </div>
  );
};
