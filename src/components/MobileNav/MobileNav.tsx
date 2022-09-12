import * as React from 'react';
import Link from 'next/link';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import { NavProps } from '../types';
import { NavLink } from '../styles';

import * as S from './MobileNav.styles'

export const MobileNav: React.FC<NavProps> = ({ path, pages }) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => setState(prevState => !prevState);

  const list = () => (
    <S.MobileNavLinks
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {pages.map(({ label, href }) => (

        <Link key={label} href={href}>
          <NavLink active={path === href}>{label}</NavLink>
        </Link>
      ))}
    </S.MobileNavLinks>
  );

  return (
    <>
      <Button onClick={toggleDrawer}><MenuIcon sx={{ color: 'white' }} /></Button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
}