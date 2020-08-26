import React from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import People from './../components/People'
import bg from './../../static/img/teambg.jpg'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  jumbotron: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    objectFit: 'cover',
    display: 'flex',
    filter: 'hue-rotate(30deg)',
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

const AboutPage = () => {

  const intl = useIntl();
  const classes = useStyles();

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <Layout>
          <div className={classes.jumbotron}>
            <Typography variant="h2" className={classes.typography}>
              {intl.formatMessage({ id: "team", defaultMessage: "Team" })}
            </Typography>
          </div>
          <People />
        </Layout>
      }
    </IntlContextConsumer>
  )
}

export default AboutPage