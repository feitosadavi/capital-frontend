import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { request } from '../../services/request'
import { ComprarPageVehicle, Vehicle as VehicleType } from '../../types'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import * as S from '../../styles/[id].styled'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Carousel } from '../../components'
import { Drawer, useMediaQuery } from '@mui/material'

const REQUIRED_FIELD_MSG = 'Campo obrigatório'

const MessageSchema = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD_MSG),
  email: Yup.string().required(REQUIRED_FIELD_MSG),
  telefone: Yup.string(),
  mensagem: Yup.string().required(REQUIRED_FIELD_MSG),
})

type VehicleProps = {
  _vehicle: VehicleType
}

const Vehicle: React.FC<VehicleProps> = ({ _vehicle }) => {
  const [pageUrl, setPageUrl] = React.useState<string>('')

  const onSubmit = async (values: any) => {
    console.log({ values })
  }

  const { errors, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: 'Olá! Tenho interesse neste veículo!',
    },
    validationSchema: MessageSchema,
    onSubmit: onSubmit
  });

  const ContactForm = () => (
    <S.ContactWrapper>
      <div>Envie a sua proposta e marcaremos uma visita! :)</div>

      <form onSubmit={handleSubmit} action="">
        <S.ContactForm>
          <Input
            id='nome'
            placeholder='Seu nome'
            label='Nome'
            onChange={handleChange}
            value={values.nome}
            error={errors['nome']}
          />
          <Input
            id='email'
            placeholder='Seu email'
            label='Email'
            type='email'
            onChange={handleChange}
            value={values.email}
            error={errors['email']}
          />
          <Input
            id='telefone'
            placeholder='Seu telefone'
            label='Telefone'
            type='phone'
            onChange={handleChange}
            value={values.telefone}
            error={errors['telefone']}
          />
          <Textarea
            id='mensagem'
            label='Mensagem'
            placeholder='Sua mensagem'
            onChange={handleChange}
            value={values.mensagem}
            error={errors['mensagem']}
          />

          <Button
            label='ENVIAR'
            type='submit'
          />
        </S.ContactForm>
      </form>

    </S.ContactWrapper>
  )

  const isMobile = useMediaQuery('(max-width:1000px)')
  const [isContactDrawerOpen, setIsContactDrawerOpen] = React.useState<boolean>(false)
  const toggleContactDrawer = () => setIsContactDrawerOpen(!isContactDrawerOpen)

  const detailInfos = [{
    label: 'Categoria',
    value: _vehicle.categoria
  }, {
    label: 'Modelo',
    value: _vehicle.modelo
  }, {
    label: 'Km',
    value: _vehicle.km
  }, {
    label: 'Anos',
    value: _vehicle.anos
  }, {
    label: 'Combustível',
    value: _vehicle.combustivel
  }, {
    label: 'Cor',
    value: _vehicle.cor
    }]

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const social = [{
    element: <FacebookIcon />,
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`
  }, {
    element: <InstagramIcon />,
    label: 'Instagram',
    href: 'instagram://user?username=untitled.tiff'
  }, {
    element: <TwitterIcon />,
    label: 'Twitter',
      href: `https://twitter.com/share?url=${encodeURIComponent(pageUrl)}`
    }]

  React.useEffect(() => {
    setPageUrl(window.location.href)
  }, [])



  return (<>
    <Head>
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${_vehicle.marca} ${_vehicle.modelo}`} />
      <meta property="og:description" content={_vehicle.descricao} />
      <meta property="og:image" content={_vehicle.photos[0].src} />

      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:image" content={_vehicle.photos[0].src} /> */}
      <meta name="twitter:title" content={`${_vehicle.marca} ${_vehicle.modelo}`} />
      <meta name="twitter:description" content='skadjfksjfkjds' />
      {/* <meta name="twitter:domain" content="brave-donkey-12.loca.lt" /> */}
    </Head>
    <S.Container>
      <S.Wrapper>

        <S.Section >
          <Carousel photos={_vehicle.photos} />
          <S.Description>
            <div className='main_info'>
              <div className='main_info-left'>{_vehicle.marca} {_vehicle.modelo}</div>
              <div className='main_info-right'>{currencyFormatter.format(_vehicle.preco)}</div>
            </div>

            <p>{_vehicle.descricao}</p>
          </S.Description>

          <S.Details>
            {detailInfos.map(({ label, value }) => (
              <S.Info key={label}>
                <span className='label'>{label}</span>
                <span className='value'>{value}</span>
              </S.Info>
            ))}
          </S.Details>
        </S.Section>

        <S.Aside>
          <S.Share>
            <span>Compartilhe</span>
            <div className="icons">
              {
                social.map(({ element, label, href }) => (
                  <div
                    style={{ cursor: 'pointer' }}
                    key={label}
                    onClick={() => window.open(href, '__blank__')}
                  >
                    <span className='icon'>{element}</span>
                  </div>
                ))
              }
            </div>
          </S.Share>
          <ContactForm />
        </S.Aside>
        {
          isMobile &&
          <>
            <Drawer
              anchor={'right'}
              open={isContactDrawerOpen}
              onClose={toggleContactDrawer}
            >
              <ContactForm />
            </Drawer>
            <div style={{
              position: 'fixed',
              left: '0',
              bottom: '3rem',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
              <S.ContactDrawerButton onClick={toggleContactDrawer}>Tenho interesse!</S.ContactDrawerButton>
            </div>
          </>
        }
      </S.Wrapper>

    </S.Container>
  </>)
}

// This function gets called at build time
export const getStaticPaths = async () => {
  const { data } = await request<{ data: ComprarPageVehicle[] }>('http://seashell-app-6ylyu.ondigitalocean.app/api/veiculos?populate=*')

  const paths = data.map(({ id }) => ({
    params: { id: String(id) },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<VehicleProps> = async ({ params }) => {
  const { data } = await request<{ data: VehicleType }>(`http://seashell-app-6ylyu.ondigitalocean.app/api/veiculos/${params?.id}?populate=*`)

  const props: VehicleProps = { _vehicle: data }

  return { props }
}

export default Vehicle