import styled from 'styled-components';

export const Footer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* bottom: 0; */
  height: 13rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;
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

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: .7rem;
  width: 25rem;
  height: 70%;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 25rem;
  height: 70%;
  gap: .7rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  max-width: 90rem;
  height: 100%;
`