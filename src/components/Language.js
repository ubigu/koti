import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const languageName = {
  en: 'english',
  fi: 'suomi'
};

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              href='/'
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `blue` : `grey`,
                margin: 10,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}>
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
};

export default Language;
