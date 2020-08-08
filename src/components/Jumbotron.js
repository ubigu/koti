import React from 'react';
import bgVideo from "./../img/bg.mp4";
import logo from '../img/ubigu_logo_white.svg';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'

const Jumbotron = () => {

    const intl = useIntl();

    return (
        <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
                <div
                    className="full-width-image margin-top-0"
                    style={{
                        display: 'flex',
                        height: 400,
                        overflow: 'hidden',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        userSelect: 'none',
                        flexDirection: 'column',
                    }}
                >
                    <video autoPlay muted loop
                        style={{ objectFit: 'cover', width: '100vw', height: "400px", position: 'absolute', borderRadius: 1, top: 52 }}>
                        <source src={bgVideo} type="video/mp4"></source>
                    </video>
                    <span className='gradient' style={{
                        position: 'absolute',
                        width: '100vw',
                        display: 'flex',
                        height: 400,
                        top: 52,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                        <img
                            src={logo}
                            alt="Ubigu"
                            style={{ height: 100 }}
                        />
                        <h3
                            className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                            style={{
                                color: '#FFF',
                                padding: '0.25em',
                            }}
                        >
                            {intl.formatMessage({ id: "motto" })}
                        </h3>
                    </span>
                </div>
            }
        </IntlContextConsumer>
    )
}

export default Jumbotron;