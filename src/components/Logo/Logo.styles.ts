import styled from 'styled-components';

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.font.primary.family};
  color: #F4F7F5;
  font-size: 19pt;
  margin-top: .1rem;
  margin-left: -3rem;
  cursor: pointer;
  z-index: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      
    }
  }
`
