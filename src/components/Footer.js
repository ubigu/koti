import React from 'react'
import { Link } from 'gatsby'

// import Facebook from '../img/social/facebook.inline.svg'
import Twitter from '../img/social/twitter.inline.svg'
import Linkedin from '../img/social/linkedin.inline.svg'
import Github from '../img/social/github.inline.svg';
import { Email, Place, Phone, BusinessCenter } from '@material-ui/icons'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import { useMediaQuery, Hidden, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

import logo from '../img/logo_green.png'
import bg from '../../static/img/footer.jpg';

const useStyles = makeStyles(theme => {
  return {
    footer: {
      height: 300,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      overflow: 'hidden',
      padding: 0,
      backgroundColor: 'transparent',
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: '#444'
    },
    footerIcon: {
      marginRight: '1rem'
    },
    footerLink: {
      color: '#444',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    footerSpan: {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      marginTop: theme.spacing(0.5),
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    listitemicon: {
      color: 'inherit'
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(0.5),
      '&:hover': {
        opacity: 0.75
      }
    },
    social: {
      height: 24,
      width: 24,
      fill: '#FFF'
    },
    socialContainer: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1.5),
        alignItems: 'flex-end'
      }
    },
    texti: {
      marginTop: theme.spacing(2),
      opacity: 0.5,
      userSelect: 'none'
    },
    contactscontainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        marginLeft: '1.2rem',
        marginTop: theme.spacing(1),
        marginBottom: '1.5rem'
      },
    },
    copyright: {
      userSelect: 'none',
      opacity: 0.5,
      margin: "0.5rem 0.5rem 0.5rem 0rem",
      fontSize: 12,
      [theme.breakpoints.down('sm')]: {
        marginRight: '0.8rem'
      }
    },
    logoHolder: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '1.2rem',
        alignItems: 'flex-end'
      }
    },
    logo: {
      width: 150,
      opacity: 0.5,
      marginBottom: '1rem',
      userSelect: 'none'
    },
    menuList: {
      margin: "0.5rem 0rem 0.5rem 0.5rem",
      maxWidth: 150,
      listStyle: "none !important",
      textAlign: 'left',
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        display: 'flex'
      }
    },
    navItem: {
      color: '#444',
      flexGrow: 0,
      flexShrink: 0,
      userSelect: "none",
      lineHeight: 1.5,
      padding: "0.5rem 0.75rem",
      position: "relative",
      textDecoration: "none",
      boxSizing: 'inherit',
      alignItems: "center",
      cursor: 'pointer',
      display: "flex",
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    },
    flexi: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start'
      }
    },
    menu: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    listItemText: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        marginBottom: 0
      }
    }
  }
})


