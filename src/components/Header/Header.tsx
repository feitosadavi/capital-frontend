import * as React from 'react';
import { useRouter } from "next/router";

import { useMediaQuery } from '../../Hookes';
import { Page } from '../types';
import { MobileNav } from '../MobileNav';
import { DesktopNav } from '../DesktopNav';

import * as S from './Header.styles'
import Image from 'next/image';

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
          <S.Logo>
            <Image src="/capital-logo.svg" alt="me" width="200" height="150" />
          </S.Logo>
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
