import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../img/favicon.svg'
import Language from './Language'
import { IntlContextConsumer, navigate } from 'gatsby-plugin-intl'
import { useIntl } from "gatsby-plugin-intl"

const Navbar = props => {

  const intl = useIntl();
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  useEffect(() => {
    /** After state has been updated, set the class in state for the navbar accordingly **/
    setNavBarActiveClass(active ? 'is-active' : '')
  }, [active])

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a
                style={{ height: 52 }}
                href="#"
                onClick={e => {
                  e.preventDefault()
                  navigate("/")
                }}
              >
                <img src={logo} alt="Ubigu" style={{ height: '52px' }} />
              </a>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${navBarActiveClass}`}
                data-target="navMenu"
                // toggle the active boolean in the state
                onClick={() => setActive(prev => !prev)}
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
    </IntlContextConsumer>
  )
}

export default Navbar