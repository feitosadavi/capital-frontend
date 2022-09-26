import React from 'react'
import { Logo } from '../Logo'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import * as S from './Footer.styles'

export const Footer = () => {

  const icons = [{
    element: <LocationOnIcon />,
    label: 'Taguantinga Norte, Brasília - DF'
  }, {
    element: <EmailIcon />,
    label: 'comercial@capitalveiculosdf.com'
  }, {
    element: <PhoneIcon />,
    label: '+55 (61) 33366520'
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
          <S.Left>
            {
              icons.map(({ element, label }) => (
                <div key={label} className="info">
                  <span className='icon'>{element}</span>
                  <span>{label}</span>
                </div>
              ))
            }
          </S.Left>
          <S.Right>
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
          </S.Right>
        </S.Wrapper>
        <span style={{ padding: '.5rem' }}>
          Todos os direitos reservados Capital Veiculos®
          | Feito por <a target='__blank__' href="https://github.com/feitosadavi">Davi Feitosa</a>
        </span>
      </S.Footer>
    </footer>
  )
}
