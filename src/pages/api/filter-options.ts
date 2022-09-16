import type { NextApiRequest, NextApiResponse } from 'next'
import qs from 'qs'

import { useQuery } from '../../Hookes/useQuery'
import { GET_FILTER_OPTIONS } from '../../services/queries'
import { Select } from '../../types'

type Data = Select[]

const transformToStrapiFilter = (filters: any) => {
  const strapiFilters = {} as any
  for (const key of Object.keys(filters)) {
    strapiFilters[key] = { label: { eq: filters[key] } }
  }

  return strapiFilters
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.query.filters);


  const queryFilters = req.query.filters ? qs.parse(req.query.filters as string) : {}
  const filters = transformToStrapiFilter(queryFilters)
  console.log({ filters });


  const { marcas,
    modelos,
    combustiveis,
    anos,
    cores,
    categorias } = await useQuery(GET_FILTER_OPTIONS, true, { modeloFilters: filters })

  const selects: Select[] = [
    { label: 'Marcas', options: marcas, key: 'marca' },
    { label: 'Modelos', options: modelos, key: 'modelo' },
    { label: 'Combustiveis', options: combustiveis, key: 'combustivel' },
    { label: 'Anos', options: anos, key: 'anos' },
    { label: 'Cores', options: cores, key: 'cor' },
    { label: 'Categorias', options: categorias, key: 'categoria' }
  ]

  console.log({ modelos });


  res.status(200).json(selects)
}
