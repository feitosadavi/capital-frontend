import { ITENS_PER_PAGE } from '../const'

export const calcPagination = (totalOfItems: number) => {

  return {
    numberOfPages: Math.round(Math.ceil(totalOfItems / ITENS_PER_PAGE)),
    resultsCount: totalOfItems
  }
}