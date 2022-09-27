import React from 'react'
import { Accordion } from '../components'
import { Button } from '../components/Button'

import * as S from '../styles/duvidas'
import { Question } from '../types'

const saleQuestions: Question[] = [{
  title: 'Por que o céu é azul?',
  description: 'pq sim'
}]

const buyingQuestions: Question[] = [{
  title: 'Por que o mar é rosa?',
  description: 'pq papagaios não cantam ópera'
}]

const Duvidas = () => {
  const [questions, setQuestions] = React.useState<Question[]>(saleQuestions)

  const switchQuestions = (_questions: Question[]) => setQuestions(_questions)

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          SUAS DÚVIDAS SÃO
        </S.Title>

        <S.ButtonGroup>
          <Button onClick={() => switchQuestions(saleQuestions)} label='Sobre Vendas' />
          <Button onClick={() => switchQuestions(buyingQuestions)} label='Sobre Compras' />
        </S.ButtonGroup>

        <S.Duvidas>
          <Accordion questions={questions} />
        </S.Duvidas>
      </S.Wrapper>
    </S.Container>
  )
}

export default Duvidas
