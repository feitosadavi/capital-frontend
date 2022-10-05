import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 3rem auto 2rem auto;

  width: 85%;
  max-width: 90rem;
  min-height: 100vh;
`

export const Head = styled.div`
  display: grid;
  grid-template-columns: 60% 30%;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 100%;
  }
`

export const Searcher = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 4rem;
  }
`

export const SearcherFooter = styled.div`
  width: 100%;
  /* display: flex;
  width: 100%;
  gap: 1rem; */
`

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
`

export const Slide = styled.div<{ img: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 25rem;
  height: 100%;
  background-image: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .slide__wrapper {
    width: 80%;
  }

  .slide__title {
    font-size: 54pt;
    font-weight: 900;
    /* color: ${({ theme }) => theme.colors.yellow}; */
    color: #ff8800;
  }

  .slide__subtitle {
    font-size: 16pt;
    font-weight: 800;
    /* color: ${({ theme }) => theme.colors.white}; */
    color: #14110e;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .slide__title {
      font-size: 24pt;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.yellow};
      margin-bottom: 3rem;
    }

  }
`

export const QuemSomos = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-between;
  
  width: 100%;
  text-align: end;
  margin-top: 7rem;

  .foto-loja {
    border-radius: .5rem;
  }

  .quemsomos__text {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.white};
    font-size: 16pt;
    font-weight: 500;
    line-height: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 100%;
    text-align: center;

    .quemsomos__text {
      margin-top: 1rem;
    }
  }
`

export const Topicos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 7rem;
  width: 100%;
  text-align: center;
  
  .topico {
    width: 15rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: .5rem;
    padding: 2rem;
  }

  .topico__titulo {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: 600;
    font-size: 16pt;
    margin-bottom: 1rem;
  }

  .topico__texto {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 14pt;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
  }

`
export const Marca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  max-width: 23rem;
  height: 10rem;
  margin: auto 1rem auto .2rem;
  gap: 1rem;
`