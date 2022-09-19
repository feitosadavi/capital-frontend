import styled from 'styled-components';

export const Main = styled.main`
  display: block;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  width: 85%;
  max-width: 90rem;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  text-align: center;

`

export const Filters = styled.div`
  flex: 1;
  background-color: white;
`

export const Content = styled.div`
  flex: 3;
  padding-left: 1rem;
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
`