import styled, { css } from 'styled-components';

const xCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Container = styled.div`
  ${xCenter}
  background-color: ${({ theme }) => theme.colors.primary};
  
  height: 5rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 90rem;
  height: 100%;
`
export const NavLinks = styled.a`
  display: flex;
  justify-content: space-between;
  width: 9rem;
  
`

export const NavLink = styled.a<{ active: boolean }>`
  font-family: ${({ theme }) => theme.font.primary.family};
  color: ${({ active, theme }) => active ? theme.colors.yellow : '#F4F7F5'} ;
  font-size: 14pt;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`