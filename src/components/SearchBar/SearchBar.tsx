/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '../Menu';
import { ComprarPageVehicle } from '../../types';
import { AppContext, Filters } from '../../context/app.context';
import { Button, useMediaQuery } from '@mui/material'
import { fetchMeilisearch } from '../../Hookes';
import { ITENS_PER_PAGE } from '../../const';

interface Props {
  setVehicles: React.Dispatch<React.SetStateAction<ComprarPageVehicle[]>>
  vehicles: ComprarPageVehicle[]
}


const setupFilter = (filters: Filters | null) => {
  if (filters) {
    let query = ''
    const keys = Object.keys(filters)
    for (const key of keys) {
      const currentFilter = (filters as any)[key]
      if (currentFilter !== '*') {
        const isQueryEmpty = query.length === 0;
        query += ` ${isQueryEmpty ? '' : 'AND'} ${key}.label='${currentFilter}'`
      }
    }
    return query
  }
  return ''
}

export const SearchBar: React.FC<Props> = ({ setVehicles, vehicles }) => {
  const context = React.useContext(AppContext)
  const [search, setSearch] = React.useState<string>('')
  const [orderFilter, setOrderFilter] = React.useState<string[]>(['createdAt:desc'])

  const fetchVehicles = async (offset: number, page?: number) => {
    const filter = setupFilter(context.filters)

    const { data, resultsCount, numberOfPages } = await fetchMeilisearch<ComprarPageVehicle>('veiculo', search, {
      filter,
      sort: orderFilter,
      offset
    })

    setVehicles(data)

    // pagination
    context.setResultsCount(resultsCount)
    context.setNumberOfPages(numberOfPages)
    context.setPage(page ?? 1)
  }

  React.useEffect(() => {
    fetchVehicles(0)
  }, [search, context.filters, orderFilter])

  const isFirstMount2 = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount2.current) {

      const offset = (ITENS_PER_PAGE * (context.page - 1)) // multiplica pela pagina anterior

      fetchVehicles(offset, context.page)
    } else {
      isFirstMount2.current = false
    }
  }, [context.page])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

  const isMobile = useMediaQuery('(max-width:950px)')
  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      >
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
          <FavoriteIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
        <InputBase
          onChange={handleChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="O que você deseja buscar?"
          inputProps={{ 'aria-label': 'search cars' }}
          fullWidth
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <div style={{ padding: '.5rem' }}>{context.resultsCount} veículo{context.resultsCount !== 1 && 's'}</div>
      </Paper>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Menu setOrderFilter={setOrderFilter} />
        {isMobile && <Button onClick={context.toogleMobileFilter}><TuneIcon sx={{ color: 'white' }} /></Button>}
      </div>
    </>
  );
}