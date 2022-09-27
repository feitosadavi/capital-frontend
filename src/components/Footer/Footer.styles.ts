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


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 90rem;
  height: 100%;
  row-gap: 2rem;
  margin-top: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }

  div {
    margin-bottom: .4rem;
  }

  .social-networks {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* flex-direction: column; */
      width: 100%;
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