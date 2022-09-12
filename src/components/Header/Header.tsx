import * as React from 'react';
import { useRouter } from "next/router";

import { useMediaQuery } from '../../Hookes';
import { Page } from '../types';
import { MobileNav } from '../MobileNav';
import { DesktopNav } from '../DesktopNav';

import * as S from './Header.styles'

const pages: Page[] = [{
  label: 'Home',
  href: '/'
}, {
  label: 'Comprar',
  href: '/comprar'
}]

export const Navbar = () => {
  const router = useRouter()
  const isMobile = useMediaQuery(800)

  return (
    <header>
      <S.Container>
        <S.Wrapper>
          <S.Logo>capital veículos</S.Logo>
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
