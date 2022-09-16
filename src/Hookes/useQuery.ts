import { gql, DocumentNode } from '@apollo/client'
import client from '../services/api'

export const useQuery = async (query: DocumentNode, setup?: boolean, variables?: Record<any, any>) => {
  const { data } = await client.query({
    query,
    variables
  })
  if (setup) {
    const gatheredFields = setupFields(data)
    return gatheredFields
  }
  return data
}

const setupFields = (obj: any) => {
  const newData: any = {}
  for (const key of Object.keys(obj)) {
    const optionsArr = []
    for (const value of obj[key].data) {
      optionsArr.push(value.attributes.label)
    }
    newData[key] = optionsArr
  }
  return newData
}