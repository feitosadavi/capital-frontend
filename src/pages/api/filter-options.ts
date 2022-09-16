import type { NextApiRequest, NextApiResponse } from 'next'
import { useQuery } from '../../Hookes/useQuery'
import { GET_FILTER_OPTIONS } from '../../services/queries'
import { Select } from '../../types'

type Data = Select[]

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { marcas,
    modelos,
    combustiveis,
    anos,
    cores,
    categorias } = await useQuery(GET_FILTER_OPTIONS, true)

  const selects: Select[] = [
    { label: 'Marcas', options: marcas },
    { label: 'Modelos', options: modelos },
    { label: 'Combustiveis', options: combustiveis },
    { label: 'Anos', options: anos },
    { label: 'Cores', options: cores },
    { label: 'Categorias', options: categorias }
  ]

  res.status(200).json(selects)
}
