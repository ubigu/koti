import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './../styles/all.sass'
import './../styles/juicer.sass'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'

import smoothscroll from 'smoothscroll-polyfill';
import { withPrefix } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../styles/theme';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => {

  useEffect(() => {
    smoothscroll.polyfill();
  }, [])

  const intl = useIntl();

  return (
    <ThemeProvider theme={theme}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          <div>
            <Helmet>
              <html lang={currentLocale} />
              <title>Ubigu</title>
              <meta name="description"
                content={intl.formatMessage({ id: "ubigu", defaultMessage: "Ubigu" }) + ' - ' + intl.formatMessage({ id: "long_description", defaultMessage: "Smart city. Smart rural. Smart everywhere." })}
              />
              <script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
              <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${withPrefix('/')}img/apple-touch-icon.png`}
              />

              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/avicon-32x32.png`}
                sizes="32x32"
              />

              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/favicon-16x16.png`}
                sizes="16x16"
              />

              <link
                rel="mask-icon"
                href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                color="#ff4400"
              />
              <meta name="theme-color" content="#00b4a2" />

              <meta property="og:type" content="website" />
              <meta property="og:title" content="Ubigu" />
              <meta property="og:url" content="https://www.ubigu.fi/" />
              <meta
                property="og:image"
                content={`${withPrefix('/')}img/og-image.jpg`}
              />
            </Helmet>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
        }
      </IntlContextConsumer>
    </ThemeProvider>
  )
}

export default TemplateWrapper
