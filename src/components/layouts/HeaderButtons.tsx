import { FC } from 'react';
import { MainButton } from '../ui/MainButton';

export const HeaderButtons: FC = () => {
  return (
    <div className="flex gap-6 items-center max-sm:flex-col">
      <MainButton mainButton={false}>contact us</MainButton>
      <MainButton>Join hydra</MainButton>
    </div>
  );
};
