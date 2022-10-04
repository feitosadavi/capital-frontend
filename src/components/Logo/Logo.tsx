import React from 'react'
import Image from 'next/image';

import * as S from './Logo.styles'
import { useRouter } from 'next/router';

export const Logo = () => {
  const router = useRouter()
  const handleClick = () => router.push('/') 
  return (
    <S.Logo onClick={handleClick}>
      <Image src="/capital-logo.svg" alt="me" width="200" height="150" />
    </S.Logo>
  )
}
