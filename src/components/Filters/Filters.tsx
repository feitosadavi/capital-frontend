import React from 'react'
import { AppContext } from '../../context/app.context'
import { bind } from '../../Hookes/bind'
import { Select } from '../../types'
import { Select as SelectEl } from '../index'
import * as S from './Filters.styles'

export const Filters: React.FC<{ select: Select }> = ({ select: { label, options, key } }) => {
  const context = React.useContext(AppContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    context.setFilters(prevState => ({ ...prevState, [key]: event.target.value }))
  }

  // use um event listner dentro do select para realizar as mudanças
  React.useEffect(() => {
    bind({
      parent: 'marca',
      child: 'modelo'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters])


  return (
    <>
      <SelectEl
        id={key}
        label={label}
        options={options}
        onChange={handleChange}
      />
    </>
  )
}
