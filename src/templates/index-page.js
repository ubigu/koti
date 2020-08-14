import React, { useRef, useState, Fragment } from 'react'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron';
import Some from '../components/Some';
import Partners from '../components/Partners'
import Features from '../components/Features';
import { useIntl } from "gatsby-plugin-intl"

import './../components/ring1.scss'
import Ring1b from './../img/ring1b.inline.svg'
import Ring1a from './../img/ring1a.inline.png'
import logo from './../img/logo.svg';

/** MUI */
import { Fab, Hidden, Typography } from '@material-ui/core'
import { ArrowDownward } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    fab: {
      color: '#FFF',
      marginTop: theme.spacing(4)
    },
    fab4: {
      color: '#FFF',
      position: 'absolute',
      top: 'calc(100vh - 104px)'
    },
    fabHolder: {
      display: 'flex',
      justifyContent: 'center'
    },
    section: {
      padding: '3rem 1.5rem',
      height: '50vh'
    },
    jumbotron: {
      position: 'relative',
      display: 'flex',
      height: 'calc(100vh - 52px)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ring: {
      position: 'absolute',
      height: 1000,
      filter: props => props.hover ? 'grayscale(1)' : 'grayscale(0)',
      transition: 'filter 2s',
      maxWidth: 'none',
      maxHeight: 'none'
    },
    span: {
      position: 'absolute',
      height: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 92
    },
    typography: {
      color: '#3c3c3c',
      marginTop: 0,
      padding: '0.25em',
      fontFamily: "titillium web !important",
    },
  }
})

const scrollToRef = ref => {
  ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  //const viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  //  window.scrollBy(0, viewportH / 2);
}

const IndexPage = () => {

  const intl = useIntl()
  const featureRef = useRef(null)
  const [hover, setHover] = useState(false)
  const descRef = useRef(null)
  const classes = useStyles({ hover })

  return (
    <Layout>
      <div>
        <div className={classes.jumbotron}>
          <img src={Ring1a} id='countryObjects' className={classes.ring} ></img>
          <Ring1b className={classes.ring} />
          <span className={classes.span}>
            <img
              src={logo}
              alt="Ubigu"
              style={{ height: 100, userSelect: 'none' }}
            />
            <Typography variant='subtitle1' className={classes.typography} align='center'>
              {intl.formatMessage({ id: "motto", defaultMessage: 'Builders of a spatial information society' })}
            </Typography>
            <Fab color='primary' className={classes.fab} onClick={() => scrollToRef(descRef)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              <ArrowDownward />
            </Fab>
          </span>
        </div>
        <section className={classes.section} ref={descRef}>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile" >
                        <h1 className="title"> {intl.formatMessage({ id: "short_description" })} </h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle"> {intl.formatMessage({ id: "long_description" })} </h3>
                      </div>
                    </div>
                    <Hidden smDown>
                      <div className="columns">
                        <div className="column is-12 has-text-centered">
                          <Fab color='primary' className={classes.fab} onClick={() => scrollToRef(featureRef)}>
                            <ArrowDownward />
                          </Fab>
                        </div>
                      </div>
                    </Hidden>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div ref={featureRef}>
        <Features />
      </div>
      <Some />
      <Partners />
    </Layout >
  )
}

export default IndexPage
