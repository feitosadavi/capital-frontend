import * as React from 'react'
import Img from 'next/future/image'
import styled from 'styled-components'
import { Vehicle } from '../../types'
import { useRouter } from 'next/router'

interface HorizontalCard {
  vehicle: Pick<Vehicle, 'id' | 'photos' | 'marca' | 'modelo' | 'preco'>
}

type ImgDimensions = {
  height: number
  width: number
}

const loadImg = (setImgDimensions: React.Dispatch<React.SetStateAction<ImgDimensions>>, imgUrl: string) => {
  const img = new Image();
  img.src = imgUrl;

  img.onload = () => {
    console.log({ img });

    setImgDimensions({
      height: img.height,
      width: img.width
    });
  };
  img.onerror = (err: any) => {
    console.log("img error");
    console.error(err);
  };
};

export const HorizontalCard: React.FC<HorizontalCard> = ({ vehicle: { id, photos, marca, modelo, preco } }) => {
  const [imgDimensions, setImgDimensions] = React.useState<ImgDimensions>({} as ImgDimensions);

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const router = useRouter()
  const img = React.useRef<any>()

  React.useEffect(() => {
    loadImg(setImgDimensions, photos[0].src);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!imgDimensions.width) return <></>
  return (
    <ContainerStyled onClick={() => router.push(`/carros/${id}`)}>
      <ThumbStyled>
        <Img
          fill
          className={imgDimensions?.width <= 1200 ? 'img-1200width' : ''}
          alt={photos[0].alt}
          src={photos[0].src}
        />

      </ThumbStyled>
      <ContentStyled>
        <div className="content__header">
          <div className='marca-info'>
            <span>{marca.label}</span>
            <Img
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
  display: grid;
  grid-template-columns: 70fr 30fr;
  gap: .5rem;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  width: 21rem;
  height: 10rem;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    scale: .92;
  }

  @media screen and (max-width: 1000px) {
    scale: .9;
  }

  @media screen and (min-width: 1000px) {
    scale: .78;
  }

  @media screen and (min-width: 1400px) {
    scale: .79;
  }

  @media screen and (min-width: 1500px) {
    scale: .9;
  }

  @media screen and (min-width: 1610px) {
    scale: 1;
  }
`

const ThumbStyled = styled.div`
  position: relative;
  width: 100%;

  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    object-fit: cover;
  }
  
  .img-1200width {
    object-position: -60px;
  }

`

const ContentStyled = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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