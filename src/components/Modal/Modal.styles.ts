import styled from 'styled-components';

export const ModalButton = styled.button`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.font.secondary.weigths.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12pt;
  :hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10pt;
    padding: .6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 9pt;
  }

  @media screen and (max-width: 390px) {
    font-size: 8.5pt;
    padding: .3rem;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

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

  .bold {
    font-weight: 800;
  }

  .enfase {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .topico {
    text-align: start;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .topico h3 {margin-bottom: .5rem}

  .topico p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;
    height: auto;


    /* flex: 3; */
  }
`