import * as React from 'react';
import { useRouter } from "next/router";

import { useMediaQuery } from '../../Hookes';
import { Page } from '../types';
import { MobileNav } from '../MobileNav';
import { DesktopNav } from '../DesktopNav';

import * as S from './Header.styles'
import { Logo } from '../index';

const pages: Page[] = [{
  label: 'Comprar',
  href: '/comprar'
}, {
    label: 'Duvidas',
    href: '/duvidas'
}]

export const Navbar = () => {
  const router = useRouter()
  const isMobile = useMediaQuery(800)

  return (
    <header>
      <S.Container>
        <S.Wrapper>
          <Logo />
          {
            isMobile
              ? <MobileNav path={router.asPath} pages={pages} />
              : <DesktopNav path={router.asPath} pages={pages} />
          }
        </S.Wrapper>
      </S.Container>
    </header>
  );
};
