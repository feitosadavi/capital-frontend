import React from 'react'

import * as S from './Card.styles'
import { ComprarPageVehicle } from '../../types'
import Image from 'next/image'

type CardProps = {
  vehicle: ComprarPageVehicle
}

export const Card: React.FC<CardProps> = ({ vehicle }) => {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  console.log(vehicle);

  return (
    <S.Container>
      <S.Body>
        <S.Thumb>
          <Image src={vehicle.photos[0].src} alt={vehicle.photos[0].alt} width='500px' height='350px' className="img" />
        </S.Thumb>

        <span>{`${vehicle.marca} ${vehicle.modelo}`}</span>
        <span>{currencyFormatter.format(vehicle.preco)}</span>
      </S.Body>

      <S.Footer>
        <span>{vehicle.anos}</span>
        <b>|</b>
        <span>{vehicle.km}</span>
        <b>|</b>
        <span>{vehicle.cor}</span>
      </S.Footer>
    </S.Container>
  )
}
