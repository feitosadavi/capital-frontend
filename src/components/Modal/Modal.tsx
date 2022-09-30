import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import ModalMUI from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import * as S from './Modal.styles'
import { useMediaQuery } from '@mui/material';

interface ModalProps {
  label: string
  content: JSX.Element
}

export const Modal: React.FC<ModalProps> = ({ label, content }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery('(max-width: 1000px)')
  return (
    <div>
      <S.ModalButton onClick={handleOpen}>{label}</S.ModalButton>
      <ModalMUI
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <S.ModalContainer>
            {isMobile &&

              <S.ModalButton onClick={handleClose}><CloseOutlinedIcon /></S.ModalButton>
            }

            {content}
          </S.ModalContainer>
        </Fade>
      </ModalMUI>
    </div>
  );
}