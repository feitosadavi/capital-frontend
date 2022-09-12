import * as React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import * as S from './Header.styles'

const pages = [{
  label: 'Home',
  href: '/'
}, {
  label: 'Comprar',
  href: '/comprar'
}]

export const Navbar = () => {
  const router = useRouter()

  return (
    <header>
      <S.Container>
        <S.Wrapper>
          <S.Logo>capital veículos</S.Logo>

          <nav>
            <S.NavLinks>
              {pages.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <S.NavLink active={router.asPath === href}>{label}</S.NavLink>
                </Link>
              ))}
            </S.NavLinks>
          </nav>
        </S.Wrapper>
      </S.Container>
    </header>
  );
};
