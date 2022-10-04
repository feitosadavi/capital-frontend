import styled from 'styled-components';

export const WhatsappBtn = styled.button`
  transition: .4s;

  display: flex;
  flex-direction: column;
  row-gap: .3rem;
  font-size: 13pt;

  display: block;
  margin: 3rem auto auto auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5rem;
  padding: .5rem;
  color: white;

  :hover {
    .label {
      color: #33e91b;
      font-size: 13pt;
      transition: .4s;
    }
  }

  .label {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 12pt;
    transition: .3s;
  }
`