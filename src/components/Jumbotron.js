import React from 'react';
import logo from '../img/ubigu_logo_white.svg';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'

/** MUI */
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return {
        jumbotronContainer: {
            width: '100vw',
            height: 'calc(50vh - 52px)',
            [theme.breakpoints.down('sm')]: {
                height: 'calc(100vh - 52px)'
            },
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'space-around',
            alignItems: 'center',
            userSelect: 'none',
            flexDirection: 'column',
        },
        jumboTwo: {
            position: 'absolute',
            top: 52
        },
        video: {
            objectFit: 'cover',
            width: '100vw',
            height: "100%",
            position: 'relative'
        },
        img: {
            height: 100,
            [theme.breakpoints.down('sm')]: {
                height: 75
            }
        },
        typography: {
            color: '#FFF',
            padding: '0.25em',
            fontFamily: "titillium web !important",
            marginTop: theme.spacing(1)
        },
        span: {
            width: '100vw',
            display: 'flex',
            height: 400,
            top: 52,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
    }
})

const Jumbotron = () => {

    const intl = useIntl()
    const classes = useStyles()

    return (
        <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
                <div className={classes.container}>
                    <div className={`${classes.jumbotronContainer} ${classes.jumboTwo}`}>
                        <span className={classes.span}>
                            <img
                                src={logo}
                                alt="Ubigu"
                                className={classes.img}
                            />
                            <Hidden mdUp>
                                <Typography variant='subtitle1' className={classes.typography} align='center'>
                                    {intl.formatMessage({ id: "motto" })}
                                </Typography>
                            </Hidden>
                            <Hidden smDown>
                                <Typography variant='h6' className={`${classes.typography} ${classes.typography2}`} align='center'>
                                    {intl.formatMessage({ id: "motto" })}
                                </Typography>
                            </Hidden>
                        </span>
                    </div>
                </div>
            }
        </IntlContextConsumer>
    )
}

export default Jumbotron;