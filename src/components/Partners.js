/** React */
import React from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

/** MUI */
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/** Friend logos */
import mdi from './../img/friends/mdi.svg'
import cloudpermit from './../img/friends/cloudpermit.svg'
import jamsa from './../img/friends/jamsa.svg'
import joensuu from './../img/friends/joensuu.svg'
import helsinki from './../img/friends/helsinki.svg'
import mml_fi from './../img/friends/mml_fi.svg'
import nordregio from './../img/friends/nordregio.svg'
// import ramboll from './../img/friends/ramboll.svg'
import stat_fi from './../img/friends/stat_fi.svg'
import stat_en from './../img/friends/stat_en.svg'
import stat_se from './../img/friends/stat_se.svg'
import syke from './../img/friends/syke.svg'
import tampere from './../img/friends/tampere.svg'
import tuni_fi from './../img/friends/tuni_fi.svg'
import ym_fi from './../img/friends/ym_fi.svg'
import ym_en from './../img/friends/ym_en.svg'
import ym_se from './../img/friends/ym_se.svg'
import vayla from './../img/friends/vayla.svg'
import mh from './../img/friends/mh.svg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
    holder: {
        paddingTop: theme.spacing(8),
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    chunker: {
        height: 150,
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        margin: theme.spacing(2),
        maxHeight: 150,
        minWidth: 150,
        minHeight: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none'
    },
    title: {
        userSelect: 'none',
        opacity: 0.8
    },
    friendContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const friends = [
    {
        name: {
            fi: "Tampereen kaupunki",
            en: "City of Tampere",
        },
        url: {
            fi: "https://www.tampere.fi/",
            en: "https://www.tampere.fi/en/index.html"
        },
        img: {
            fi: tampere
        },
        cols: 2
    },
    {
        name: {
            fi: "Helsingin kaupunki",
            en: "City of Helsinki",
        },
        url: {
            fi: "https://www.hel.fi/",
            en: "https://www.hel.fi/en"
        },
        img: {
            fi: helsinki
        },
        cols: 2
    },
    {
        name: {
            fi: "Ympäristöministeriö",
            en: "Ministry of the Environment",
            se: "Miljöministeriet"
        },
        url: {
            fi: "https://www.ym.fi/fi-FI",
            se: "https://www.ym.fi/sv-FI",
            en: "https://www.ym.fi/en-US"
        },
        img: {
            fi: ym_fi,
            en: ym_en,
            se: ym_se
        },
        rows: 2
    },
    {
        name: {
            fi: "Cloudpermit Oy",
            en: "Cloudpermit Ltd",
        },
        url: {
            en: "https://cloudpermit.com/",
        },
        img: {
            en: cloudpermit
        },
        cols: 2
    },
    {
        name: {
            fi: "Maanmittauslaitos",
            en: "National Land Survey Finland",
            se: "Lantmäteriverket",
        },
        url: {
            fi: "https://www.maanmittauslaitos.fi/",
            en: "https://www.maanmittauslaitos.fi/en",
            se: "https://www.maanmittauslaitos.fi/sv"
        },
        img: {
            fi: mml_fi
        },
        rows: 1
    },
    {
        name: {
            fi: "Suomen ympäristökeskus",
            en: "The Finnish Environment Institute",
            se: "Finlands miljöcentral"

        },
        url: {
            fi: "https://www.syke.fi/fi-FI",
            en: "https://www.syke.fi/en-US",
            se: "https://www.syke.fi/sv-FI",
        },
        img: {
            fi: syke,
        },
        rows: 1
    },
    {
        name: {
            fi: "Väylävirasto",
            en: "Finnish Transport Infrastructure Agency",
            se: "Trafikledsverket"
        },
        url: {
            fi: "https://vayla.fi/etusivu",
            se: "https://vayla.fi/sv/framsida",
            en: "https://vayla.fi/en/frontpage"
        },
        img: {
            fi: vayla,
            en: vayla,
            se: vayla
        },
        rows: 1.5,
        cols: 0.8
    },
    {
        name: {
            fi: "Tilastokeskus",
            en: "Statistics Finland",
            se: "Statistikcentralen"

        },
        url: {
            fi: "https://tilastokeskus.fi/index.html",
            en: "https://tilastokeskus.fi/index_en.html",
            se: "https://tilastokeskus.fi/index_sv.html",
        },
        img: {
            fi: stat_fi,
            en: stat_en,
            se: stat_se
        },
        cols: 1.5
    },
    {
        name: {
            en: "Nordregio",
        },
        url: {
            en: "https://nordregio.org/",
        },
        img: {
            fi: nordregio
        },
        cols: 2
    },
    {
        name: {
            fi: "Metsähallitus",
            en: "Metsähallitus",
            se: "Forststyrelsen"
        },
        url: {
            fi: "https://www.metsa.fi/",
            se: "https://www.metsa.fi/sv/",
            en: "https://www.metsa.fi/en/"
        },
        img: {
            fi: mh,
            en: mh,
            se: mh
        },
        rows: 1,
        cols: 3
    },
    {
        name: {
            fi: "Jämsän kaupunki",
            en: "City of Jämsä",
        },
        url: {
            fi: "https://www.jamsa.fi/",
            en: "https://www.jamsa.fi/en/"
        },
        img: {
            fi: jamsa
        },
        cols: 1.5
    },
    {
        name: {
            fi: "MDI Public Oy",
            en: "MDI Public Ltd",
        },
        url: {
            fi: "https://www.mdi.fi/",
            en: "https://www.mdi.fi/en/",
        },
        img: {
            fi: mdi,
        },
        rows: 0.3,
        cols: 0.3
    },
    {
        name: {
            fi: "Joensuun kaupunki",
            en: "City of Joensuu",
        },
        url: {
            fi: "https://www.joensuu.fi/",
            en: "https://www.joensuu.fi/en/web/english"
        },
        img: {
            fi: joensuu
        },
        cols: 2
    },
    {
        name: {
            fi: "Tampereen yliopisto",
            en: "Tampere University",
        },
        url: {
            fi: "https://www.tuni.fi/fi",
            en: "https://www.tuni.fi/en"
        },
        img: {
            fi: tuni_fi
        },
        cols: 1.5
    },
]

function chunk(arr, len) {

    var chunks = [],
        i = 0,
        n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    return chunks;
}

const Partners = () => {

    const intl = useIntl();
    const classes = useStyles();

    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.only('sm'))
    const matchXS = useMediaQuery(theme.breakpoints.only('xs'))

    const Friends = locale => {

        const chunkSize = matchXS ? 2 : matchSM ? 3 : 4;

        const chunks = chunk(friends.map((friend, index) => {
            const alt = Object.keys(friend.name).includes(locale) ? friend.name[locale] : friend.name[Object.keys(friend.name)[0]];
            const src = Object.keys(friend.img).includes(locale) ? friend.img[locale] : friend.img[Object.keys(friend.img)[0]];
            const href = Object.keys(friend.url).includes(locale) ? friend.url[locale] : friend.url[Object.keys(friend.url)[0]];

            return (
                <div key={`${friend}_${index}`} className={classes.image}>
                    <a rel="noopener noreferrer" target='_blank'
                        href={href}>
                        <img
                            style={{
                                height: friend && friend.rows && friend.rows.length > 0 ? friend.rows * 75 : 75,
                                width: friend && friend.cols && friend.cols.length > 0 ? friend.cols * friend.cols * 150 : 150
                            }}
                            alt={alt}
                            src={src}
                        ></img>
                    </a>
                </div>
            )
        }), chunkSize)

        const output = chunks.map((chunk, index) => <div key={`chunk_${index}`} className={classes.chunker}>{chunk}</div>)

        return output
    }

    return (
        <div className={classes.friendContainer}>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    <div className={classes.holder}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Typography variant='subtitle1' className={classes.title}>
                                {intl.formatMessage({ id: "friends", defaultMessage: "Some of our friends" })}:
                            </Typography>
                        </div>
                        <AutoPlaySwipeableViews>
                            {Friends(currentLocale)}
                        </AutoPlaySwipeableViews>
                    </div>

                }
            </IntlContextConsumer>
        </div>
    )
}

export default Partners