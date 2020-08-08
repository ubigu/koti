import React, { useState } from 'react'
import clsx from 'clsx';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl' //eslint-disable-line
import {
    useMediaQuery, //eslint-disable-line
    Grid,
    IconButton,
    Card,
    CardHeader,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
    SvgIcon,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import colors from './colors';
import linkedin from '../img/social/linkedin.inline.svg'
import { ExpandMore, Email, Phone } from '@material-ui/icons/';

import ilpo from './../img/us/it_300x200.jpg';
import jouko from './../img/us/jj_300x200.jpg';
import marko from './../img/us/mk_300x200.jpg';
import ossi from './../img/us/ot_300x200.jpg';
import incog from './../img/us/incognito.jpg';

const useStyles = makeStyles(theme => ({
    holder: {
        width: '90%',
        overflow: 'hidden',
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    cardRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: 345,
        margin: theme.spacing(2),
        minHeight: 150
    },
    img: {
        display: 'inline',
        margin: '0 auto',
        height: '100%',
        width: 'auto',
    },
    media: {
        height: 200,
        maxWidth: 400
    },
    imgCropper: {
        width: 150,
        height: 175,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10
    },
    cardHeader: {
        height: 72,
        minWidth: 250,
        userSelect: 'none'
    },
    cardTitle: {
        fontSize: 18,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const us = [
    {
        firstname: 'Ilpo',
        surname: 'Tammi',
        title: {
            fi: "Toimitusjohtaja",
            en: "CEO",
            sv: "Verkställande direktör",
            de: "Geschäftsführer"
        },
        email: 'ilpo.tammi@ubigu.fi',
        tel: '+358 504347939',
        linkedin: 'https://www.linkedin.com/in/ilpo-tammi-922ab360',
        description: {
            fi: `Silloin kun Ilpo ei luotsaa toimiston toimintaa läpi tyrskyjen, hän uppoutuu tutkimusmatkailuun koodin, datan, analytiikan, visualisointien ja suunnittelun parissa palkitulla pieteetillä.`,
            en: `When Ilpo is not navigating the office around swells and shoals, he immerses himself in expeditions into data, analytics, visualizations and planning thematics with awarded devotion.`,
        },
        powers: {
            en: ['Full-stack web development: Node.js, React, OpenLayers..', 'PostgreSQL, Geoserver'],
            fi: ['Full-stack devaus: Node.js, React, OpenLayers...', 'PostgreSQL, GeoServer']
        },
        imgs: [ilpo],
        color: 'lilac violet'
    },
    {
        firstname: 'Jouko',
        surname: 'Järnefelt',
        title: {
            fi: "Vanhempi analyytikko",
            en: "Senior Analyst",
            sv: "Senior analytiker",
            de: "Senior Analyst"
        },
        email: 'jouko.jarnefelt@ubigu.fi',
        tel: '+358 503733638',
        linkedin: 'https://www.linkedin.com/in/jouko-j%C3%A4rnefelt-a67b2952',
        description: {
            fi: `Jouko on kiipeily- ja suunnistusmiehiä. Oli edessä sitten seinämä graniittia, sateinen suo, analyysien aarniometsä taikka tiedolla johtamisen kivinen tie, Jouko löytää aina tiensä perille.`,
            en: `Jouko is a passionate climber and orienteer. Whether he's facing a wall of granite, a misty mire, an abyss of analyses or a rocky road of business intelligence, Jouko always finds a way.`,
        },
        imgs: [jouko],
        color: 'pine green'
    },
    {
        firstname: 'Marko',
        surname: 'Kauppi',
        title: {
            fi: "Teknologiajohtaja",
            en: "CTO",
            sv: "CTO",
            de: "CTO"
        },
        email: 'marko.kauppi@ubigu.fi',
        tel: '+358 405510498',
        linkedin: 'https://www.linkedin.com/in/marko-kauppi-561a5252/',
        description: {
            fi: `Marko on rakentajaluonne, joka ei voi vastustaa konepellin alle katsomista. Kehitettyään toista vuosikymmentä paikkatiedon kokonaisarkkitehtuuria, kenties jo järjestelmätkin tuntevat hänet.`,
            en: `Marko is characteristically a constructor, who can't resist a look under the hood. After a dozen of years developing spatial data infrastructures, even the systems seem to know him by now.`,
        },
        imgs: [marko],
        color: 'berry red'
    },
    {
        firstname: 'Ossi',
        surname: 'Tammi',
        title: {
            fi: "Vanhempi IT-konsultti",
            en: "Senior IT consultant",
            sv: "Senior IT-konsult",
            de: "Senior IT-Experte"
        },
        email: 'ossi.tammi@ubigu.fi',
        tel: '+358 504368642',
        linkedin: 'https://www.linkedin.com/in/ossitammi/',
        description: {
            fi: `Ossi on kielipää - puhuu koneiden kanssa sujuvasti syntaksista riippumatta. Intohimosta halonhakkuuseen lienee tullut myös kyky kasata kaunista Full Stack -koodipinoa.`,
            en: `Ossi is a polyglot - talks fluently with machines regardless of the language. A man passionate about chopping wood - he even knows how to (com)pile code into beautiful Full Stacks.`,
        },
        imgs: [ossi],
        color: 'grey blue'
    },
]

const incognito = {
    firstname: '',
    surname: '',
    title: {
        fi: "Keksi tittelisi",
        en: "What would you like to do?",
        sv: "Senior IT-konsult",
        de: "Senior IT-Experte"
    },
    email: 'info@ubigu.fi',
    tel: '+358 50 4347939',
    linkedin: 'https://www.linkedin.com/company/ubigu-oy',
    description: {
        fi: `Kyl ain porukkaan mahtuis hyvii tyypei.`,
        en: `We are always interested in expanding our team with nice people.`,
    },
    imgs: [incog],
    color: 'grey blue'
};

const People = () => {

    const intl = useIntl();
    const classes = useStyles();

    const [expanded, setExpanded] = useState(null);
    const [hover, setHover] = useState(null)

    const handleExpandClick = name => {
        setExpanded(prev => name && prev !== name ? name : null);
    };

    const theme = useTheme();  //eslint-disable-line
    // const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
    //  const matchesSM = useMediaQuery(theme.breakpoints.only('sm'));

    const persons = [...us.sort(
        (a, b) => a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : a.firstname > b.firstname ? 1 : b.firstname > a.firstname ? -1 : 0
    ), incognito]

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    <div className={classes.holder}>
                        <Grid container spacing={2} justify={'center'}>

                            {persons.map(person => {

                                const name = person.firstname !== '' ? person.firstname + ' ' + person.surname : '';
                                const hovering = [person.tel, person.email].includes(hover);

                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Card className={classes.cardRoot} style={{ maxHeight: expanded === name ? 750 : 'auto' }}>
                                            <div style={{ height: '100%' }}>
                                                <CardHeader
                                                    classes={{ root: classes.cardHeader, title: classes.cardTitle }}
                                                    avatar={
                                                        <Avatar aria-label={person.firstname} style={{ backgroundColor: colors.find(c => c.name === person.color).color }}>
                                                            {name ? person.firstname.slice(0, 1) + person.surname.slice(0, 1) : '?'}
                                                        </Avatar>
                                                    }
                                                    title={name}
                                                    titleTypographyProps={{
                                                        align: 'left'
                                                    }}
                                                />

                                                <CardActionArea style={{ top: 0 }}>
                                                    {expanded !== name &&
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={person.imgs[0]}
                                                            title={person.firstname}
                                                        />}
                                                    <CardContent>
                                                        {expanded !== name &&
                                                            <Typography gutterBottom variant="subtitle1" component="h2" align='center'>
                                                                {hovering ? hover : person.title[currentLocale]}
                                                            </Typography>}
                                                        <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                                            {expanded !== name ? person.description[currentLocale] :
                                                                <span>{intl.formatMessage({ id: 'powers' })}:<br /><br />
                                                                    <ul style={{ listStyle: 'circle', marginLeft: 18 }}>
                                                                        {person.powers[currentLocale].map(power => <li>{power}</li>)}
                                                                    </ul>
                                                                </span>
                                                            }
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </div>
                                            <CardActions disableSpacing>
                                                <a href={`mailto:${person.email}`} rel="noreferrer noopener" target='_blank'>
                                                    <IconButton aria-label="email" onMouseEnter={() => setHover(person.email)} onMouseLeave={() => setHover(null)}>
                                                        <Email style={{ opacity: 0.66 }} />
                                                    </IconButton>
                                                </a>
                                                <a href={`tel:${person.tel}`} rel="noreferrer noopener" target='_blank'>
                                                    <IconButton aria-label="phone" onMouseEnter={() => setHover(person.tel)} onMouseLeave={() => setHover(null)}>
                                                        <Phone style={{ opacity: 0.66 }} />
                                                    </IconButton>
                                                </a>
                                                <a href={person.linkedin} rel="noreferrer noopener" target='_blank'>
                                                    <IconButton aria-label="linkedin">
                                                        <SvgIcon component={linkedin}
                                                            style={{ height: 18, width: 18, opacity: 0.66 }} />
                                                    </IconButton>
                                                </a>
                                                {person.powers &&
                                                    <IconButton
                                                        className={clsx(classes.expand, {
                                                            [classes.expandOpen]: expanded === name,
                                                        })}
                                                        onClick={() => handleExpandClick(name)}
                                                        aria-expanded={expanded === name}
                                                        aria-label="show more"
                                                    >
                                                        <ExpandMore />
                                                    </IconButton>}
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                }
            </IntlContextConsumer>
        </div>
    )
}

export default People