import React from 'react'
import Image from 'next/image';

import * as S from './Logo.styles'
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = ({ className, width, height }) => {
  const router = useRouter()
  const handleClick = () => router.push('/')
  const isMobile = useMediaQuery('(max-width: 500px)')
  return (
    <S.Logo className={className} onClick={handleClick}>
      <Image src="/capital-logo.svg" alt="logo da capital veículos" width={width ?? 170} height={height ?? (isMobile ? 107 : 135)} />
    </S.Logo>
  )
}
