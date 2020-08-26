import React from 'react'
import Layout from '../components/Layout'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import bg from './../../static/img/teambg.jpg'

const useStyles = makeStyles(() => ({
  holder: {
    width: '100%',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 354px)',
    backgroundColor: '#d398a4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

const NotFoundPage = () => {

  const intl = useIntl();
  const classes = useStyles();

  return (
    <Layout>
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          <div className={classes.holder}>
            <Typography variant='h4' align='center' style={{ color: '#FFF', marginBottom: 16, userSelect: 'none' }}>
              {intl.formatMessage({ id: "notfound", defaultMessage: 'Not found!' })}
            </Typography>
            <Typography variant='h5' align='center' style={{ color: '#FFF', userSelect: 'none'}}>
              {intl.formatMessage({ id: "notfound_explain", defaultMessage: 'The page you were looking for does not exist.' })}
            </Typography>
          </div>
        }
      </IntlContextConsumer>
    </Layout>
  )
}

export default NotFoundPage
