import React from 'react'
import * as S from './Select.styles'

type Props = {
  label: string
  id: string
  options: any[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

export const Select: React.FC<Props> = ({ id, label, options, onChange, value }) => {
  // if (label === 'Marcas') console.log('Options: ', { [label]: options });
  // if (label === 'Modelos') console.log('Options: ', { [label]: options });

  return (
    <S.Select>
      <label htmlFor={id}>{label.toUpperCase()}</label>
      <select value={value} onChange={onChange} name={id} id={id}>
        <option>Todos</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </S.Select>
  )
}
