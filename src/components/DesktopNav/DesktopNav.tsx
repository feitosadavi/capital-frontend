import React from 'react'
import Link from 'next/link'

import { NavProps } from '../types';

import { NavLink } from '../styles'

import * as S from './DesktopNav.styles'

export const DesktopNav: React.FC<NavProps> = ({ path, pages }) => {
  return (
    <nav>
      <S.DesktopNavLinks>
        {pages.map(({ label, href }) => (
          <Link key={label} href={href}>
            <NavLink active={path === href}>{label}</NavLink>
          </Link>
        ))}
      </S.DesktopNavLinks>
    </nav>
  )
}