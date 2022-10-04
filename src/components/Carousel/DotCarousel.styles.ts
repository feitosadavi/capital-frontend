import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;

[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.slides-container {
  border-radius: .5rem;
  height: 100%;
}

`

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`

export const Dot = styled.button<{ active?: boolean }>`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  background-color: ${({ active }) => active && 'gray'};
`

export const Arrow = styled.svg<{ left?: boolean, disabled?: boolean }>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;

  left: ${({ left }) => left ? '5px' : 'auto'};
  right: ${({ left }) => left ? 'auto' : '5px'};
  
  fill: ${({ disabled }) => disabled && 'gray'};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }

`