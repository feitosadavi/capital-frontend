
import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { DotCarousel, Filters } from '../components'
import { setupMeiliAttrs } from '../Hookes'
import { fetchSelects } from '../services/fetchSelects'

import * as S from '../styles/inicio.styles'
import { Select } from '../types'
import { AppContext } from '../context/app.context'
import { Button } from '../components/Button'
import Image from 'next/image'


interface Props {
  selects: Select[]
}

const Inicio: NextPage<Props> = ({ selects }) => {
  const context = React.useContext(AppContext)
  const [modeloSelect, setModeloSelect] = React.useState<Select>()

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      const query = context.filters?.marca ? `marca=${context.filters.marca}` : ''
      fetchSelects(query)
        .then(res => {
          const _modeloSelect = res.filter(el => el.key === 'modelo')[0]

          setModeloSelect(_modeloSelect)
        })
    } else {
      isFirstMount.current = false
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filters?.marca])

  const slides = [{
    title: 'AQUI VOCÊ ENCONTRA O SEU CARRO',
    subtitle: 'COM AS MELHORES CONDIÇÕES',
    img: ''
  }, {
    title: 'JUROS A PARTIR DE 0,98%',
    subtitle: 'PARCELAMENTO EM ATÉ 60x',
    img: ''
  }]

  const slidesEl = () => slides.map(({ title, subtitle }) => (
    <S.Slide key={title}>
      <div className='slide__wrapper'>
        <p className='slide__title'>{title}</p>
        <p className="slide__subtitle">{subtitle}</p>
      </div>
    </S.Slide>
  ))

  return (
    <div>
      <Head>
        <title>Capital | Início</title>
      </Head>

      <S.Container>
        <S.Head>
          <DotCarousel slides={slidesEl()} />


          <S.Searcher>
            {selects.map(select => (
              <Filters key={select.key} select={select} />
            ))}

            <S.SearcherFooter>
              <span>O que você deseja?</span>
              <S.BtnGroup>
                <Button label='Comprar' />
                <Button label='Vender' background='outline' />
              </S.BtnGroup>
            </S.SearcherFooter>
          </S.Searcher>
        </S.Head>

        <S.QuemSomos>
          <Image className='foto-loja' src='/capital-foto.jpg' alt='Foto da fachada da Capital Veículos' width='500px' height='360px' />

          <p className='quemsomos__text'>
            A Capital Veículos, nasceu da parceria de profissionais com mais de 20 anos de experiência no mercado automobilístico. Nosso objetivo, é poder proporcionar satisfação, confiabilidade e eficiência para nossos clientes e parceiros. Estamos preparados para encontrar o melhor negócio para VOCÊ - CLIENTE AMIGO.
          </p>
        </S.QuemSomos>

        <S.Topicos>
          <div className="topico">
            <div className="topico__titulo">Missão</div>
            <div className="topico__texto">
              Garantir transparência, ética e excelência em 100% das negociações.
            </div>
          </div>

          <div className="topico">
            <div className="topico__titulo">Visão</div>
            <div className="topico__texto">
              Atuar com comprometimento e versatilidade para se consolidar cada vez mais no mercado automobilístico.
            </div>
          </div>

          <div className="topico">
            <div className="topico__titulo">Valores</div>
            <div className="topico__texto">
              Transparência, honestidade e excelência.
            </div>
          </div>
        </S.Topicos>
      </S.Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await setupMeiliAttrs('veiculos')

  const res = await fetchSelects()

  const selects = res.filter(el => el.key === 'marca' || el.key === 'modelo')

  const props: Props = { selects }

  return {
    props, // will be passed to the page component as props
  }
}

export default Inicio