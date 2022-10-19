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
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: .5rem;
  width: 20rem;
  height: 10rem;
  gap: 1rem;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    scale: .9;
  }
`

const ThumbStyled = styled.div`
  position: relative;
  width: 60%;

  img {
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    object-fit: cover;
    zoom: 1000%;
  }
  
  .img-1200width {
    object-position: -72px;
  }

`

const ContentStyled = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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