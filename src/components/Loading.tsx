import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <StyledContainer>
      <CircularProgress sx={{ color: '#F1AD1C', opacity: 'none' }} />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 60vh;
`

export default Loading