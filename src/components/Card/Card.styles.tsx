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
  box-shadow: rgba(248, 184, 9, 0.301) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`


export const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  .img {
    scale: 1;
    object-fit: cover;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  padding: .3rem .6rem 0 .6rem;

  .body__top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    text-align: start;
    row-gap: 1rem;
  }

  .first_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .card_marca {
    font-weight: 800;
    font-size: 11pt;
    color: ${({ theme }) => theme.colors.primary};
  }

  .price {
    font-weight: 900;
    font-size: 13pt;
    text-shadow: 1px 1px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const MarcaLogo = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100000;
` 

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  gap: .3rem;
  padding: .5rem;
  font-weight: 500;
  font-size: 11pt;
`

export const Favorite = styled.div<{ isFavorite: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: .5rem;
  right: .5rem;
  z-index: 999999999;
  width: 2rem;
  height: 2rem;
  border-radius: .5rem;
  cursor: pointer;
  background-color: ${({ isFavorite }) => isFavorite ? 'white' : 'red'};
  transition: .02s;

  .favorite-icon {
    color: ${({ isFavorite }) => isFavorite ? 'red' : 'white'};
    transition: .5s;
  }

  :active {
    scale: .9
  }

  :hover {
    outline: .4rem solid #393a3a67;
  }
`