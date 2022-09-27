import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  width: 85%;
  max-width: 85rem;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  text-align: center;
  column-gap: 1rem;

`

export const Filters = styled.div`
  flex: 1;
  padding: 1.5rem .8rem .8rem .8rem;
  border-radius: .3rem;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  display: flex;
  height: 70%;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Content = styled.div`
  flex: 3;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.5rem;
  margin-top: 1rem;
  width: 100%;
`

export const Grid = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  width: 47rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`