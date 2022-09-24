import styled, { css } from 'styled-components';

const xyCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const Container = styled.div`
  ${xyCenter}
`

export const Wrapper = styled.div`
  ${xyCenter}

  margin-top: 2rem;
  width: 85%;
`

export const Head = styled.div`
  ${xyCenter}

  justify-content: space-between;
  column-gap: 2rem;
`

export const Photos = styled.div`
  ${xyCenter}

  flex: 3;
  background-color: ${({ theme }) => theme.colors.primary};

`

export const Contact = styled.div`
  ${xyCenter}
  flex-direction: column;
  flex: 1;
  padding: 1rem 0 1rem 0;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`


export const ContactWrapper = styled.div`
  width: 70%;
  `

export const ContactForm = styled.div`
  width: 100%;
  gap: 10rem;
`