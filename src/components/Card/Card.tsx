import React from 'react'

import * as S from './Card.styles'
import { ComprarPageVehicle } from '../../types'
import Image from 'next/future/image'
import { useRouter } from 'next/router'

type CardProps = {
  vehicle: ComprarPageVehicle
}

export const Card: React.FC<CardProps> = ({ vehicle }) => {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const router = useRouter()
  const handleClick = () => {
    router.push(`/carros/${vehicle.id}`)
  }

  return (
    <S.Container>
      <S.Thumb onClick={handleClick}>
        <Image src={vehicle.photos[0].src} alt={vehicle.photos[0].alt} className="img"
          sizes='100%'
          fill
        />
        {/* <S.MarcaLogo>
          <Image src={vehicle.marca.photo.src} alt={vehicle.marca.photo.alt} width='28' height='28' />
        </S.MarcaLogo> */}
      </S.Thumb>

      <S.Body>
        <span className='body__top'>
          <span className='first_info'>
            <span className='card_marca'>{vehicle.marca.label.toUpperCase()}</span>
            <span className='price'>{currencyFormatter.format(vehicle.preco)}</span>
          </span>
          <span>
            {vehicle.modelo}
          </span>
        </span>

      </S.Body>

      <S.Footer>
        <span>{vehicle.anos}</span>
        <b>|</b>
        <span>{vehicle.km}km</span>
        <b>|</b>
        <span>{vehicle.cor}</span>
      </S.Footer>

    </S.Container>
  )
}
