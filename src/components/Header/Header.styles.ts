import styled, { css } from 'styled-components';

const xCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Container = styled.div`
  ${xCenter}
  flex-direction: column;
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

export const NavLink = styled.a<{ active: boolean }>`
  font-family: ${({ theme }) => theme.font.primary.family};
  color: ${({ active, theme }) => active ? theme.colors.yellow : '#F4F7F5'} ;
  font-size: 14pt;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const SocialLinks = styled.div`
  ${xCenter}
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.secondary};
  color:white;
  width: 100%;
  height: 2rem;
`

export const DesktopNavModals = styled.div`
  ${xCenter}
  gap: 3rem;
  width: 100%;
  height: 3rem;
  background-color: #292727;

  .modal-label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    cursor: pointer;
    font-family: 'Roboto';
    letter-spacing: .2rem;

    :hover {
      color: ${({ theme }) => theme.colors.yellow};
      transition: .3s;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0;
  }
`