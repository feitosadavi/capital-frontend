import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  width: 85%;
  max-width: 90rem;
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  text-align: center;
  column-gap: 1rem;
  gap: 4rem;

`

export const Filters = styled.div`
  flex: 1;
  padding: 1.5rem .8rem .8rem .8rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 70%;
  flex-direction: column;
  gap: 1rem;
  /* box-shadow: rgba(48, 46, 39, 0.267) 0px 7px 29px 0px; */
  background-image: linear-gradient(to bottom, #131214, #161618, #1a191b, #1d1c1e, #201f22);
  
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
  column-gap: 1rem;
  row-gap: 2rem;

  flex-wrap: wrap;
  width: 47rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const ClearFiltersBtn = styled.button`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
  width: 100%;
  background-color: transparent;
  font-size: 11pt;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.yellow};
  opacity: .7;
  transition: .3s;
  :hover {
    opacity: 1;
  }
`