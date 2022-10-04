import * as React from 'react'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr'
import { toast } from 'react-toastify'

import { Card, Filters, MobileFilters, Pagination, SearchBar } from '../../components'
import { ComprarPageVehicle, Select, Vehicle } from '../../types'

import * as S from '../../styles/comprar.styles'
import { AppContext } from '../../context/app.context'
import { useMediaQuery } from '@mui/material'
import { fetchMeilisearch, setupMeiliAttrs } from '../../Hookes'
import { fetchSelects } from '../../services/fetchSelects'
import { request } from '../../services/request'

interface Props {
  _selects: Select[]
  // _vehicles: ComprarPageVehicle[]
}

const Comprar: NextPage<Props> = ({
  _selects,
}) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)
  const [vehicles, setVehicles] = React.useState<ComprarPageVehicle[]>([])


  // const fetchVehicles = async () => {
  //   const { data, meta } = await request('/api/veiculos?populate[0]=marca.photo,modelo,anos,cor,categoria,photos')
  //   console.log({ data });

  //   setVehicles(data ?? [])
  //   return { ok: true }
  // }

  // const { data: res, error } = useSWR<boolean>('', fetchVehicles)

  // if (error) {
  //   toast.error('Houve um erro durante a pesquisa, tente novamente!')
  // }

  // console.log(res);


  // React.useEffect(() => {
  //   setFiltersHasBeenFired(true)
  // }, [context.filters])

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      const query = context.filters?.marca ? `marca=${context.filters.marca}` : ''
      fetchSelects(query)
        .then(res => setSelects(res))
    } else {
      isFirstMount.current = false
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <Card key={vehicle.cor} vehicle={vehicle} />
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

  const _selects = await fetchSelects()
  // const { data: _vehicles, resultsCount: _resultsCount } = 



  const props: Props = { _selects }

  return {
    props, // will be passed to the page component as props
  }
}

export default Comprar