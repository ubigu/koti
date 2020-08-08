import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/github-icon.svg';
import { Copyright, Email, Place, Phone } from '@material-ui/icons'
import { IntlContextConsumer, navigate, useIntl } from 'gatsby-plugin-intl'
import { useMediaQuery, Hidden } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import logo from '../img/ubigu_logo_white.svg'

const Footer = () => {

  const intl = useIntl();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const socials = <div className="social">
    <a title="linkedin" href="https://www.linkedin.com/company/ubigu-oy">
      <img
        className="fas fa-lg"
        src={linkedin}
        alt="linkedin"
        style={{ width: '1em', height: '1em' }}
      />
    </a>
    <a title="facebook" href="https://facebook.com/ubiguoy">
      <img
        src={facebook}
        alt="Facebook"
        style={{ width: '1em', height: '1em' }}
      />
    </a>
    <a title="twitter" href="https://twitter.com/ubigusto">
      <img
        className="fas fa-lg"
        src={twitter}
        alt="Twitter"
        style={{ width: '1em', height: '1em' }}
      />
    </a>
    <a title="github" href="https://github.com/ubigu">
      <img
        className="fas fa-lg"
        src={github}
        alt="GitHub"
        style={{ width: '1em', height: '1em' }}
      />
    </a>
  </div>

  const logoHolder = <div style={{ display: 'flex', flexDirection: 'column', marginLeft: matches ? '1.2rem' : 0, justifyContent: 'center', alignItems: matches ? 'flex-end' : 'center', height: '100%' }}>
    {!matches ?
      <img src={logo} style={{ width: 150, opacity: 0.2, marginBottom: '1rem', userSelect: 'none' }}></img> :
      socials
    }
    <span style={{ marginBottom: '0.5rem', opacity: 0.75, marginRight: matches ? '0.8rem' : '0' }}>
      {intl.formatMessage({ id: "vat", defaultMessage: 'Y-tunnus: 2762483-3' })}
    </span>
    <span className="footer-span copyright" style={{ marginRight: matches ? '0.8rem' : '0' }}>
      <Copyright className="footer-icon copyright-icon" />
      {intl.formatMessage({ id: "ubigu" })} {new Date().getFullYear()}
    </span>
  </div>

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <section id="contact">
          <footer className="footer has-background-black has-text-white-ter">
            <Grid container justify={"space-between"}>

              <Grid item xs={12} sm={12} md={4} style={{ borderBottom: matches ? '1px solid white' : 'none' }}>
                <section className="menu">
                  <ul className="menu-list" style={{ display: matches ? 'flex' : 'block' }}>
                    <li>
                      <a href="#" className="navbar-item" onClick={e => {
                        e.preventDefault()
                        navigate("/")
                      }}>
                        {intl.formatMessage({ id: "tohome", defaultMessage: "Home" })}
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${currentLocale}/about`}>
                        {intl.formatMessage({ id: "about", defaultMessage: "About" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${currentLocale}/products`}>
                        {intl.formatMessage({ id: "products", defaultMessage: "What we do" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`/${currentLocale}/blog`}>
                        {intl.formatMessage({ id: "blog" })}
                      </Link>
                    </li>
                  </ul>

                </section>
              </Grid>

              <Hidden smDown={true}>
                <Grid item md={4}>
                  {logoHolder}
                </Grid>
              </Hidden>

              <Grid item xs={6} sm={6} md={4} style={{ display: 'flex', justifyContent: matches ? 'flex-start' : 'flex-end' }}>
                <div className="contactscontainer" style={{ marginLeft: matches ? '1.2rem' : 'auto', marginTop: matches ? '0.5rem' : 'auto', marginBottom: matches ? '1.5rem' : 'auto' }}>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <a className="footer-link footer-span" rel="noopener noreferrer" href="mailto:info@ubigu.fi"><Email className="footer-icon" />info@ubigu.fi</a>
                    <a className="footer-link footer-span" rel="noopener noreferrer" href="tel:+358504347939"><Phone className="footer-icon" />+358 50 434 7939</a>
                    <a className="footer-link footer-span" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/aMirZy9PWFQmfeyWA"><Place className="footer-icon" />Hämeenkatu 18 A 7<br></br>FI-33200 Tampere</a>
                  </div>
                  {!matches && socials}
                </div>
              </Grid>

              <Hidden mdUp={true}>
                <Grid item xs={6} sm={6}>
                  {logoHolder}
                </Grid>
              </Hidden>

            </Grid>
          </footer>
        </section >
      }
    </IntlContextConsumer>
  )
}

export default Footer