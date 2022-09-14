import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  height: 18rem;
  background-color: ${({ theme }) => theme.colors.white};
  color:  ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem 1rem 0 1rem;
`

export const Header = styled.div`
  
`

export const Thumb = styled.div`
  width: 100%;

  .img {
    border-radius: 0 1rem 0 0;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 85%;
  
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  gap: .5rem;
  padding: .5rem;
`