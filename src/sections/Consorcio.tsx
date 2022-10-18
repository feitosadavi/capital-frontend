import Image from 'next/image'
import React from 'react'
import { WhatsappBtn } from '../components'

export const Consorcio = () => {
  return (
    <div style={{ overflowY: 'auto' }}>
      <h1 className='titulo'>Consórcio</h1>
      <Image src='/consorcio.png' style={{ scale: '1.1' }} alt='carro gol vermelho com uma roleta de dinheiro no fundo' width='320px' height='320px' />

      <p className='paragraph'>
        Sonhar e planejar são coisas distintas.

        O Consórcio é para quem deseja adquirir um bem e não para quem necessita de
        imediato, pois é através de sorteio ou lance que vamos disponibilizar os créditos.</p>

      <div className='pontos'>
        <span>LIVRE DE JUROS ,</span>
        <span></span>
        <span>COMPRA PROGRAMADA</span>
        <span>E</span>
        <span>PLANEJADA</span>
      </div>


      <p className='paragraph'>
        Uma poupança forçada para se
        atingir um sonho futuro, seja ele a compra do primeiro imóvel, ou mudar de carro,
        fazer um UPGRADE do atual.

        Nossos segmentos são imensos.
        Carro, motos, casas prontas e na planta. Terrenos, construção ou reforma.

        Energia fotovoltaica, agronegócios e investimentos.

        Investimento totalmente rentável.

        Se resgatado no final do plano pegará o crédito totalmente reajustado e livre de IR.
      </p>


      <p className='paragraph'>
        Uma poupança forçada para se
        atingir um sonho futuro, seja ele a compra do primeiro imóvel, ou mudar de carro,
        fazer um UPGRADE do atual.

        Nossos segmentos são imensos.
        Carro, motos, casas prontas e na planta. Terrenos, construção ou reforma.

        Energia fotovoltaica, agronegócios e investimentos.

        Investimento totalmente rentável.

        Se resgatado no final do plano pegará o crédito totalmente reajustado e livre de IR.
      </p>
      <WhatsappBtn />
    </div>
  )
}

// const Container = styled.div`
//   overflow-y: auto;
//   .paragraph {
//     color: ${({ theme }) => theme.colors.white};
//     text-align: start;
//     margin: 1rem auto 1rem  auto;
//   }

//   .pontos {
//     margin: 2rem auto 2rem auto;
//     font-weight: 700;
//     color: ${({ theme }) => theme.colors.white};
//   }

//   .pontos span {
//     color: ${({ theme }) => theme.colors.yellow};
//     margin: auto .3rem auto .3rem;
//   }
// `
