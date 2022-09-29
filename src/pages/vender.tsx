
import * as React from 'react'
import { toast } from 'react-toastify';

import { useFormik } from 'formik'
import type { NextPage } from 'next'
import * as Yup from 'yup'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { CMS } from '../host'
import { request } from '../services/request'

import * as S from '../styles/vender.styles'
import { Alert } from '../components'

const REQUIRED_FIELD_MSG = 'Campo obrigatório'

const InfoSchema = Yup.object().shape({
  nome: Yup.string().required(REQUIRED_FIELD_MSG),
  email: Yup.string().required(REQUIRED_FIELD_MSG),
  telefone: Yup.string().required(REQUIRED_FIELD_MSG),

  marca: Yup.string().required(REQUIRED_FIELD_MSG),
  modelo: Yup.string().required(REQUIRED_FIELD_MSG),
  preco: Yup.string().required(REQUIRED_FIELD_MSG),

})

const Vender: NextPage = () => {

  const sendEmail = async (value: any) => {
    try {
      const {
        nome,
        email,
        telefone,
        mensagem,

        marca,
        modelo,
        preco,
      } = value

      const dadosPessoais = { nome, email, telefone, mensagem }
      const dadosCarro = { marca, modelo, preco }

      const body = JSON.stringify({ dadosPessoais, dadosCarro })

      await request(`${CMS}/api/vender`, 'POST', body)
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (value: any) => {
    toast.promise(sendEmail(value), {
      pending: 'Enviando proposta',
      success: 'Tudo certo! Verifique o seu email',
      error: 'Houve um erro. Tente novamente'
    })
  }

  const { errors, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',

      marca: '',
      modelo: '',
      preco: '',
    },
    validationSchema: InfoSchema,
    onSubmit: onSubmit
  });

  React.useEffect(() => {
    console.log(errors);

  }, [errors])

  return (
    <S.Main>
      <Alert />
      <form onSubmit={handleSubmit} action="">
        <S.Title className="title">Seus Dados</S.Title>
        <S.Form>
          <Input
            id='nome'
            label='Nome'
            placeholder='Seu nome'
            value={values.nome}
            error={errors['nome']}
            onChange={handleChange}
          />
          <Input
            id='email'
            label='Email'
            placeholder='Seu email'
            value={values.email}
            error={errors['email']}
            onChange={handleChange}
          />
          <Input
            id='telefone'
            label='Telefone'
            placeholder='Seu telefone'
            value={values.telefone}
            error={errors['telefone']}
            onChange={handleChange}
          />
        </S.Form>

        <S.Title className="title">Seu Carro</S.Title>
        <S.Form>
          <Input
            id='marca'
            label='Marca'
            placeholder='Marca do seu carro'
            value={values.marca}
            error={errors['marca']}
            onChange={handleChange}
          />
          <Input
            id='modelo'
            label='Modelo'
            placeholder='Modelo do seu carro'
            value={values.modelo}
            error={errors['modelo']}
            onChange={handleChange}
          />
          <Input
            id='preco'
            label='Preco desejado'
            placeholder='Preço desejado para o seu carro'
            value={values.preco}
            error={errors['preco']}
            onChange={handleChange}
          />

          <Button label='Enviar' type='submit' />
        </S.Form>
      </form>
    </S.Main>
  )
}

export default Vender