import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {
  Avatar
} from '@material-ui/core';

import esa from './../img/us/esa.jpg';
import ilpo from './../img/us/ilpo.jpg';
import sonja from './../img/us/sonja.jpg';
import jouko from './../img/us/jouko.jpg';
import marko from './../img/us/marko.jpg';
import joona from './../img/us/joona.jpg';
import ossi from './../img/us/ossi.jpg';
import miia from './../img/us/miia.jpg';
import ville from './../img/us/ville.jpg';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  author,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  const resolveAuthorImage = (author) => {
    switch (author) {
      case 'Ilpo Tammi': return ilpo;
      case 'Marko Kauppi': return marko;
      case 'Esa Östring': return esa;
      case 'Sonja Aarnio': return sonja;
      case 'Miia Turunen': return miia;
      case 'Jouko Järnefelt': return jouko;
      case 'Joona Laamanen': return joona;
      case 'Ossi Tammi': return ossi;
      case 'Ville Koivisto': return ville;
    }
  }

  return (
    
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="blogtitle is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <span style={{marginTop: 16, marginBottom: 16, display: 'inline-flex', flexDirection: 'row', verticalAlign: 'center', alignItems: 'center'}}>
            <Avatar style={{width: 56, height: 56}} alt={author} src={resolveAuthorImage(author)}/>
            <p style={{fontWeight: 600, margin: 16}}>{author}</p>
            <p>{date}</p>
            </span>
            <p style={{marginTop: 16}}>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `2rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta property="og:title" content="Ubigu - Blog" />
            <meta name="date" content={`${post.frontmatter.date}`} />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        author={post.frontmatter.author}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        language
        author
        tags
      }
    }
  }
`
