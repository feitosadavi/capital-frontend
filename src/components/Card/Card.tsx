import React from 'react'
import { GetServerSideProps } from 'next'

import * as S from './Card.styles'
import { Vehicle } from '../../types'
import Image from 'next/image'

type CardProps = {
  vehicle: Vehicle
}

export const Card: React.FC<CardProps> = ({ vehicle }) => {
  console.log(vehicle);

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // console.log(vehicle.photos.data[0].attributes)
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
