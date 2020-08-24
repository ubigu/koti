import React, { useState } from "react";
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import fi from '../img/locale/fi.svg'
import en from '../img/locale/en.svg'
import de from '../img/locale/de.svg'
import se from '../img/locale/se.svg'
import { ClickAwayListener, Button, useMediaQuery, Hidden, Fade } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Language as LanguageIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonRoot: {
    borderRadius: 0,
    height: '100%',
    fontWeight: 400,
    transition: "background-color 0.75s, color 0.5s",
    "&:hover": {
      backgroundColor: "#00b4a2",
      color: '#FFF',
      transition: "background-color 0.75s, color 0.5s"
    }
  },
  tooltip: {
    zIndex: 9999,
  },
  buttons: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  colorButton: {
    color: theme.palette.primary
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    maxHeight: 36
  },
  menuItem: {
    height: 36
  }
}));

const Language = () => {

  const [open, setOpen] = useState(false)

  const handleClick = language => {
    changeLocale(language)
    setOpen(prev => !prev);
  }

  const handleClose = event => {
    setOpen(false);
  };

  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        <div className={classes.root}>
          {open && <ClickAwayListener onClickAway={handleClose}>
            <Fade in={open} timeout={{ enter: 500, exit: 500 }}>
              <div className={classes.buttons}>
                {languages.map(lang =>
                  <Button
                    key={lang}
                    disabled={lang === currentLocale}
                    variant="text"
                    classes={{ root: classes.buttonRoot }}
                    aria-owns={open ? 'languageChange' : null}
                    aria-haspopup="true"
                    onClick={() => handleClick(lang)}
                  >
                    <img alt='toggle language change' src={lang === 'fi' ? fi : lang === 'en' ? en : lang === 'de' ? de : lang === 'se' ? se : ''}
                      style={{ width: 16, marginRight: 8 }} />{lang}
                  </Button>
                )}
              </div>
            </Fade>
          </ClickAwayListener>}
          <Hidden smDown={matches && open}>
            <Button
              variant="text"
              classes={{ root: classes.buttonRoot }}
              color='primary'
              aria-owns={open ? 'languageChange' : null}
              aria-haspopup="true"
              onClick={() => setOpen(prev => !prev)}
            >
              <LanguageIcon />
            </Button>
          </Hidden>
        </div>
      }
    </IntlContextConsumer>
  );

};

export default Language;
