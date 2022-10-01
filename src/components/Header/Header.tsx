import * as React from 'react';
import { useRouter } from "next/router";

import { useMediaQuery } from '../../Hookes';
import { Page } from '../types';
import { MobileNav } from '../MobileNav';
import { DesktopNav } from '../DesktopNav';

import * as S from './Header.styles'
import { Logo } from '../index';
import { CompraProgramada, ConsignacaoVirtual, Consorcio } from '../../sections';
import { Modal } from '../Modal';

const pages: Page[] = [{
  label: 'Início',
  href: '/'
}, {
  label: 'Comprar',
  href: '/comprar'
}, {
    label: 'Vender',
    href: '/vender'
  }, {
    label: 'Duvidas',
    href: '/duvidas'
  }]

const navModals = [{
  label: 'COMPRA PROGRAMADA',
  content: <CompraProgramada />
}, {
  label: 'CONSÓRCIO',
  content: <Consorcio />
}, {
  label: 'CONSIGNAÇÃO VIRTUAL',
  content: <ConsignacaoVirtual />
}]

export const Navbar = () => {
  const router = useRouter()
  const isMobile = useMediaQuery(800)

  return (
    <header>
      {/* <S.SocialLinks>
        kdfjkj
      </S.SocialLinks> */}
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

      <S.DesktopNavModals>
        {navModals.map(({ label, content }) => (
          <Modal key={label} label={label} content={content} />
          // <span key={label} className='modal-label'>{label}</span>
        ))}
      </S.DesktopNavModals>
    </header>
  );
};
