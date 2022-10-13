import * as React from 'react'
import Image from 'next/future/image'
import styled from 'styled-components'
import { Vehicle } from '../../types'
import { useRouter } from 'next/router'


interface HorizontalCard {
  vehicle: Pick<Vehicle, 'id' | 'photos' | 'marca' | 'modelo' | 'preco'>
}

export const HorizontalCard: React.FC<HorizontalCard> = ({ vehicle: { id, photos, marca, modelo, preco } }) => {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const router = useRouter()
  return (
    <ContainerStyled onClick={() => router.push(`/carros/${id}`)}>
      <ThumbStyled>
        <Image
          fill
          alt={photos[0].alt}
          src={photos[0].src}
        />
      </ThumbStyled>
      <ContentStyled>
        <div className="content__header">
          <div className='marca-info'>
            <span>{marca.label}</span>
            <Image
              width={36}
              height={36}
              alt={marca.photo.alt}
              src={marca.photo.src}
            />
          </div >
          <span>{modelo}</span>
        </div>

        <div className="content__footer">
          <span className='preco'>{currencyFormatter.format(preco)}</span>
        </div>
      </ContentStyled>
    </ContainerStyled>
  )
}


const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  width: 25rem;
  height: 10rem;
  margin: auto 10rem auto .2rem;
  gap: 1rem;
  cursor: pointer;
`

const ThumbStyled = styled.div`
  position: relative;
  width: 55%;
  img {
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }

`

const ContentStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10rem;
  padding: .6rem .3rem 1rem 0;

  .marca-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .marca-info span {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
  }

  .preco {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.yellow};
  }

  /* .content__header {
    width: 100%;
  }

  .content__footer {
    width: 100%;
  } */
`