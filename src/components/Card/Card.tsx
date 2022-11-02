/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import * as S from './Card.styles'
import { ComprarPageVehicle } from '../../types'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import FavoriteIcon from '@mui/icons-material/Favorite'

type CardProps = {
  vehicle: ComprarPageVehicle
  isFavorite?: boolean
}

export const getFavorites = (): string[] => {
  const unparsedFavorites = localStorage.getItem('favorites')

  if (!unparsedFavorites) {
    localStorage.setItem('favorites', JSON.stringify([]))
    return []
  }
  return JSON.parse(unparsedFavorites)
}


const isVehicleFavorite = (vehicleId: string): boolean => {
  const favorites = getFavorites()

  if (favorites.length < 1) return false
  return favorites.some(favoriteId => favoriteId === vehicleId)
}

const addToVehicleFavorites = (vehicleId: string) => {
  const favorites = getFavorites()
  favorites.push(vehicleId)
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const removeVehicleFromFavorites = (vehicleId: string) => {
  const favorites = getFavorites()

  const index = favorites.indexOf(vehicleId)
  favorites.splice(index, 1)

  localStorage.setItem('favorites', JSON.stringify(favorites))
}


export const Card: React.FC<CardProps> = ({ vehicle }) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(isVehicleFavorite(vehicle.id))

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const router = useRouter()
  const handleClick = () => {
    router.push(`/carros/${vehicle.id}`)
  }

  const handleFavoriteClick = () => {
    if (isVehicleFavorite(vehicle.id)) {
      removeVehicleFromFavorites(vehicle.id);
      setIsFavorite(false)
    }
    else {
      addToVehicleFavorites(vehicle.id);
      setIsFavorite(true)
    }
  }

  React.useEffect(() => {
    setIsFavorite(isVehicleFavorite(vehicle.id))
  }, [])

  return (
    <S.Container>
      <S.Thumb>
        <S.Favorite onClick={handleFavoriteClick} isFavorite={isFavorite}>
          {
            <FavoriteIcon className='favorite-icon' />
          }
        </S.Favorite>

        <Image onClick={handleClick} src={vehicle.photos[0].src} alt={vehicle.photos[0].alt} className="img"
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
