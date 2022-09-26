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
}

.slides-container {
  border-radius: .5rem;
  height: 27rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 25rem;
  }
}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 15rem;
  }
}

.thumbnail .keen-slider__slide {
  font-size: 30px;
  margin-top: 10px;
  height: 100px;
  border-radius: .5rem;

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