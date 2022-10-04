import React from 'react'
import { LoopCarousel } from '../Carousel'

import * as S from './CardRoulette.styles'

interface CardRouletteProps {
  title: string
  cards: any[]
}

export const CardRoulette: React.FC<CardRouletteProps> = ({ title, cards }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <LoopCarousel cards={cards} />
    </S.Container>
  )
}
