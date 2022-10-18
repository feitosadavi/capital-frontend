import * as React from 'react'
import { Select } from '../types'

export type Filters = {
  anos: number
  marca: string
  modelo: string
  combustivel: string
  cor: string
  categoria: string
}

type ContextProps = {
  filters: Filters | null
  setFilters: React.Dispatch<React.SetStateAction<Filters | null>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  numberOfPages: number,
  setNumberOfPages: React.Dispatch<React.SetStateAction<number>>
  resultsCount: number,
  setResultsCount: React.Dispatch<React.SetStateAction<number>>,
  isMobileFilterOpen: boolean
  toogleMobileFilter: () => void
}

export const AppContext = React.createContext<ContextProps>({} as ContextProps)

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters | null>({} as Filters)
  const [page, setPage] = React.useState<number>(1)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [numberOfPages, setNumberOfPages] = React.useState<number>(1)
  const [resultsCount, setResultsCount] = React.useState<number>(0)

  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState<boolean>(false);
  const toogleMobileFilter = () => setIsMobileFilterOpen(prevState => !prevState);

  React.useEffect(() => { console.log({ loading }) }, [loading])

  return (
    <AppContext.Provider value={{
      filters,
      setFilters,
      loading,
      setLoading,
      page,
      setPage,
      numberOfPages,
      setNumberOfPages,
      resultsCount,
      setResultsCount,
      isMobileFilterOpen,
      toogleMobileFilter
    }}>
      {children}
    </AppContext.Provider>
  )
}