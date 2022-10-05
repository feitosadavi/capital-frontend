import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  .icon {
    border-radius: .5rem;
    width: 2.3rem;
    height: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

`

export const Funcionamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: 15rem;
  min-height: 7rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: #1e1d1f;
  border-radius: .5rem;
  font-weight: 600;
  font-family: 'Roboto';

  .horarios {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .funcionamento_info {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .1rem;
  }

  .funcionamento_periodo {
    color: ${({ theme }) => theme.colors.yellow};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 10rem;
  }
`


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  align-items: center;


  max-width: 90rem;
  height: 100%;
  width: 85%;
  margin-top: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: auto;
    grid-template-columns: 100%;
  }

  div {
    margin-bottom: .4rem;
  }

  .social-networks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    height: 100%;
    width: 100%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      align-items: flex-start;
      margin-top: 1rem;
    }

  }

  .social-networks__title {
    font-size: 16pt;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  .social-networks__divider {
    background-color: gray;
    width: 1px;
    height: 5rem;
  }
`