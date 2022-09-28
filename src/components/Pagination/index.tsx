import * as React from 'react'
import MUIPagination from '@mui/material/Pagination'
import { AppContext } from '../../context/app.context';
import styled from 'styled-components';

export const Pagination: React.FC = () => {
  const context = React.useContext(AppContext)
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    context.setPage(value)
  }

  return (
    <StyledPaginaton
      onChange={handleChange}
      page={context.page}
      count={context.numberOfPages}
      variant="outlined"
      shape="rounded"
    />
  )
}

const StyledPaginaton = styled(MUIPagination)`
  margin-bottom: 2rem;
  button {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }

  .Mui-selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
