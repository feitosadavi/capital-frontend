import React from 'react'
import * as S from './WhatsappLink.styles'
import WhatsappIcon from '@mui/icons-material/WhatsApp';

export const WhatsappLink = () => {
  return (
    <S.WhatsappLink href='https://api.whatsapp.com/send?phone=556137745656' target='__blank__'>
      <span className='label'>
        <WhatsappIcon /> Whatsapp
      </span>
      55 (61) 37745656
    </S.WhatsappLink>
  )
}
