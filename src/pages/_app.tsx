import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Capital Veículos</title>

        <meta
          name='description'
          content='A sua loja de carros e automóveis em geral em Brasília - DF'
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}