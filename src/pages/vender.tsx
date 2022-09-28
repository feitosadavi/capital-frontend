
import { useFormik } from 'formik'
import type { NextPage } from 'next'
import * as Yup from 'yup'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

import * as S from '../styles/vender.styles'

const Vender: NextPage = () => {

  const REQUIRED_FIELD_MSG = 'Campo obrigatório'

  const InfoSchema = Yup.object().shape({
    dadosPessoais: Yup.object({
      nome: Yup.string().required(REQUIRED_FIELD_MSG),
      email: Yup.string().required(REQUIRED_FIELD_MSG),
      telefone: Yup.string().required(REQUIRED_FIELD_MSG),
      mensagem: Yup.string().required(REQUIRED_FIELD_MSG),
    }),
    dadosCarro: Yup.object({
      placa: Yup.string().required(REQUIRED_FIELD_MSG),
      marca: Yup.string().required(REQUIRED_FIELD_MSG),
      modelo: Yup.string(),
      cor: Yup.string().required(REQUIRED_FIELD_MSG),
    })
  })

  const onSubmit = (value: any) => {
    console.log({ value });

  }

  const { errors, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      dadosPessoais: {
        nome: '',
        email: '',
        telefone: ''
      },
      dadosCarro: {
        placa: '',
        marca: '',
        modelo: '',
        cor: '',
      }
    },
    validationSchema: InfoSchema,
    onSubmit: onSubmit
  });

  return (
    <S.Main>
      <form onSubmit={handleSubmit}>
        <S.Title className="title">Seus Dados</S.Title>
        <S.Form>
          <Input
            id='nome'
            label='Nome'
            placeholder='Seu nome'
            value={values.dadosPessoais.nome}
            error={errors.dadosPessoais ? errors.dadosPessoais['nome'] : ''}
            onChange={handleChange}
          />
          <Input
            id='email'
            label='Email'
            placeholder='Seu email'
            value={values.dadosPessoais.email}
            error={errors.dadosPessoais ? errors.dadosPessoais['email'] : ''}
            onChange={handleChange}
          />
          <Input
            id='telefone'
            label='Telefone'
            placeholder='Seu telefone'
            value={values.dadosPessoais.telefone}
            error={errors.dadosPessoais ? errors.dadosPessoais['telefone'] : ''}
            onChange={handleChange}
          />
        </S.Form>

        <S.Title className="title">Seu Carro</S.Title>
        <S.Form>
          <Input
            id='placa'
            label='Placa'
            placeholder='Placa do seu carro'
            value={values.dadosCarro.placa}
            error={errors.dadosCarro ? errors.dadosCarro['placa'] : ''}
            onChange={handleChange}
          />
          <Input
            id='marca'
            label='Marca'
            placeholder='Marca do seu carro'
            value={values.dadosCarro.marca}
            error={errors.dadosCarro ? errors.dadosCarro['marca'] : ''}
            onChange={handleChange}
          />
          <Input
            id='modelo'
            label='Modelo'
            placeholder='Modelo do seu carro'
            value={values.dadosCarro.modelo}
            error={errors.dadosCarro ? errors.dadosCarro['modelo'] : ''}
            onChange={handleChange}
          />
          <Input
            id='cor'
            label='Cor'
            placeholder='Cor do seu carro'
            value={values.dadosCarro.cor}
            error={errors.dadosCarro ? errors.dadosCarro['cor'] : ''}
            onChange={handleChange}
          />
        </S.Form>

        <Button label='Enviar' />
      </form>
    </S.Main>
  )
}

export default Vender