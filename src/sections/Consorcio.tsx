import Image from 'next/image'
import React from 'react'
import { WhatsappBtn } from '../components'

export const Consorcio = () => {
  return (
    <div style={{ overflowY: 'auto' }}>
      <h1 className='titulo'>Consórcio</h1>

      <p className='chamada-principal'>
        <span className='enfase'> Sonhar </span>
        e
        <span className='enfase'> planejar </span>

        são coisas distintas.

        O Consórcio é para quem deseja adquirir um bem e não para quem necessita de
        imediato, pois é através de sorteio ou lance que vamos disponibilizar os créditos.
      </p>

      <Image src='/consorcio.png' style={{ scale: '1.1' }} alt='carro gol vermelho com uma roleta de dinheiro no fundo' width='320px' height='320px' />

      <div className='subtitulo bold'>
        <span><span className='enfase'>LIVRE </span>DE JUROS, </span>
        <span></span>
        <span>COMPRA <span className='enfase'>PROGRAMADA </span> </span>
        <span>E </span>
        <span><span className='enfase'>PLANEJADA</span></span>
      </div>


      <div className="topico">
        <h3 className="enfase">Como funciona?</h3>
        <p>
          Uma poupança forçada para se
          atingir um sonho futuro, seja ele a compra do primeiro imóvel, ou mudar de carro,
          fazer um <span className="enfase bold">UPGRADE</span> do atual.
        </p>
      </div>

      <div className="topico">
        <h3 className="enfase">Nossos segmentos</h3>
        <p>
          Trabalhamos com diversos segmentos.
          Carro, motos, casas prontas e na planta. Terrenos, construção ou reforma.

          Energia fotovoltaica, agronegócios e investimentos.

          Investimento totalmente rentável.

          Se resgatado no final do plano pegará o crédito totalmente reajustado e livre de IR.
        </p>

        <p>
          Investimento totalmente rentável.
          Se resgatado no final do plano pegará o crédito totalmente reajustado e livre de IR.
        </p>
      </div>

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
