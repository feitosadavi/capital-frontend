import React from 'react'
import Button from '@mui/material/Button';
import MUIMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import * as S from './Menu.styles'

interface Props {
  setOrderFilter: React.Dispatch<React.SetStateAction<string[]>>
}

type SortOption = {
  label: string
  field: string
  order: string
}

const sortOptions: SortOption[] = [{
  label: 'Mais Recentes',
  field: 'createdAt',
  order: 'desc'
}, {
  label: 'Mais Antigos',
  field: 'createdAt',
  order: 'asc'
}, {
  label: 'Maior Preço',
  field: 'preco',
  order: 'desc'
}, {
  label: 'Menor Preço',
  field: 'preco',
  order: 'asc'
}]

export const Menu: React.FC<Props> = ({ setOrderFilter }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [label, setLabel] = React.useState<string>('Mais recentes')

  const handleClose = ({ label: _label, field, order }: SortOption) => {
    setAnchorEl(null);

    setLabel(_label);

    const orderFilter = `${field}:${order}`
    setOrderFilter([orderFilter])
  };

  return (
    <S.Container>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Ordenar por: {label}
      </Button>

      <MUIMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
      >
        {
          sortOptions.map(sortOption => (
            <MenuItem key={sortOption.label} onClick={() => handleClose(sortOption)}>{sortOption.label}</MenuItem>
          ))
        }
      </MUIMenu>
    </S.Container>
  );
}
