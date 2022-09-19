import * as React from 'react'
import MUIPagination from '@mui/material/Pagination'
import { AppContext } from '../../context/app.context';

export const Pagination: React.FC = () => {
  const context = React.useContext(AppContext)
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    context.setPage(value)
  }

  return (
    <MUIPagination
      onChange={handleChange}
      page={context.page}
      count={context.numberOfPages}
      variant="outlined"
      shape="rounded"
    />
  )
}
