import { MeiliSearchParams } from '@meilisearch/instant-meilisearch'
import { ITENS_PER_PAGE } from '../const'
import { searchClient } from '../services/searchClient'
import { Photo } from '../types'

type Result<DataType = any> = {
  resultsCount: number,
  numberOfPages: number,
  data: DataType
}

const setupFields = <T = any> (elements: any[], index: string): T[] => elements.map(element => {
  const id = sanitizeId(element.id, index)
  const labels = getLabelFromField(element)

  if (element.photos) {
    const photos = getPhotosInfo(element.photos)
    return { ...labels, photos, id }
  }

  return { ...labels, id }
})

const sanitizeId = (id: string, index: string) => id?.replace(`${index}-`, '')

const getPhotosInfo = (photos: any[]): Photo[] => photos.map(({ url, alternativeText }) => ({ src: url, alt: alternativeText }))

const getLabelFromField = (data: any) => {
  const fields: any = {}
  for (const key of Object.keys(data)) {
    if (key === 'marca') {
      fields[key] = {
        label: data[key]?.label,
        photo: ''
        // '{
        //   src: data[key]?.photo.url ?? \
        //   alt: data[key]?.photo.alternativeText \
        // }'
      }
    } else {
      fields[key] = data[key]?.label ?? data[key]
    }
  }
  return fields
}

export const setupMeiliAttrs = async (index: string) => {
  const veiculoIndex = searchClient.index(index)

  await veiculoIndex.updateFilterableAttributes(['anos', 'ano', 'cambio', 'categoria', 'combustivel', 'cor', 'marca', 'modelo'])
  await veiculoIndex.updateSortableAttributes(['preco', 'createdAt'])
  // await veiculoIndex.attr
}

export const fetchMeilisearch = async <DataType = any> (index: string, search: string, params: MeiliSearchParams): Promise<Result<DataType[]>> => {
  setupMeiliAttrs(index)
  const veiculoIndex = searchClient.index(index)
  const res = await veiculoIndex.search<DataType>(search, {
    ...params,
    limit: params.limit ?? ITENS_PER_PAGE,
  })

  const data = res.hits.length >= 1 ? setupFields<DataType>(res.hits, index) : []

  return {
    resultsCount: res.estimatedTotalHits,
    numberOfPages: Math.round(Math.ceil(res.estimatedTotalHits / ITENS_PER_PAGE)),
    data
  }
}
