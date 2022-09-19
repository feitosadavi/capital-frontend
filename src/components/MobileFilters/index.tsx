import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import { AppContext } from '../../context/app.context';

export const MobileFilters: React.FC<any> = ({ children }) => {
  const context = React.useContext(AppContext)

  return (
    <>
      <Drawer
        anchor={'right'}
        open={context.isMobileFilterOpen}
        onClose={context.toogleMobileFilter}
      >
        {children}
      </Drawer>
    </>
  );
}