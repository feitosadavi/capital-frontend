import React from 'react'
import * as S from './WhatsappLink.styles'
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import { PHONE } from '../../const';

export const WhatsappLink = () => {
  return (
    <S.WhatsappLink href='https://api.whatsapp.com/send?phone=556137745656' target='__blank__'>
      <span className='label'>
        <WhatsappIcon /> Whatsapp
      </span>
      {PHONE}
    </S.WhatsappLink>
  )
}
