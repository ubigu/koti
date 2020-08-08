import React, { useState, useEffect } from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'

import { Collapse, Button, IconButton, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ExpandMore, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    buttonRoot: {
        borderRadius: "2em",
        textTransform: 'none',
        width: 250,
        fontWeight: 400,
        margin: theme.spacing(2),
        transition: "background-color 0.75s, color 0.5s",
        "&:hover": {
            backgroundColor: "#00b4a2",
            color: '#FFF',
            transition: "background-color 0.75s, color 0.5s"
        }
    },
    holder: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    collapseContainer: {
        opacity: 0.33,
        transition: 'opacity 0.33s'
    },
    collapseEntered: {
        opacity: 1,
        transition: 'opacity 0.33s'
    },
    wrapperInner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    endIcon: {
        transform: props => `rotate(${props.checked ? -180 : 0}deg)`,
        transition: "transform 0.5s"
    },
    startIcon: {
        transform: props => `rotate(${props.checked ? 180 : 0}deg)`,
        transition: "transform 0.5s"
    }
}));

const Some = props => {

    const { dataPer, dataPages, dataColumns } = props;
    const [checked, setChecked] = useState(false);
    const [page, setPage] = useState(0);

    const intl = useIntl();
    const classes = useStyles({ checked });

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.only('sm'));
    const md = useMediaQuery(theme.breakpoints.only('md'));
    const lg = useMediaQuery(theme.breakpoints.only('lg'));
    const xl = useMediaQuery(theme.breakpoints.up('xl'));

    const numPages = xs ? 12 : sm ? 6 : md ? 4 : lg ? 3 : xl ? 2 : 1;
    const margin = xs ? -412 : sm ? -824 : md ? -1236 : lg ? -1648 : xl ? -2472 : 0;

    useEffect(() => {
        const el = document.getElementsByClassName('j-stacker')[0];
        if (el) {
            el.setAttribute("style", `margin-left: ${margin * page}px`);
        }
    }, [page])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    <div className={classes.holder}>
                        <Button
                            variant='outlined'
                            classes={{ root: classes.buttonRoot, endIcon: classes.endIcon, startIcon: classes.startIcon }}
                            onClick={() => setChecked(prev => !prev)}
                            endIcon={<ExpandMore />}
                            startIcon={<ExpandMore />}
                        >
                            {intl.formatMessage({ id: "some", defaultMessage: "Social media" })}
                        </Button>
                        <Collapse in={checked} collapsedHeight={matches ? 0 : 150}
                            classes={{ container: classes.collapseContainer, entered: classes.collapseEntered, wrapperInner: classes.wrapperInner }}>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() => setPage(prev => prev !== 0 ? prev - 1 : numPages - 1)}
                            >
                                <ArrowBackIos />
                            </IconButton>
                            <ul className="juicer-feed"
                                data-feed-id="ubiguoy"
                                data-per={dataPer}
                                data-pages={dataPages}
                                data-overlay={"false"}
                                data-columns={dataColumns}
                                data-after={"console.log('seppo')"}
                            >
                                <h1 className="referral">
                                    <a href="https://www.juicer.io">Juicer</a>
                                </h1>
                            </ul>
                            <IconButton style={{borderRadius: 0}}
                                onClick={() => setPage(prev => prev < numPages - 1 ? prev + 1 : 0)}
                            >
                                <ArrowForwardIos />
                            </IconButton>
                        </Collapse>
                    </div>
                }
            </IntlContextConsumer>
        </div>



    )
}

Some.defaultProps = {
    dataPer: 14,
    dataPages: 1,
    dataColumns: 0
}

export default Some