import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'

import smoothscroll from 'smoothscroll-polyfill';
import { withPrefix } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { useEffect } from 'react'

const TemplateWrapper = ({ children }) => {

  useEffect(() => {
    smoothscroll.polyfill();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>Ubigu</title>
          <meta name="description" content={"Ubigu Ltd company homepage"} />
          <script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
          <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/favicon.png`} // apple-touch-icon.png
          />

          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon.png`} // favicon-32x32.png
            sizes="32x32"
          />

          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon.png`} // favicon-16x16.png
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content="Ubigu" />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
