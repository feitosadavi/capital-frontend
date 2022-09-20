import React from 'react'
import * as S from './Select.styles'

type Props = {
  label: string
  id: string
  options: any[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<Props> = ({ id, label, options, onChange }) => {
  return (
    <S.Select>
      <label htmlFor={id}>{label}</label>
      <select onChange={onChange} name={id} id={id}>
        <option value='*'>Todos</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </S.Select>
  )
}
