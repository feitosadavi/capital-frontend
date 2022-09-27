import React from 'react'
import { Logo } from '../Logo'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import * as S from './Footer.styles'
import { Divider } from '@mui/material'

export const Footer = () => {

  const icons = [{
    element: <LocationOnIcon />,
    label: 'Taguantinga Norte, Brasília - DF'
  }, {
    element: <EmailIcon />,
    label: 'comercial@capitalveiculosdf.com'
  }, {
    element: <PhoneIcon />,
    label: '+55 (61) 33745656'
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

  return (
    <footer>
      <S.Footer>
        <S.Wrapper>
          <div>
            {
              icons.map(({ element, label }) => (
                <div key={label} className="info">
                  <span className='icon'>{element}</span>
                  <span>{label}</span>
                </div>
              ))
            }
          </div>
          <div className='social-networks'>
            <span className='social-networks__title'>Nossas redes</span>
            <span className='social-networks__divider'></span>
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
        <span style={{ padding: '.5rem', textAlign: 'center' }}>
          Todos os direitos reservados Capital Veiculos®
          | Feito por <a target='__blank__' href="https://github.com/feitosadavi">Davi Feitosa</a>
        </span>
      </S.Footer>
    </footer>
  )
}
