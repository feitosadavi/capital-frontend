import { NextApiRequest } from 'next'
import qs from 'qs'

const transformToStrapiFilter = (filters: any) => {
  try {
    const strapiFilters = {} as any

    for (const key of Object.keys(filters)) {
      if (filters[key] !== '*') {
        strapiFilters[key] = { label: { eq: filters[key] } }
      }
    }
    return strapiFilters
  } catch (error) {
    console.log('erro');

  }
}

export const setupFilters = (req: NextApiRequest) => {
  try {
    const queryParams = req.query
    if (queryParams) {
      return transformToStrapiFilter(queryParams)
    }
    return {}
  } catch (error) {
    console.log('erro');

  }
}