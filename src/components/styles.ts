import styled from 'styled-components'

/* Navigation */
export const NavLink = styled.a<{ active?: boolean }>`
  font-family: ${({ theme }) => theme.font.primary.family};
  color: ${({ active, theme }) => active ? theme.colors.yellow : '#F4F7F5'} ;
  font-size: 14pt;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`