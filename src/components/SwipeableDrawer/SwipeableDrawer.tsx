import * as React from 'react';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import MUISwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from 'styled-components';

const drawerBleeding = 56;

const Root = styled.div(({ theme }) => ({
  height: '100rem',
  backgroundColor: theme.colors.primary
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.secondary
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.colors.secondary,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export const SwipeableDrawer: React.FC<any> = (props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Root>

    </Root>
  );
}
