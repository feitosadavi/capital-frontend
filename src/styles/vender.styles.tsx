import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  margin: 3rem auto 2rem auto;

  width: 85%;
  max-width: 90rem;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  padding: 1rem;
  margin-bottom: 3rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    /* flex: 3; */
  }
`


export const Title = styled.h2`
  font-size: 20pt;
  font-weight: bolder;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: .5rem;
`