import type { FC } from 'react';
import { MainButton } from '../ui/MainButton';
import { useScroll } from '@/hooks/useScroll';

export const HeaderButtons: FC = () => {
  const { handleClick } = useScroll();
  return (
    <div className="flex gap-6 items-center max-sm:flex-col">
      <MainButton onClick={() => handleClick('form')} mainButton={false}>
        contact us
      </MainButton>
      <MainButton>Join hydra</MainButton>
    </div>
  );
};
