import Image from 'next/image'
import React from 'react'

export const ConsignacaoVirtual = () => {
  return (
    <div>
      <h1 className='titulo'>Consignação Virtual</h1>

      <p className='chamada-principal'>
        O jeito mais
        <span className='enfase'> prático</span>,
        <span className='enfase'> seguro </span>e
        <span className='enfase'> eficiente</span> de vender o seu veículo. Nossos
        consultores cuidam de
        <span className="enfase"> tudo </span>
        para você.
      </p>

      <Image src='/carro-consignado.png' style={{ scale: '1.3' }} alt='carro gol vermelho com uma roleta de dinheiro no fundo' width='320px' height='220px' />

      <h2 className='subtitulo'>Por que aderir a <span className="enfase">Consignação Virtual?</span></h2>

      <div className="topico">
        <h3 className='enfase'>Segurança</h3>
        <p>
          Garantimos profissionalismo e consultoria especializada durante todo o
          processo de venda.
        </p>
      </div>

      <div className="topico">
        <h3 className='subtopico enfase'>Usabilidade</h3>
        <p>
          Viabilizamos todo o processo de prospecção e divulgação do veículo nas
          principais plataformas, além de disponibilizarmos as mais variados formas de
          pagamento, tais como, financiamento, carta de crédito e pagamento à vista.
        </p>
      </div>

      <div className="subtopico topico">
        <h3 className='enfase'>Benefícios</h3>
        <p>
          Você não precisa deixar o veículo na empresa durante o processo de venda. O
          mesmo será negociado de acordo com os valores atuais de mercado e você só
          terá custo caso a venda seja consumada.
        </p>
      </div>


    </div>
  )
}
