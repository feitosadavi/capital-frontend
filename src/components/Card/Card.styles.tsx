import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  height: 18rem;
  background-color: ${({ theme }) => theme.colors.white};
  color:  ${({ theme }) => theme.colors.secondary};
  border-radius: .6rem .6rem 0 .6rem;
`

export const Header = styled.div`
  
`

export const Thumb = styled.div`
  width: 100%;
  cursor: pointer;

  .img {
    border-radius: 0 .6rem 0 0;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 85%;
  padding: .3rem .6rem 0 .6rem;
  row-gap: .3rem;

  .body__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .price {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  gap: .5rem;
  padding: .5rem;
`