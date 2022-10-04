import styled from 'styled-components';
import MUIAccordion from '@mui/material/Accordion'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;

  #panel1a-header {
    font-weight: 900;
  }
`

export const Accordion = styled(MUIAccordion)`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  color: ${({ theme }) => theme.colors.white};
  /* .summary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  } */

  .expand-icon {
    color: ${({ theme }) => theme.colors.yellow};
  }
`