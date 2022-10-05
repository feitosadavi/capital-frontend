import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  width: 17rem;
  height: 20rem;
  padding: 1rem;
  vertical-align: middle;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  flex: 1;

  .titulo {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 3;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  flex: 1;

  .cliente-info {
    display: flex;
    gap: .3rem;
    flex-direction: column;
  }
  .cliente-nome {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
  .cliente-rede_social {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: 600;
  }
`

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100rem;
  position: relative;
`