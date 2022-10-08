import React from 'react'
import { Logo } from '../Logo'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import * as S from './Footer.styles'
import { useMediaQuery } from '@mui/material'
import { EMAIL, PHONE } from '../../const'

export const Footer = () => {

  const icons = [{
    element: <EmailIcon />,
    label: EMAIL
  }, {
    element: <PhoneIcon />,
    label: `+${PHONE}`,
    onClick: () => window.open('https://api.whatsapp.com/send?phone=556137745656', '__target__')
  }]

  const social = [{
    element: <FacebookIcon />,
    label: 'Facebook',
    href: 'https://facebook.com/capitalveiculosdf'
  }, {
    element: <InstagramIcon />,
    label: 'Instagram',
    href: 'https://instagram.com/capitalveiculosdf'
    }]

  const Funcionamento = () => (
    <S.Funcionamento>
      <span>{isMobile ? 'Atendimento' : 'Horário de Funcionamento'}</span>
      <div className='horarios'>
        <div className="funcionamento_info">
          <span className='funcionamento_periodo'>Seg - Sex</span>
          <span>08:00 - 18:00</span>
        </div>
        <div className="funcionamento_info">
          <span className='funcionamento_periodo'>Sábados</span>
          <span>08:00 - 17:00</span>
        </div>
      </div>
    </S.Funcionamento>
  )

  const isMobile = useMediaQuery('(max-width: 1000px)')
  return (
    <footer>
      <S.Footer>
        {isMobile &&
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
            <Funcionamento />
          </div>
        }
        <S.Wrapper>
          <div>
            <div className="info">

              <span className='icon'><LocationOnIcon /></span>
              <span>QNE 01 LOJA 13 LOJA 1 <br /> Taguantinga, Brasília - DF</span>
            </div>
            {
              icons.map(({ element, label, onClick }) => (
                <div onClick={onClick} key={label} className="info">
                  <span className='icon'>{element}</span>
                  <span>{label}</span>
                </div>
              ))
            }
          </div>

          {!isMobile && <Logo />}
          {!isMobile && <Funcionamento />}


          <div className='social-networks'>
            <span className='social-networks__title'>Nossas redes</span>
            <div>
              {
                social.map(({ element, label, href }) => (
                  <div
                    style={{ cursor: 'pointer' }}
                    key={label}
                    className="info"
                    onClick={() => window.open(href, '__blank__')}
                    data-href={href}
                  >
                    <span className='icon'>{element}</span>
                    <span>{label}</span>
                  </div>
                ))
              }
            </div>
          </div>

        </S.Wrapper>
        <span style={{ padding: '.5rem', textAlign: 'center', fontSize: '12pt' }}>
          Todos os direitos reservados Capital Veiculos | 47.342.318/0001-14
          <br />
          Feito por <a target='__blank__' href="https://github.com/feitosadavi">Davi Feitosa</a>
        </span>
      </S.Footer>
    </footer>
  )
}
