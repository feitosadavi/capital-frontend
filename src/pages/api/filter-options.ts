import type { NextApiRequest, NextApiResponse } from 'next'
import qs from 'qs'

import { useQuery } from '../../Hookes/useQuery'
import { GET_FILTER_OPTIONS } from '../../services/queries'
import { Select } from '../../types'
import { setupFilters } from '../../utils'

type Data = Select[]

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const filters = setupFilters(req)

  const {
    marcas,
    modelos,
    combustiveis,
    anos,
    cores,
    categorias
  } = await useQuery(GET_FILTER_OPTIONS, true, { modeloFilters: filters })

  const selects: Select[] = [
    { label: 'Marcas', options: marcas, key: 'marca' },
    { label: 'Modelos', options: modelos, key: 'modelo' },
    { label: 'Combustiveis', options: combustiveis, key: 'combustivel' },
    { label: 'Anos', options: anos, key: 'anos' },
    { label: 'Cores', options: cores, key: 'cor' },
    { label: 'Categorias', options: categorias, key: 'categoria' }
  ]

  res.status(200).json(selects)
}
