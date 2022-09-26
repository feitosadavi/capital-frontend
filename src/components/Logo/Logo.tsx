import React from 'react'
import Image from 'next/image';

import * as S from './Logo.styles'

export const Logo = () => {
  return (
    <S.Logo>
      <Image src="/capital-logo.svg" alt="me" width="200" height="150" />
    </S.Logo>
  )
}
