import React from 'react'
import { Logo } from '../Logo'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import * as S from './Footer.styles'
import { useMediaQuery } from '@mui/material'

export const Footer = () => {

  const icons = [{
    element: <LocationOnIcon />,
    label: 'Taguantinga Norte, Brasília - DF'
  }, {
    element: <EmailIcon />,
    label: 'comercial@capitalveiculosdf.com'
  }, {
    element: <PhoneIcon />,
    label: '+55 (61) 37745656',
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
      <span>Seg - Sex</span>
      <span>08:00 - 17:00</span>
    </S.Funcionamento>
  )

  const isMobile = useMediaQuery('(max-width: 500px)')
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
            {
              icons.map(({ element, label, onClick }) => (
                <div onClick={onClick} key={label} className="info">
                  <span className='icon'>{element}</span>
                  <span>{label}</span>
                </div>
              ))
            }
          </div>
          {!isMobile && <>
            <Logo />
            <Funcionamento />
          </>}
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
          Todos os direitos reservados Capital Veiculos <br />
          Feito por <a target='__blank__' href="https://github.com/feitosadavi">Davi Feitosa</a>
        </span>
      </S.Footer>
    </footer>
  )
}
