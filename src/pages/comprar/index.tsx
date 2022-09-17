import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import qs from 'qs'

import { Card, Filters, SearchBar } from '../../components'
import { request } from '../../services/request'
import { ComprarPageVehicle, Select } from '../../types'

import * as S from './comprar.styles'
import { AppContext } from '../../context/app.context'


interface Props {
  _vehicles: ComprarPageVehicle[]
}

const Home: NextPage<Props> = ({
  _vehicles,
}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>([])
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>(_vehicles)

  React.useEffect(() => {
    const filters = qs.stringify(context.filters)
    const url = `http://localhost:3000/api/vehicles?${filters}`

    request<ComprarPageVehicle[]>(url)
      .then(reqVehicles => {
        setVehicles(reqVehicles)
      })
      .catch(console.log)
  }, [context.filters])

  React.useEffect(() => {
    const filters = qs.stringify(context.filters)
    request<Select[]>(`http://localhost:3000/api/filter-options?${filters}`)
      .then(_selects => setSelects(_selects))
      .catch(console.log)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters.marca])

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
              {vehicles.map((vehicle) => (
                <Card key={vehicle.cor} vehicle={vehicle} />
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

  const _vehicles = await request<ComprarPageVehicle[]>('http://localhost:3000/api/vehicles')

  const props: Props = { _vehicles }

  return {
    props, // will be passed to the page component as props
  }
}

export default Home