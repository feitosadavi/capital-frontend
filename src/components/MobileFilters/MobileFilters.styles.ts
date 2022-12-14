import styled from 'styled-components';

export const MobileFilters = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  width: 15rem;
  height: 100%;
  z-index: 999999999999999;
  background-color: ${({ theme }) => theme.colors.primary};
`