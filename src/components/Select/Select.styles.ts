import styled from 'styled-components';

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: .5rem;

  label {
    text-align: start;
    color: ${({ theme }) => theme.colors.yellow};
    font-family: 'Roboto';
    font-weight: 500;
    letter-spacing: .05rem;
  }

  select {
    padding: .5rem;

    text-align: center;
    font-size: 10pt;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.colors.secondary};

    border-radius: .4rem;
    border: none;

  }
`