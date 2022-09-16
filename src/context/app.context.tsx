import * as React from 'react'
import { Select } from '../types'

type Filters = {
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
}

export const AppContext = React.createContext<ContextProps>({} as ContextProps)

export const AppContextProvider: React.FC<any> = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>({} as Filters)

  return (
    <AppContext.Provider value={{ filters, setFilters }}>
      {children}
    </AppContext.Provider>
  )
}