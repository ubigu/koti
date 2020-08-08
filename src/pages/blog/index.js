import React from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl' //eslint-disable-line
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = () => {

  const intl = useIntl();

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <Layout>
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/bg1.png')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                color: 'white',
                padding: '1rem',
                userSelect: 'none'
              }}
            >
              {intl.formatMessage({ id: 'latest' })}
            </h1>
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
    </IntlContextConsumer>
  )
}

export default BlogIndexPage