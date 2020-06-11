import React from 'react'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { useIntl, Link } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl();

  const indexContent = {
    heading: 'Headeri',
    subheading: 'subheaderi',
    description: 'jotain muuta esitttelyä',
    intro: {
      blurbs: []
    }
  };

  const { heading, subheading, description, intro } = indexContent;

  return (
    <Layout>
      <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundColor: 'grey',
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'left',
              flexDirection: 'column',
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                boxShadow:
                  'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {intl.formatMessage({ id: "title" })}
            </h1>
            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                boxShadow:
                  'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {subheading}
            </h3>
          </div>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title"> {intl.formatMessage({ id: "short_description" })} </h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle"> {intl.formatMessage({ id: "long_description" })} </h3>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          {heading}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                    <Features gridItems={intro.blurbs} />
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/products">
                          See all products
                        </Link>
                      </div>
                    </div>
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest stories
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      />
    </Layout>
  )
}

export default IndexPage
