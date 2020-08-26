import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  tile: {
    margin: '0 !important',
    borderRadius: 4,
    position: 'relative',
    padding: '1.25rem 2.5rem 1.25rem 1.5rem',
    boxShadow: '0 0.5em 1em -0.125em rgba(36, 41, 67, 0.1), 0 0px 0 1px rgba(36, 41, 67, 0.02)',
    alignItems: 'stretch',
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 'min-content',
    backgroundColor: "#e1ebec"
  },
  title: {
    color: '#32ad98 !important',
    textAlign: 'center',
    marginTop: theme.spacing(2)
  },
  subtitle: {
    display: 'block !important',
    color: '#4a4a4a',
    textAlign: 'center',
    fontSize: "16px !important",
    fontWeight: "300 !important"
  },
  excerpt: {
    marginBottom: theme.spacing(2)
  }
}));


const BlogRoll = (props) => {

  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark

  const intl = useIntl();
  const classes = useStyles();

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => {
              if (post.frontmatter.language === intl.locale) {
                return (
                  <div className="is-parent column is-6" key={post.id}>
                    <article className={`${classes.tile} ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                              }}
                            />
                          </div>
                        ) : null}
                        <p className="post-meta">
                          <Link to={post.fields.slug}>
                            <Typography variant='h5' className={classes.title}>
                              {post.frontmatter.title}
                            </Typography>
                          </Link>
                          <Typography variant='h6' className={classes.subtitle}>
                            {post.frontmatter.date}
                          </Typography>
                        </p>
                      </header>
                      <Typography variant='body1' className={classes.excerpt}>
                        {post.excerpt}
                      </Typography>
                      <Link className="button" to={post.fields.slug}>
                        {intl.formatMessage({ id: "keep_reading", defaultMessage: "Keep reading" })} →
                      </Link>
                    </article>
                  </div>
                )
              } else {
                return <></>
              }
            })}
        </div >
      }
    </IntlContextConsumer >
  )
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                language
                title
                templateKey
                date(formatString: "DD.MM.YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
