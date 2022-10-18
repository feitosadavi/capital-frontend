import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'


import { Card, Filters, Loading, MobileFilters, Pagination, SearchBar } from '../../components'
import { ComprarPageVehicle, Select } from '../../types'

import * as S from '../../styles/comprar.styles'
import { AppContext } from '../../context/app.context'
import { useMediaQuery } from '@mui/material'
import { setupMeiliAttrs } from '../../Hookes'
import { fetchSelects } from '../../services/fetchSelects'

interface Props {
  _selects: Select[]
  _vehicles: ComprarPageVehicle[]
  resultsCount: number
  numberOfPages: number
  // _vehicles: ComprarPageVehicle[]
}

const Comprar: NextPage<Props> = ({
  _selects,

}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>([])

  React.useEffect(() => {
    const query = context.filters?.marca ? `marca=${context.filters.marca}` : ''

    fetchSelects(query)
      .then(res => setSelects(res))
  }, [context.filters?.marca])



  const isMobile = useMediaQuery('(max-width:800px)')

  const clearFilters = () => context.setFilters(null)

  const renderSelects = () => <>
    <S.ClearFiltersBtn onClick={clearFilters}>LIMPAR FILTROS<span>X</span></S.ClearFiltersBtn>
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
              {
                vehicles.length >= 1
                  ?
                  vehicles.map((vehicle) => (
                    <Card key={vehicle.id} vehicle={vehicle} />
                  ))
                  : 'Não foram encontrados resultados.'
              }
            </S.Grid>

            <Pagination />
          </S.GridContainer>
        </S.Content>
      </S.Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await setupMeiliAttrs('veiculos')
  // const { data: _vehicles, resultsCount, numberOfPages } = await fetchMeilisearch<ComprarPageVehicle>('veiculo', '', {})
  const _selects = await fetchSelects()
  // const { data: _vehicles, resultsCount: _resultsCount } = 

  const props = { _selects }

  return {
    props, // will be passed to the page component as props
  }
}

export default Comprar