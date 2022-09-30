import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const DesktopNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .divider {
    background-color: gray;
    width: 1px;
    height: 3rem;
    margin: auto 1rem auto 1rem;
  }
`