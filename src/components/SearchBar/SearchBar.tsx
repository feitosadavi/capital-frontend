/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '../Menu';
import { MeiliSearch } from 'meilisearch'
import { ComprarPageVehicle } from '../../types';
import { AppContext, Filters } from '../../context/app.context';

interface Props {
  setVehicles: React.Dispatch<React.SetStateAction<ComprarPageVehicle[]>>
  vehicles: ComprarPageVehicle[]
}

const setupPhotos = (photos: any) => photos.map(({ url, alternativeText }: any) => ({ src: url, alt: alternativeText }))

const setupFields = (apiVehicles: any) => {
  const vehiclesArray: ComprarPageVehicle[] = []
  for (const apiVehicle of apiVehicles) {
    const setupedVehicleData: any = {}
    for (const key of Object.keys(apiVehicle)) {
      setupedVehicleData[key] = (apiVehicle[key]?.label || apiVehicle[key])
    }
    const setupedPhotos = setupPhotos(setupedVehicleData.photos)
    vehiclesArray.push({ ...setupedVehicleData, photos: setupedPhotos })
  }
  return vehiclesArray
}

const setupFilter = (filters: Filters) => {
  let query = ''
  const keys = Object.keys(filters)
  for (const [index, key] of keys.entries()) {
    const currentFilter = (filters as any)[key]
    if (currentFilter !== '*') {
      query += ` ${index !== 0 ? 'AND' : ''} ${key}.label='${currentFilter}'`
    }
  }
  return query
}

export const SearchBar: React.FC<Props> = ({ setVehicles, vehicles }) => {
  const context = React.useContext(AppContext)
  const [search, setSearch] = React.useState<string>('')

  const searchClient = new MeiliSearch({
    host: 'http://localhost:7700'
  })

  const fetchVehicles = async () => {
    const veiculo = searchClient.index('veiculo')

    const filter = setupFilter(context.filters)

    const res = await veiculo.search(search, { filter })

    const _vehicles = setupFields(res.hits)
    setVehicles(_vehicles)
  }

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    } else {
      fetchVehicles()
    }
  }, [search, context.filters])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <FavoriteIcon />
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

        <div style={{ padding: '.5rem' }}>{vehicles.length} veículo{vehicles.length !== 1 && 's'}</div>
      </Paper>

      <Menu />
    </>
  );
}