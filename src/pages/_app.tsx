/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/Header/Header'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles'
import { AppContextProvider } from '../context/app.context'
import { Footer, Loading } from '../components'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { useRouter } from 'next/router'

import NProgress from 'nprogress'

import * as fbq from '../lib/fpixel'
import Script from 'next/script'

import '/public/css/nprogress.min.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App ({ Component, pageProps }: AppProps) {

  const router = useRouter()

  type TurnLoadingScreenOffInput = {
    loaders: HTMLCollectionOf<Element>,
    globalLoader: Element,
    loadingScreenLogo: Element
  }
  const turnLoadingScreenOff = ({ loaders, globalLoader, loadingScreenLogo }: TurnLoadingScreenOffInput) => {
    setTimeout(() => {
      loaders[0]?.classList.add('fade')
      loaders[1]?.classList.add('fade')
      loadingScreenLogo?.classList.add('loadingScreenLogo__fadeout')
      setTimeout(() => {
        globalLoader?.remove()
        NProgress.done()
      }, 1500)
    }, 2500)
  }

  const handleLoadingScreen = () => {
    if (typeof window !== 'undefined') {
      NProgress.start()
      const globalLoader = document.getElementsByClassName('globalLoader')[0];
      const loaders = document.getElementsByClassName('loader');
      const loadingScreenLogo = document.getElementsByClassName('loadingScreenLogo')[0];
      if (loaders.length) turnLoadingScreenOff({ loaders, globalLoader, loadingScreenLogo })
    }
  }

  React.useEffect(() => {
    handleLoadingScreen()

    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChangeStart = (url: any) => {
      console.log(`Loading: ${url}`);
      NProgress.start()
    }

    const handleRouteChangeComplete = () => {
      NProgress.done()
      fbq.pageview()
    }

    const handleRouteChangeError = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [router.events]) 

  return (
    <>

      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      <Head>
        <title>Capital Veículos</title>

        <meta name="facebook-domain-verification" content="fssvqukl4knx9q2ahjy37ndn476t7c" />


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

            <div className="globalLoader">
              <div className="loader loader__2"></div>
              <Loading position='fixed' logoLoading />
              <div className="loader loader__1"></div>
            </div>

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