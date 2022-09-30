import { Button } from '@mui/material';
import styled from 'styled-components';

export const ModalButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};

  :hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 9pt;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 30vw;
  width: 40rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  box-shadow: 24;
  padding: 1rem;
  align-items: center;
  text-align: center;

  .titulo {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: .3rem;
  }

  .chamada-principal {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }


  .subtitulo {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }

  .enfase {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .topico {
    text-align: start;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .topico {
    text-align: start;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .topico h3 {margin-bottom: .5rem}

  .topico p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    /* flex: 3; */
  }
`