import * as React from 'react'
import { PaginationInfo } from '../types'

export type Filters = {
  anos: number
  marca: string
  modelo: string
  combustivel: string
  cor: string
  categoria: string
}

type ContextProps = {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  numberOfPages: number,
  setNumberOfPages: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = React.createContext<ContextProps>({} as ContextProps)

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>({} as Filters)
  const [page, setPage] = React.useState<number>(1)
  const [numberOfPages, setNumberOfPages] = React.useState<number>(1)

  return (
    <AppContext.Provider value={{
      filters,
      setFilters,
      page,
      setPage,
      numberOfPages,
      setNumberOfPages
    }}>
      {children}
    </AppContext.Provider>
  )
}