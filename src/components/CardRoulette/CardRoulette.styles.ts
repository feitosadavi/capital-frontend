import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const Title = styled.div`
  font-size: 18pt;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`

