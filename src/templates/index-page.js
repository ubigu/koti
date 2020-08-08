import React from 'react'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Jumbotron from '../components/Jumbotron';
import Some from '../components/Some';
import Partners from '../components/Partners'

import { useIntl, Link } from "gatsby-plugin-intl"


//import mojs from '@mojs/core'
/*
class Heart extends mojs.CustomShape {
  getShape() { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
  getLength() { return 200; } // optional
}
mojs.addShape('heart', Heart); // passing name and Bubble class
*/
const IndexPage = () => {

  const intl = useIntl();
  /*
    useEffect(() => {
      const heart = new mojs.Shape({
        parent: "#animation",
        shape: 'heart', // <--- shape of heart is now available!
        fill: 'red',
        stroke: 'red',
        scale: { 0: 1 },
        strokeWidth: { 50: 0 },
        y: -20,
        duration: 1000,
      })
  
      new mojs.Timeline({
        repeat: 999
      }).add(heart).play()
  
    }, [])
  */
  return (
    <Layout>
      <div>
        <Jumbotron />

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
                          {intl.formatMessage({ id: "intro" })}
                        </h3>
                      </div>
                    </div>
                    <Features gridItems={[]} />
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/products">
                          See all products
                        </Link>
                      </div>
                    </div>
                    {/*<
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
                    </div>              */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Some />
      <Partners />
    </Layout>
  )
}

export default IndexPage
