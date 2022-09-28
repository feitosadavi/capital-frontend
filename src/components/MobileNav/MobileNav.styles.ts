import styled from 'styled-components';

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem;
  width: 15rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  .divider {
    width: 90%;
    height: 1px;
    background-color: gray;
    margin-top: 1rem;
  }
`