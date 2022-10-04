
import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { DotCarousel, Filters } from '../components'
import { fetchMeilisearch, setupMeiliAttrs } from '../Hookes'
import { fetchSelects } from '../services/fetchSelects'

import * as S from '../styles/inicio.styles'
import { ComprarPageVehicle, Marca, Select } from '../types'
import { AppContext } from '../context/app.context'
import { Button } from '../components/Button'
import Image from 'next/image'
import ImageFuture from 'next/future/image'
import { CardRoulette } from '../components/CardRoulette'
import { HorizontalCard } from '../components/Card/HorizontalCard'
import { request } from '../services/request'
import { CMS } from '../host'
import { useRouter } from 'next/router'


interface Props {
  _selects: Select[]
  vehicles: ComprarPageVehicle[]
  marcas: Marca[]
}

const Inicio: NextPage<Props> = ({ _selects, vehicles, marcas }) => {
  const context = React.useContext(AppContext)
  const [selects, setSelects] = React.useState<Select[]>(_selects)

  const isFirstMount = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (!isFirstMount.current) {
      const query = context.filters?.marca ? `marca=${context.filters.marca}` : ''
      fetchSelects(query)
        .then(res => {
          const marcaAndModelo = res.filter(el => el.key === 'modelo' || el.key === 'marca')
          setSelects(marcaAndModelo)
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

  const renderCards = Array(11).fill(0).map(() => (
    <HorizontalCard key={vehicles[0].id} vehicle={vehicles[0]} />
  ))

  // const renderMarcas = marcas.map(marca => (
  //   <S.Marca key={marca.label}>
  //     <ImageFuture
  //       width={128}
  //       height={128}
  //       alt={marca.photo.alt}
  //       src={marca.photo.src}
  //     />
  //   </S.Marca>
  // ))

  const handleMarcaClick = (marca: string) => {
    context.setFilters(prevState => prevState ? ({ ...prevState, marca }) : ({ marca }) as any)
    router.push(`/comprar`)
  }
  const renderMarcas = Array(11).fill(0).map(() => (
    <S.Marca key={marcas[0].label} onClick={() => handleMarcaClick(marcas[0].label)}>
      <ImageFuture
        width={128}
        height={128}
        alt={marcas[0].photo.alt}
        src={marcas[0].photo.src}
      />
    </S.Marca>
  ))

  const router = useRouter()
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
                <Button onClick={() => router.push('/comprar')} label='Comprar' />
                <Button onClick={() => router.push('/vender')} label='Vender' background='outline' />
              </S.BtnGroup>
            </S.SearcherFooter>
          </S.Searcher>
        </S.Head>

        <CardRoulette title='Nossos destaques' cards={renderCards} />
        <CardRoulette title='Conheça nossas marcas' cards={renderMarcas} />

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

        {/* <CardRoulette title='O que dizem nossos clientes' cards={renderCards} /> */}

      </S.Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await setupMeiliAttrs('veiculo')

  const { data: vehicles } = await request<{ data: ComprarPageVehicle[] }>(`${CMS}/api/veiculos?populate[0]=marca.photo,modelo,anos,cor,combustivel,cambio,categoria,photos`)
  const res = await request<Select[]>(`${CMS}/api/filters`)
  const { data: marcas } = await request<{ data: Marca[] }>(`${CMS}/api/marcas?populate=*`)

  const _selects = res.filter(el => el.key === 'marca' || el.key === 'modelo')

  const props: Props = { _selects, vehicles, marcas }

  return {
    props, // will be passed to the page component as props
  }
}

export default Inicio