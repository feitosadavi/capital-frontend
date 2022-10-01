import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Card, Filters, MobileFilters, Pagination, SearchBar } from '../../components'
import { request } from '../../services/request'
import { ComprarPageVehicle, Select } from '../../types'

import * as S from '../../styles/comprar.styles'
import { AppContext } from '../../context/app.context'
import { useMediaQuery } from '@mui/material'
import { fetchMeilisearch, setupMeiliAttrs } from '../../Hookes'
import { fetchSelects } from '../../services/fetchSelects'

interface Props {
  _vehicles: ComprarPageVehicle[]
  _selects: Select[]
  _resultsCount: number
}

const Comprar: NextPage<Props> = ({
  _selects,
  _resultsCount
}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>([])

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      const query = context.filters?.marca ? `marca=${context.filters.marca}` : ''
      fetchSelects(query)
        .then(res => setSelects(res))
    } else {
      context.setResultsCount(_resultsCount)
      isFirstMount.current = false
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters?.marca])

  const isMobile = useMediaQuery('(max-width:800px)')

  const clearFilters = () => context.setFilters(null)

  const renderSelects = () => <>
    <S.ClearFiltersBtn onClick={clearFilters}><span>X</span>LIMPAR FILTROS</S.ClearFiltersBtn>
    {selects.map(select => <Filters key={select.label} select={select} />)}
  </>

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
  await setupMeiliAttrs('veiculos')

  const _selects = await fetchSelects()
  const { data: _vehicles, resultsCount: _resultsCount } = await fetchMeilisearch<ComprarPageVehicle>('veiculo', '', {
    offset: 0
  })



  const props: Props = { _vehicles, _selects, _resultsCount }

  return {
    props, // will be passed to the page component as props
  }
}

export default Comprar