import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  taglist: {
    listStyle: 'none !important',
    marginLeft: '0 !important',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap'
  },
  posti: {
    fontWeight: 300,
    "&:hover": {
      color: "#00b4a2"
    }
  },
  heading: {
    fontWeight: '300 !important',
    marginBottom: '64px !important',
    userSelect: 'none'
  }
}));


const TagRoute = props => {

  const posts = props.data.allMarkdownRemark.edges

  const tag = props.pageContext.tag
  const totalCount = props.data.allMarkdownRemark.totalCount

  const intl = useIntl();
  const classes = useStyles();

  return (
    <Layout>
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          <section className="section">
            <Helmet title={`${tag} | ${props.data.site.siteMetadata.title}`} />
            <div className="container content">
              <div className="columns">
                <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
                  <Typography variant='h3' align='center' className={classes.heading}>
                    {`${totalCount} ${totalCount === 1 ? intl.formatMessage({ id: "n_tag" }) : intl.formatMessage({ id: "n_tags" })} '${tag}' `}
                  </Typography>
                  <ul className={classes.taglist}>
                    {posts.map(post => (
                      <li key={post.node.fields.slug}>
                        <Link to={post.node.fields.slug}>
                          <Typography variant='subtitle1' className={classes.posti}>
                            {post.node.frontmatter.title}
                          </Typography>
                        </Link>
                      </li>
                    ))
                    }
                  </ul>
                  <Typography variant='button'>
                    <Link to="/tags/">
                      {intl.formatMessage({ id: "browse_tags", defaultMessage: "More tags" })}
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        }
      </IntlContextConsumer>
    </Layout>
  )

}


export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
