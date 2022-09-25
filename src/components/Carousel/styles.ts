import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
.number-slide {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 25rem;
  max-height: 100vh;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 15rem;
  }
}

.thumbnail .keen-slider__slide {
  font-size: 30px;
  margin-top: 10px;
  height: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 60px;
  }
}

.thumbnail .keen-slider__slide {
  cursor: pointer;
}

.thumbnail .keen-slider__slide.active {
  border: 2px solid ${({ theme }) => theme.colors.yellow};
}
`