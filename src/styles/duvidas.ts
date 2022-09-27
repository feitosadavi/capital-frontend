import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 85%;
  max-width: 90rem;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 700;
  font-size: 18pt;
  letter-spacing: .5rem;
  color: ${({ theme }) => theme.colors.white};
`

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`
export const Duvidas = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
