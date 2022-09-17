import { NextApiRequest } from 'next'
import qs from 'qs'

const transformToStrapiFilter = (filters: any) => {
  const strapiFilters = {} as any
  for (const key of Object.keys(filters)) {
    strapiFilters[key] = { label: { eq: filters[key] } }
  }

  return strapiFilters
}

export const setupFilters = (req: NextApiRequest) => {
  const queryStringFilters = req.query.filters as string
  if (queryStringFilters) {
    const parsedFilters = qs.parse(queryStringFilters)
    return transformToStrapiFilter(parsedFilters)
  }
  return {}
}