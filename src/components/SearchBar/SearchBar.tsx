/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '../Menu';
import { ComprarPageVehicle } from '../../types';
import { AppContext, Filters } from '../../context/app.context';
import { Button, useMediaQuery } from '@mui/material'
import { fetchMeilisearch } from '../../Hookes';
import { ITENS_PER_PAGE } from '../../const';
import { getFavorites } from '../Card';
import { calcPagination } from '../../utils/calcPagination';

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

const filterFavorites = (vehicles: ComprarPageVehicle[], page: number) => {
  const storageFavorites = getFavorites()

  const favoriteVehicles = vehicles.filter(vehicle => storageFavorites.some(favoriteId => favoriteId === vehicle.id))

  console.log(favoriteVehicles.slice(0, ITENS_PER_PAGE));

  const slicedVehicles = page === 1
    ? favoriteVehicles.slice(0, ITENS_PER_PAGE)
    : favoriteVehicles.slice(page - 1 * ITENS_PER_PAGE)

  console.log({ slicedVehicles: favoriteVehicles.slice(8, 0) });

  return { favoriteVehicles: slicedVehicles, totalOfFavoriteVehicles: storageFavorites.length }
}

export const SearchBar: React.FC<Props> = ({ setVehicles, vehicles }) => {
  const context = React.useContext(AppContext)
  const [search, setSearch] = React.useState<string>('')
  const [orderFilter, setOrderFilter] = React.useState<string[]>(['createdAt:desc'])

  const [shouldFilterFavorites, setShouldFilterFavorites] = React.useState<boolean>(false)

  const fetchVehicles = async (offset: number, page?: number) => {
    context.setLoading(true)
    try {
      const filter = setupFilter(context.filters)
      const { data, totalOfVehicles } = await fetchMeilisearch<ComprarPageVehicle>('veiculo', search, {
        filter,
        sort: orderFilter,
        offset,
        limit: shouldFilterFavorites ? undefined : ITENS_PER_PAGE
      })

      const { favoriteVehicles, totalOfFavoriteVehicles } = filterFavorites(data, page ?? 1)

      const { numberOfPages, resultsCount } = calcPagination(shouldFilterFavorites ? totalOfFavoriteVehicles : totalOfVehicles)

      setVehicles(shouldFilterFavorites ? favoriteVehicles : data)

      context.setResultsCount(resultsCount)
      context.setNumberOfPages(numberOfPages)
      context.setPage(page ?? 1)

    } catch (error) {
      console.error(error);
    } finally {
      context.setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchVehicles(0)
  }, [search, context.filters, orderFilter, shouldFilterFavorites])

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
  const handleFilterFavoritesClick = () => {
    setShouldFilterFavorites(prevState => !prevState)
  }

  const isMobile = useMediaQuery('(max-width:950px)')
  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      >
        <IconButton onClick={handleFilterFavoritesClick} sx={{ p: '10px' }} aria-label="menu">
          <FavoriteIcon sx={{ color: `${shouldFilterFavorites ? 'red' : 'white'}` }} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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