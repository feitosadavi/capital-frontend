import React from 'react'
import * as S from './WhatsappBtn.styles'
import WhatsappIcon from '@mui/icons-material/WhatsApp';

export const WhatsappBtn: React.FC = () => {

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=556137745656', '__target__')
  }

  return (
    <S.WhatsappBtn onClick={handleClick}>
      <span className='label'>
        <WhatsappIcon /> Quero Mais Informações
      </span>
    </S.WhatsappBtn>
  )
}
