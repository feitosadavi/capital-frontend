
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Card, SearchBar } from '../../components'

import * as S from './comprar.styles'


const Home: NextPage = ({ vehicles }: any) => {
  return (
    <>
      <Head>
        <title>Capital | Comprar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.Main>
        <S.Filters>Filtros</S.Filters>
        <S.Content>
          <SearchBar />
          <S.GridContainer>
            <S.Grid>
              {new Array(10).fill(10).map((_, i) => (
                <Card key={i} vehicle={vehicles} />
              ))}
            </S.Grid>
          </S.GridContainer>
        </S.Content>
      </S.Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:1337/api/veiculos?populate=*`)
  // console.log(res);

  const apiData = (await res.json()).data[0]

  if (!apiData) {
    return {
      notFound: true,
    }
  }

  // console.log({ vehicles, apiVehicles });

  const arrangeData = (fields: string[], data: any) => {
    const arrangedData: Record<any, any> = {}
    fields.map((field: string) => {
      try {
        const label: string = data[field].data.attributes.label
        arrangedData[field] = label
      } catch (error) {
        console.log(field);

      }
    })
    return arrangedData
  }

  const getPhotosData = (photos: any) => photos.map(({ attributes: { url, alternativeText } }: any) => ({ src: url, alt: alternativeText }))


  const apiVehiclesRaw = { id: apiData.id, ...apiData.attributes }

  const photos = getPhotosData(apiVehiclesRaw.photos.data)
  console.log({ photos });


  const arrangedData = arrangeData(['marca', 'modelo', 'anos', 'combustivel', 'cambio', 'categoria', 'cor'], apiVehiclesRaw)

  const vehicles = { ...apiVehiclesRaw, ...arrangedData, photos }
  console.log(vehicles);


  return {
    props: { vehicles }, // will be passed to the page component as props
  }
}

export default Home