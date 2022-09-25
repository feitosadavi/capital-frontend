import styled, { css } from 'styled-components';

const xyCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Container = styled.div`
  ${xyCenter}
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  max-width: 90rem;
`

export const Wrapper = styled.div`
  ${xyCenter}
  position: relative;
  justify-content: space-between;

  margin:2rem auto;
  overflow:auto;
`

export const Head = styled.div`
  ${xyCenter}
  justify-content: space-between;
`

export const Section = styled.section`
  ${xyCenter}
  flex-direction: column;
  align-self: flex-start;
  max-width: 48rem;
  width: 50vw;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    /* flex: 3; */
  }
`

const customBackground = css`
  display: grid;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  border-radius: .5rem;
`

export const Description = styled.div`
  ${customBackground}

  .main_info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 13pt;
    font-weight: 600;
  }

  .main_info-left {
    color: ${({ theme }) => theme.colors.white};
  }

  .main_info-right {
    color: ${({ theme }) => theme.colors.yellow};
  }

  p {
    margin-top: 1rem;
  }
`

export const Details = styled.div`
  ${customBackground}
  grid-template-columns: auto auto auto;
  justify-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto auto;
  }
`

export const Info = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  margin-bottom: 1rem;
  .label {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Aside = styled.section`
  position: relative;
  align-self: flex-start;
  /* right: calc((100vw - 90rem) / 2); */
  /* top: 7rem; */

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`


export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: .5rem ;
  background-color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
    border-radius: 0;
  }
`

export const ContactForm = styled.div`
  width: 100%;
  gap: 10rem;
`

export const ContactDrawerButton = styled.button`
  padding: .5rem;
  width: 10rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.secondary};

  font-weight: bold;
  font-size: 12pt;
  border-radius: .5rem;

  :active {
    color: white;
  }

`