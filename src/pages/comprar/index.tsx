
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Card, Filters, SearchBar } from '../../components'
import { request } from '../../services/request'
import { ComprarPageVehicle, Select } from '../../types'

import * as S from './comprar.styles'


interface Props {
  vehicles: ComprarPageVehicle[]
  selects: Select[]
}

const Home: NextPage<Props> = ({
  vehicles,
  selects
}) => {

  return (
    <>
      <Head>
        <title>Capital | Comprar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.Main>
        <S.Filters>
          {selects.map(select => (
            <Filters key={select.label} select={select} />
          ))}
        </S.Filters>

        <S.Content>
          <SearchBar />
          <S.GridContainer>
            <S.Grid>
              {new Array(10).fill(10).map((_, i) => (
                <Card key={i} vehicle={vehicles[0]} />
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

  const apiData = (await res.json()).data[0]

  if (!apiData) {
    return {
      notFound: true,
    }
  }

  const selects = await request<Select[]>('http://localhost:3000/api/filter-options')
  const vehicles = await request<ComprarPageVehicle[]>('http://localhost:3000/api/vehicles')

  const props: Props = { vehicles, selects }

  return {
    props, // will be passed to the page component as props
  }
}

export default Home