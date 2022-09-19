import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`