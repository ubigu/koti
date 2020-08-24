import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import Content from '../components/Content'
import People from './../components/People'
import bg from './../../static/img/teambg.png'
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


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {

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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
          markdownRemark(id: {eq: $id }) {
          html
      frontmatter {
          title
        }
    }
  }
`
