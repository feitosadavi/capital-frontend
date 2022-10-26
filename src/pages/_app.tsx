import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles'
import { AppContextProvider } from '../context/app.context'
import { Footer } from '../components'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { useRouter } from 'next/router'

import ReactPixel from 'react-facebook-pixel'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App ({ Component, pageProps }: AppProps) {

  // const dispatchAnimation = React.useRef<boolean>(false)

  // React.useEffect(() => {
  //   dispatchAnimation.current = true
  // }, [])

  const router = useRouter()

  React.useEffect(() => {
    ReactPixel.init('1178116999770341') // facebookPixelId
    ReactPixel.pageView()

    router.events.on('routeChangeComplete', () => {
      ReactPixel.pageView()
    })
  }, [router.events])

  return (
    <>

      <Head>
        <title>Capital Veículos</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Capital Veículos" />
        {/* <meta property="og:type" content="{Your content}" /> */}
        <meta property="og:description" content='A Capital Veículos é uma loja especializada na venda e compra de automóveis, sediada em Brasília - DF (Distrito Federal). Também trabalhamos com consignação de veículos e consórcio de automovéis, casa e muito mais!' />
        <meta property="og:image" content="https://res.cloudinary.com/dgpv312qk/image/upload/v1666224177/capital-capa_lkdjyk.png" color='#100f11' />
        <meta property="og:url" content="https://capitalveiculosdf.com" />
        <meta property="og:locale" content="pt_BR" />

        <meta
          name='description'
          content='A Capital Veículos é uma loja especializada na venda e compra de automóveis, sediada em Brasília - DF (Distrito Federal). Também trabalhamos com consignação de veículos e consórcio de automovéis, casa e muito mais!'
        />
      </Head>

      <AppContextProvider>
        <MUIThemeProvider theme={darkTheme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            {/* <SAnimacao /> */}
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </MUIThemeProvider>
      </AppContextProvider>
    </>
  )
}

const SAnimacao = styled.div`
    height: 100vh;
    background-color: black;
    z-index: 9999999;
    width: 1000vw;
  /* div { */
  /* } */

  /* .abertura_esquerda { */
    /* animation: leftAbertura 3.5s;
    animation-delay: 2s; */
    /* animation-duration: 2s; */
    /* animation-timing-function: ease-in-out */
  /* } */

  /* .abertura_direita {
    right: 0;
    animation: rightAbertura 3.5s;
    animation-delay: 2s;
    
  } */

  /* @keyframes rightAbertura {
    from {
      width: 50vw;
    }
    to {
      width: 0vw;
    }
  }
  @keyframes leftAbertura {
    to {
      display: none;
    }
  } */
`