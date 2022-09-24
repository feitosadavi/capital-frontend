import { GetStaticProps } from 'next'
import React from 'react'
import { request } from '../../services/request'
import { ComprarPageVehicle, Vehicle as VehicleType } from '../../types'

import * as S from '../../styles/[id]'
import styled from 'styled-components'

type VehicleProps = {
  _vehicle: VehicleType
}
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
const REQUIRED_FIELD_MSG = 'Campo obrigatório'

const MessageSchema = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD_MSG),
  email: Yup.string().required(REQUIRED_FIELD_MSG),
  telefone: Yup.string(),
  mensagem: Yup.string().required(REQUIRED_FIELD_MSG),
})

const Vehicle: React.FC<VehicleProps> = ({ _vehicle }) => {
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

  return (
    <S.Container>
      <S.Wrapper>
        <S.Head>
          <S.Photos>PHOTOS</S.Photos>
          <S.Contact>
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
          </S.Contact>
        </S.Head>
      </S.Wrapper>
    </S.Container>
  )
}

// This function gets called at build time
export const getStaticPaths = async () => {
  const _vehicles = await request<ComprarPageVehicle[]>('http://localhost:3000/api/vehicles')
  const paths = _vehicles.map(({ id }) => ({
    params: { id },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<VehicleProps> = async ({ params }) => {
  const _vehicle = await request<VehicleType>(`http://localhost:3000/api/vehicles/${params?.id}`)

  const props: VehicleProps = { _vehicle }

  return { props }
}

export default Vehicle