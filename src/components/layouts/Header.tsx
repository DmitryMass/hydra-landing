import type { FC } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { HeaderButtons } from './HeaderButtons';

export const Header: FC = () => {
  return (
    <header className="py-6 mb-24">
      <Container classNameModificator="flex items-center justify-between">
        <Logo />
        <Nav />
        <HeaderButtons />
      </Container>
    </header>
  );
};
