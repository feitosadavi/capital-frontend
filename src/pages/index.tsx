
import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { DotCarousel, Filters, Testemonial } from '../components'
import { setupMeiliAttrs } from '../Hookes'
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
import { useRouter } from 'next/router'
import { Testemonial as TestemonialType } from '../types/Testemonial'

import * as fbq from '../lib/fpixel'

interface Props {
  _selects: Select[]
  vehicles: ComprarPageVehicle[]
  marcas: Marca[]
  testemonials: TestemonialType[]
}

const Inicio: NextPage<Props> = ({ _selects, vehicles, marcas, testemonials }) => {
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
    img: '/carousel-img-1.jpeg'
  }, {
    title: 'JUROS A PARTIR DE 0,98%',
    subtitle: 'PARCELAMENTO EM ATÉ 60x',
    img: '/carousel-img-2.jpeg'
  }]

  const slidesEl = () => slides.map(({ title, subtitle, img }) => (
    <S.Slide key={title} img={img}>
      <div className='slide__wrapper'>
        <p className='slide__title'>{title}</p>
        <p className="slide__subtitle">{subtitle}</p>
      </div>
    </S.Slide>
  ))

  const renderCards = vehicles.map(vehicle => (
    <HorizontalCard key={vehicle.id} vehicle={vehicle} />
  ))

  const renderTestemonials = () => Array(11).fill(0).map(() => (
    <Testemonial key={testemonials[0].id} testemonial={testemonials[0]} />
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
  const renderMarcas = marcas.map(marca => (
    <S.Marca key={marca.label} onClick={() => handleMarcaClick(marca.label)}>
      <ImageFuture
        width={128}
        height={128}
        alt={marca.photo.alt}
        src={marca.photo.src}
      />
    </S.Marca>
  ))

  const handleVenderClick = () => {
    fbq.event('Vender', { fonte: 'Botão da página de início' })
    router.push('/vender')
  }
  const handleComprarClick = () => {
    fbq.event('Comprar', { fonte: 'Botão da página de início' })
    router.push('/comprar')
  }

  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Capital | Início</title>
        <meta property="og:title" content="Capital Veículos" />
        {/* <meta property="og:type" content="{Your content}" /> */}
        <meta property="og:description" content='A Capital Veículos é uma loja especializada na venda e compra de automóveis, sediada em Brasília - DF (Distrito Federal). Também trabalhamos com consignação de veículos e consórcio de automovéis, casa e muito mais!' />
        <meta property="og:image" content="https://res.cloudinary.com/dgpv312qk/image/upload/v1666224177/capital-capa_lkdjyk.png" color='#100f11' />
        <meta property="og:url" content="https://capitalveiculosdf.com" />
        <meta property="og:locale" content="pt_BR" />
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
                <Button onClick={handleComprarClick} label='Comprar' />
                <Button onClick={handleVenderClick} label='Vender' background='outline' />
              </S.BtnGroup>
            </S.SearcherFooter>
          </S.Searcher>
        </S.Head>

        <CardRoulette title='Nossos destaques' cards={renderCards} />
        <CardRoulette title='Conheça nossas marcas' cards={renderMarcas} />

        <S.QuemSomos>
          <Image className='foto-loja' src='https://res.cloudinary.com/dgpv312qk/image/upload/v1667669434/static/capital-loja.jpg' alt='Foto da loja da Capital Veículos' width='500px' height='360px' />

          <p className='quemsomos__text'>
            A Capital Veículos, nasceu da parceria de profissionais com mais de 20 anos de experiência no mercado automobilístico. Nosso objetivo, é poder proporcionar satisfação, confiabilidade e eficiência para nossos clientes e parceiros. Estamos preparados para encontrar o melhor negócio para VOCÊ - CLIENTE AMIGO.
          </p>
        </S.QuemSomos>

        <S.Topicos>
          <div className="topico">
            <div className="topico__titulo">MISSÃO</div>
            <div className="topico__texto">
              Garantir transparência, ética e excelência em 100% das negociações.
            </div>
          </div>

          <div className="topico">
            <div className="topico__titulo">VISÃO</div>
            <div className="topico__texto">
              Atuar com comprometimento e versatilidade para se consolidar cada vez mais no mercado automobilístico.
            </div>
          </div>

          <div className="topico">
            <div className="topico__titulo">VALORES</div>
            <div className="topico__texto">
              Transparência, honestidade e excelência.
            </div>
          </div>
        </S.Topicos>

        {/* <OndeEstamos /> */}

        {testemonials?.length > 0 &&
          <CardRoulette title='O que dizem nossos clientes' cards={renderTestemonials()} />
        }

      </S.Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  await setupMeiliAttrs('veiculo')

  const { data: vehicles } = await request<{ data: ComprarPageVehicle[] }>(`/api/veiculos?populate[0]=marca.photo,modelo,anos,cor,combustivel,cambio,categoria,photos&filters[destaque][$eq]=true`)
  const res = await request<Select[]>(`/api/filters`)
  const { data: marcas } = await request<{ data: Marca[] }>(`/api/marcas?populate=*`)
  const { data: testemonials } = await request<{ data: TestemonialType[] }>(`/api/testemunhos?populate=*`)

  const _selects = res.filter(el => el.key === 'marca' || el.key === 'modelo')

  // if (marcas.length < 4) {
  //   const marcasArr = [...marcas, ...marcas]
  //   const multiplyCount = 4 - marcas.length
  //   marcasArr.push
  // }
  // const _vehicles = [...vehicles]
  // for (const vehicle of vehicles) {
  //   _vehicles.push({ ...vehicle, id: String(Math.random()) })
  // }
  // console.log({ _vehicles });

  const arrVehicles = vehicles?.length > 0 ? [...vehicles, ...vehicles, ...vehicles, ...vehicles, ...vehicles] : []

  const arrMarcas = marcas.length > 0 ? [...marcas, ...marcas, ...marcas] : []

  const props: Props = { _selects, vehicles: arrVehicles, marcas: arrMarcas, testemonials }

  return {
    props, // will be passed to the page component as props
    revalidate: 30
  }
}

export default Inicio