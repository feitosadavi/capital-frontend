import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'
import { Logo } from './Logo'

type Position = 'relative' | 'fixed' | 'absolute'

interface LoadingProps {
  position?: Position
  logoLoading?: boolean
}

const Loading: React.FC<LoadingProps> = ({ position, logoLoading }) => {
  if (logoLoading) return <LogoLoading position={position} />
  return (
    <StyledContainer position={position}>
      <CircularProgress sx={{ color: '#F1AD1C', opacity: 'none' }} />
    </StyledContainer>
  )
}

const StyledContainer = styled.div<{ position?: Position }>`
  position: ${({ position }) => position ?? 'relative'};

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 60vh;
  z-index: 99997;
`

const StyledLogoLoadingContainer = styled(StyledContainer)`
  top: 50%;
  left: 50%;

  translate:-50% -50%;
`

const LogoLoading: React.FC<{ position?: Position }> = ({ position }) => {
  return (
    <StyledLogoLoadingContainer position={position}>
      <Logo className='loadingScreenLogo' width={500} height={300} />
    </StyledLogoLoadingContainer>
  )
}


export default Loading