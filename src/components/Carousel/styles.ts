import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

.number-slide {
  background: ${({ theme }) => theme.colors.secondary};
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

.thumbnail {
  width: 90%;
  align-self: center;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
}


.thumbnail .keen-slider__slide {
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
}

.thumbnail .keen-slider__slide img {
  transition: .2s;
  color: black;
  object-fit: cover;
}

.thumbnail .keen-slider__slide.active img {
  scale: 1.2;
  opacity: .5;
}
`

export const ArrowContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 0.3rem;
    width: 103%;
    left: -6px;
  }
`

export const Arrow = styled.svg<{ left?: boolean, disabled?: boolean }>`
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;

  left: ${({ left }) => left ? '1px' : 'auto'};
  right: ${({ left }) => left ? 'auto' : '1px'};

  fill: ${({ disabled }) => disabled && 'gray'};

`