import React from 'react'
import { AppContext } from '../../context/app.context'
import { Select } from '../../types'
import * as S from './Filters.styles'

export const Filters: React.FC<{ select: Select }> = ({ select: { label, options, key } }) => {
  const context = React.useContext(AppContext)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    context.setFilters(prevState => ({ ...prevState, [key]: event.target.value }))
  }
  return (
    <S.Filter>
      <label htmlFor={label}>{label}</label>
      <select onChange={handleChange} name={label} id={label}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </S.Filter>
  )
}
