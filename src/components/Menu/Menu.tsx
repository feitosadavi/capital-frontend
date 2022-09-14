import React from 'react'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import * as S from './Menu.styles'

export const Menu = () => {
  return (
    <S.Container>
      <span>Filtrar por: Mais Recentes <ArrowDownIcon /></span>
    </S.Container>
  )
}
