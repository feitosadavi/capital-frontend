import React from 'react'
import { WhatsappBtn } from '../components'

export const CompraProgramada = () => {
  return (
    <div>
      <h1 className='titulo'>Compra Programada</h1>

      <p className='chamada-principal'>
        A <span className='enfase'>Compra Programada</span> é uma modalidade de crédito onde você fica isento <span className="enfase">taxas</span> e
        <span className='enfase'> juros</span> e ainda dispensa consulta ao <span className="enfase">SPC</span> e <span className="enfase">SERASA</span>. Converse com um de nossos
        consultores para mais informações.
      </p>

      <WhatsappBtn />
    </div>
  )
}