const Footer = () => {

  const intl = useIntl();
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const socials = <div className={classes.socialContainer}>
    <a title="linkedin" href="https://www.linkedin.com/company/ubigu-oy">
      <Avatar className={classes.small}>
        <Linkedin className={classes.social} />
      </Avatar>
    </a>
    <a title="github" href="https://github.com/ubigu">
      <Avatar className={classes.small}>
        <Github className={classes.social} />
      </Avatar>
    </a>
  </div>


  const logoHolder = <div className={classes.logoHolder} >
    <Hidden smDown={true}>
      <img src={logo} className={classes.logo} alt='Ubigu logo' />
    </Hidden>
    {socials}
  </div>

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        <section id="contact">
          <footer className={classes.footer}>
            <Grid container justify={"space-between"} style={{ height: '100%' }}>

              <Grid item xs={12} sm={12} md={4} style={{ borderBottom: matches ? '1px solid grey' : 'none' }}>
                <section className={classes.menu}>
                  <ul className={classes.menuList}>
                    <li>
                      <Link className={classes.navItem} to={`/${currentLocale}/#`}>
                        {intl.formatMessage({ id: "tohome", defaultMessage: "Home" })}
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.navItem} to={`/${currentLocale}/about`}>
                        {intl.formatMessage({ id: "about", defaultMessage: "About" })}
                      </Link>
                    </li>
                    <li>
                      <Link className={classes.navItem} to={`/${currentLocale}/products`}>
                        {intl.formatMessage({ id: "products", defaultMessage: "What we do" })}
                      </Link>
                    </li>
                    <li>
                      <p style={{ userSelect: 'none', opacity: 0.6, width: 150, paddingLeft: 12, marginTop: matches ? 8 : 24 }}>
                      © {intl.formatMessage({ id: "ubigu" })} {new Date().getFullYear()}
                      </p>
                    </li>
                    {/*
                    <li>
                      <Link className={classes.navItem} to={`/${currentLocale}/blog`}>
                        {intl.formatMessage({ id: "blog" })}
                      </Link>
                    </li>
                    */}
                  </ul>

                </section>
              </Grid>

              <Hidden smDown={true}>
                <Grid item md={4}>
                  {logoHolder}
                </Grid>
              </Hidden>

              <Grid item xs={10} sm={8} md={4} className={classes.flexi}>
                <div className={classes.contactscontainer}>
                  <List dense disablePadding>
                    <ListItem disableGutters={matches}>
                      <a className={`${classes.footerLink} ${classes.footerSpan}`} rel="noopener noreferrer" href="mailto:info@ubigu.fi">
                        <ListItemIcon classes={{ root: classes.listitemicon }}>
                          <Email className={classes.footerIcon} /></ListItemIcon>
                        <ListItemText className={classes.listItemText}>info@ubigu.fi</ListItemText>
                      </a>
                    </ListItem>
                    <ListItem disableGutters={matches}>
                      <a className={`${classes.footerLink} ${classes.footerSpan}`} rel="noopener noreferrer" href="tel:+358504347939">
                        <ListItemIcon classes={{ root: classes.listitemicon }}>
                          <Phone className={classes.footerIcon} /></ListItemIcon>
                        <ListItemText className={classes.listItemText}>+358 50 434 7939</ListItemText>
                      </a>
                    </ListItem>
                    <ListItem disableGutters={matches}>
                      <a className={`${classes.footerLink} ${classes.footerSpan}`} target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/cDnebYWppgYST7na7">
                        <ListItemIcon classes={{ root: classes.listitemicon }}>
                          <Place className={classes.footerIcon} /></ListItemIcon>
                        <ListItemText className={classes.listItemText}>
                          Hämeenkatu 14 C 17<br></br>FI-33100 Tampere
                        </ListItemText>
                      </a>
                    </ListItem>
                    <ListItem disableGutters={matches}>
                      <a className={`${classes.footerLink} ${classes.footerSpan}`} target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/r14XnWAjrsBWCzRG8">
                        <ListItemIcon classes={{ root: classes.listitemicon }}>
                          <Place className={classes.footerIcon} /></ListItemIcon>
                        <ListItemText className={classes.listItemText}>
                          Pakkahuoneenkatu 15, FI-90100 Oulu
                        </ListItemText>
                      </a>
                    </ListItem>
                    <ListItem disableGutters={matches}>
                      <a className={`${classes.footerLink} ${classes.footerSpan}`} target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/3JCmHQh3vgQHgTdE6">
                        <ListItemIcon classes={{ root: classes.listitemicon }}>
                          <Place className={classes.footerIcon} /></ListItemIcon>
                        <ListItemText className={classes.listItemText}>
                          Kellosilta 7, FI-00520 Helsinki
                        </ListItemText>
                      </a>
                    </ListItem>
                    <ListItem disableGutters={matches}>
                      <ListItemIcon classes={{ root: classes.listitemicon }}>
                        <BusinessCenter className={classes.footerIcon} /></ListItemIcon>
                      <ListItemText className={classes.listItemText}>
                        {intl.formatMessage({ id: "vat", defaultMessage: 'Y-tunnus: 2762483-3' })}
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </Grid>

              <Hidden mdUp={true}>
                <Grid item xs={2} sm={4}>
                  {socials}
                </Grid>
              </Hidden>

            </Grid>
          </footer>
        </section >
      }
    </IntlContextConsumer >
  )
}

export default Footer