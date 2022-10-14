import * as React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Testemonial as TestemonialType } from '../../types/Testemonial'

import * as S from './Testemonial.styles'
import Image from 'next/future/image'

interface TestemonialProps {
  testemonial: TestemonialType
}

export const Testemonial: React.FC<TestemonialProps> = ({ testemonial: { estrelas, titulo, descricao, photo, nome, redeSocial } }) => {
  return (
    <S.Container>
      <S.Header>
        <span>
          {
            Array(5).fill(0).map((el, i) => <StarIcon key={i} sx={{ color: i < estrelas ? '#F1AD1C' : 'gray' }} />)
          }
        </span>
        <span className='titulo'>&quot; {titulo} &quot;</span>
      </S.Header>

      <S.Body>{descricao}</S.Body>
      <S.Footer>
        <S.Avatar>
          <Image
            style={{
              borderRadius: '5rem'
            }}
            fill
            alt={photo.alt}
            src={photo.src}
          />
        </S.Avatar>

        <span className='cliente-info'>
          <span className="cliente-nome">{nome}</span>

          <a className='cliente-rede_social' href={redeSocial} target='__blank__'>@renan_piress</a>
        </span>
      </S.Footer>
    </S.Container>
  )
}
