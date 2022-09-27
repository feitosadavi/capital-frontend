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
import { CMS } from '../../host'


const fetchSelects = async (params?: string): Promise<Select[]> => {
  try {
    const _selects = await request<Select[]>(`${CMS}/api/filters?${params}`)

    const ano = _selects.filter(_select => _select.key === 'ano')[0]
    const anos = { ...ano, key: 'anos' }

    _selects.splice(_selects.indexOf(ano), 1)
    _selects.push(anos)
    return _selects
  } catch (error) {
    console.log(error);
    return []
  }
}

interface Props {
  _vehicles: ComprarPageVehicle[]
  _selects: Select[]
  _resultsCount: number
}

const Home: NextPage<Props> = ({
  _selects,
  _resultsCount
}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>([])

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      fetchSelects(`marca=${context.filters?.marca}`)
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

export default Home