import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Language from './Language'
import { IntlContextConsumer, navigate } from 'gatsby-plugin-intl'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
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
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    navigate("/")
                  }}
                >
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </a>
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to={`/${currentLocale}/about`}>
                    About
                  </Link>
                  <Link className="navbar-item" to={`/${currentLocale}/products`}>
                    Products
                  </Link>
                  <Link className="navbar-item" to={`/${currentLocale}/blog`}>
                    Blog
                  </Link>
                  <Link className="navbar-item" to={`/${currentLocale}/contact`}>
                    Contact
                  </Link>
                </div>
                <div className="navbar-end has-text-centered">
                  <div>
                    <Language/>
                  </div>
                  <a
                    className="navbar-item"
                    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        }
      </IntlContextConsumer>
    )
  }
}

export default Navbar
