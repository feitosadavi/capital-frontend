import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Card, Filters, MobileFilters, Pagination, SearchBar } from '../../components'
import { request } from '../../services/request'
import { ComprarPageVehicle, Select } from '../../types'

import * as S from '../../styles/comprar.styles'
import { AppContext } from '../../context/app.context'
import { useMediaQuery } from '@mui/material'
import { fetchMeilisearch } from '../../Hookes'


interface Props {
  _vehicles: ComprarPageVehicle[]
  _selects: Select[]
  _resultsCount: number
}

const Home: NextPage<Props> = ({
  _vehicles,
  _selects,
  _resultsCount
}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>(_vehicles)

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      request<Select[]>(`http://localhost:1337/api/filters?marca=${context.filters.marca}`)
        .then(_selects => setSelects(_selects))
        .catch(console.log)
    } else {
      context.setResultsCount(_resultsCount)
      isFirstMount.current = false
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters.marca])

  const isMobile = useMediaQuery('(max-width:800px)')

  const renderSelects = () =>
    selects.map(select => (
      <Filters key={select.label} select={select} />
    ))

  return (
    <>
      <Head>
        <title>Capital | Comprar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.Main>
        {
          !isMobile
            ? <S.Filters>{renderSelects()}</S.Filters>
            : <MobileFilters>{renderSelects()}</MobileFilters>
        }


        <S.Content>
          <SearchBar setVehicles={setVehicles} vehicles={vehicles} />
          <S.GridContainer>
            <S.Grid>
              {vehicles.map((vehicle) => (
                <Card key={vehicle.cor} vehicle={vehicle} />
              ))}
            </S.Grid>

            <Pagination />
          </S.GridContainer>
        </S.Content>
      </S.Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const _selects = await request<Select[]>('http://localhost:1337/api/filters')

  const { data: _vehicles, resultsCount: _resultsCount } = await fetchMeilisearch<ComprarPageVehicle>('veiculo', '', {
    sort: ['createdAt:desc'],
    offset: 0
  })

  const props: Props = { _vehicles, _selects, _resultsCount }
  console.log({ _selects });

  return {
    props, // will be passed to the page component as props
  }
}

export default Home