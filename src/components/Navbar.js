import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../img/favicon.svg'
import Language from './Language'
import { IntlContextConsumer } from 'gatsby-plugin-intl'
import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    homeButton: {
      lineHeight: 0
    },
    navItem: {
      color: '#444',
      flexGrow: 0,
      flexShrink: 0,
      userSelect: "none",
      lineHeight: 1.5,
      padding: "0.5rem 0.75rem",
      position: "relative",
      textDecoration: "none",
      boxSizing: 'inherit',
      alignItems: "center",
      cursor: 'pointer',
      display: "flex",
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    }
  }
})

const Navbar = props => {

  const classes = useStyles();
  const intl = useIntl();
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  useEffect(() => {
    /** After state has been updated, set the class in state for the navbar accordingly **/
    setNavBarActiveClass(active ? 'is-active' : '')
  }, [active])

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link className={classes.homeButton} to={`/${currentLocale}/#`}>
                <img src={logo} alt="Ubigu" style={{ height: '52px' }} />
              </Link>
              <div
                role="button"
                tabIndex={0}
                className={`navbar-burger burger ${navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => setActive(prev => !prev)}
                onKeyDown={() => setActive(prev => !prev)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" id="aboutlink" to={`/${currentLocale}/about`}>
                  {intl.formatMessage({ id: "about" })}
                </Link>
                <Link className="navbar-item" id="productlink" to={`/${currentLocale}/products`}>
                  {intl.formatMessage({ id: "products" })}

                </Link>
                <Link className="navbar-item" id="bloglink" to={`/${currentLocale}/blog`}>
                  {intl.formatMessage({ id: "blog" })}
                </Link>
                <a className="navbar-item" id="contactlink" href="#contact">
                  {intl.formatMessage({ id: "contact" })}
                </a>
              </div>
              <div className="navbar-end has-text-centered">
                <div>
                  <Language />
                </div>
              </div>
            </div>
          </div>
        </nav>
      }
    </IntlContextConsumer >
  )
}

export default Navbar