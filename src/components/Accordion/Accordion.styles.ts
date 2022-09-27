import styled from 'styled-components';
import MUIAccordion from '@mui/material/Accordion'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
`

export const Accordion = styled(MUIAccordion)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`