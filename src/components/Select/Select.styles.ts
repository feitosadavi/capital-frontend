import styled from 'styled-components';

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: .5rem;

  label {
    text-align: start;
    color: ${({ theme }) => theme.colors.yellow};
    font-family: ${({ theme }) => theme.font.secondary};
    font-weight: ${({ theme }) => theme.font.secondary.weigths.bold};
    letter-spacing: .05rem;
  }

  select {
    cursor: pointer;
    padding: .5rem;
    height: 3rem;

    text-align: center;
    font-size: 10pt;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bolder;
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.colors.secondary};

    border-radius: .4rem;
    border: none;

    :disabled {
      cursor: default;
      background-color: #161616;
      color: #525050;
    }
  }
`