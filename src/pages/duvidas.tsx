import React from 'react'
import { Accordion } from '../components'
import { Button } from '../components/Button'

import * as S from '../styles/duvidas'
import { Question } from '../types'

type Content = {
  type: 'sale' | 'buy'
  questions: Question[]
}

const saleQuestions: Content = {
  type: 'sale', questions: [{
    title: 'Como eu faço para vender meu carro através da Capital Veículos?',
    description: 'É simples: Basta você agendar um dia e horário, pelo site ou demais canais de atendimento, \
  para levar o seu veículo até nossa loja. Feito isso, nós realizaremos uma avaliação, \
  produziremos fotos e vídeos profissionais em nosso estúdio e, posteriormente, colocaremos o \
  anúncio no ar.'
  }, {
    title: 'Meu carro vai ficar com Capital Veículos até o momento da venda?',
    description: 'Não. Seu carro continuará com você, que poderá usá-lo normalmente até o desenrolar do \
  processo de venda.'
  }, {
    title: 'Quando vou precisar levar meu carro até a Capital Veículos?',
    description: 'No dia da produção do anúncio, quando surgir um interessado em ver o veículo pessoalmente, \
    e lógico, quando a venda for consumada.'
  }, {
    title: 'Como será administrada uma eventual negociação?',
    description: 'Nossos consultores farão tudo para você. Comunicaremos você de imediato, sempre que \
    surgir uma eventual proposta. Em caso de aceitação, nós nos atribuiremos de todo o processo \
    até a finalização da venda.'
  }, {
    title: 'Por quem o pagamento será executado?',
    description: 'A Capital Veículos se encarregará de: \
    - Repassar o pagamento ao vendedor do carro, sempre à vista, de forma prudente e segura.\
    - Garantir que o veículo só será entregue após o fechamento dos trâmites legais e\
    burocráticos.'
  }, {
    title: 'Meu carro pode ser vendido mesmo estando financiado?',
    description: 'A resposta é sim! Entre em contato com a nossa equipe e saiba mais sobre o processo.'
    }]
}

const buyingQuestions: Content = {
  type: 'buy', questions: [{
    title: 'Como adquirir um carro através da Capital Veículos?',
    description: 'Converse com um de nossos consultores via canais de atendimento (whatsapp, instagram ou \
      telefone) e informe qual carro você está interessado. Feito isso, guiaremos toda a negociação\
      junto ao proprietário do veículo.'
  }, {
    title: 'Qual a procedência dos carros anunciados?',
    description: 'Todos os carros anunciados, são devidamente inspecionados por nossos profissionais antes da \
    produção das fotos para inserção nas plataformas. '
  }, {
    title: 'Como faço para ver pessoalmente o carro pelo qual me interessei?',
    description: 'Fácil! É só você entrar em contato com um consultor da Capital Veículos e agendar um dia e \
    horário para realizar um test drive.'
  }, {
    title: 'E sobre a garantia?',
    description: 'Todos os carros vendidos pela Capital Veículos possuem garantia de motor e câmbio por 90 \
    dias a partir da data de compra.'
  }, {
    title: 'Tenho interesse no carro, mas moro em outro estado, como faço?',
    description: 'Nossa equipe de comunicação, enviará fotos e vídeos atualizados do carro de seu interesse, \
    seguidos de todas as informações necessárias e detalhadas sobre o quadro geral.'
  }, {
    title: 'Que garantia eu tenho sobre a documentação do carro?',
    description: 'Fazemos uma checagem completa sobre pendências de qualquer natureza, inclusive sobre \
    eventuais passagens por algum tipo de leilão.'
  }, {
    title: 'Quais são as formas de pagamento?',
    description: 'TED, PIX, financiamento (somos credenciados em todos os bancos), carta de crédito, consórcio \
    e também o seu usado (caso tenha) na troca.'
  }, {
    title: 'Onde faço o pagamento?',
    description: 'O pagamento deverá ser realizado na conta da Capital Veículos e repassado ao vendedor \
    somente após a entrega do carro e, quitação e baixa de eventuais dívidas existentes.'
    }]
}

const Duvidas = () => {
  const [content, setContent] = React.useState<Content>(saleQuestions)

  const switchQuestions = (_questions: Content) => setContent(_questions)

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          DÚVIDAS FREQUENTES
        </S.Title>

        <S.ButtonGroup>
          <Button background={content.type !== 'sale' ? 'outline' : undefined} onClick={() => switchQuestions(saleQuestions)} label='Sobre Vendas' />
          <Button background={content.type !== 'buy' ? 'outline' : undefined} onClick={() => switchQuestions(buyingQuestions)} label='Sobre Compras' />
        </S.ButtonGroup>

        <S.Duvidas>
          <Accordion questions={content.questions} />
        </S.Duvidas>
      </S.Wrapper>
    </S.Container>
  )
}

export default Duvidas
