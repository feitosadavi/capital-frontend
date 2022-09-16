import React from 'react'
import * as S from './Filters.styles'

type FilterOptions = {
  marcas: string[]
  modelos: string[]
  combustiveis: string[]
  anos: string[]
  cores: string[]
  categorias: string[]
}

type Select = {
  label: string
  options: string[]
}

interface Props {
  filterOptions: FilterOptions
}

// export const Filters: React.FC<Props> = ({ filterOptions: {
//   marcas,
//   modelos,
//   combustiveis,
//   anos,
//   cores,
//   categorias
// } }) => {


//   return (
//     <S.Container>
//       {selects.map(select => <Filter key={select.label} select={select} />)}
//     </S.Container>
//   )
// }

export const Filters: React.FC<{ select: Select }> = ({ select: { label, options } }) => (
  <S.Filter>
    <label htmlFor="options">{label}</label>
    <select name="options" id="options">
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </S.Filter>
)
