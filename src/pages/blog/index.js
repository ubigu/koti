import React from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl' //eslint-disable-line
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import bg from './../../../static/img/teambg.jpg'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  jumbotron: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    objectFit: 'cover',
    display: 'flex',
    filter: 'hue-rotate(20deg)',
    opacity: 0.9,
    height: 300,
    width: '100vw',
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    userSelect: 'none',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      height: 200
    }
  },
  typography: {
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    }
  }
}));


const BlogIndexPage = () => {

  const intl = useIntl();
  const classes = useStyles();

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <Layout>
          <div className={classes.jumbotron}>
            <Typography variant="h2" className={classes.typography}>
              {intl.formatMessage({ id: 'latest' })}
            </Typography>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </Layout>
      }
    </IntlContextConsumer >
  )
}

export default BlogIndexPage