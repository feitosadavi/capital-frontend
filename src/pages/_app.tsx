import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles'
import { AppContextProvider } from '../context/app.context'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Capital Veículos</title>
        <link rel="shortcut icon" href="/capital-logo.svg" style={{ width: '360px', height: '360px' }} />


        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />


        <meta
          name='description'
          content='A sua loja de carros e automóveis em geral em Brasília - DF'
        />
      </Head>

      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContextProvider>
    </>
  )
}