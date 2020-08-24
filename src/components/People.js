import React, { useState } from 'react'
import clsx from 'clsx';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl' //eslint-disable-line
import {
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

import ilpo from './../img/us/ilpo.jpg';
import sonja from './../img/us/sonja.jpg';
import jouko from './../img/us/jouko.jpg';
import marko from './../img/us/marko.jpg';
import ossi from './../img/us/ossi.jpg';
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
        width: 300,
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
        height: 300,
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
    typography: {
        margin: theme.spacing(4),
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            fontSize: 14
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%',
            fontSize: 14
        },
        userSelect: 'none'
    }
}));

const us = [
    {
        firstname: 'Sonja',
        surname: 'Aarnio',
        title: {
            fi: "Liiketoimintajohtaja",
            en: "COO",
            sv: "COO",
            de: "COO"
        },
        email: 'sonja.aarnio@ubigu.fi',
        tel: '+358 40 1899 330',
        linkedin: 'https://www.linkedin.com/in/sonja-aarnio-1355541b4/',
        description: {
            fi: `Sonja rakastaa yhteistyötä asiantuntevien ihmisten kanssa ja monitahoisten projektien luotsaamista. Vastausten löytäminen kaupunkikehityksen, maankäytön ja liikenteen ja näiden digitalisaation kysymyksiin saavat hänen suuren sydämensä sykkimään.`,
            en: `Sonja loves working together with insightful people and steering multifaceted projects. Finding answers to questions on urban development, land use and traffic planning and their digitalization make her heart beat like no other.`,
        },
        powers: {
            en: ['Land use planning', 'Traffic planning', 'Traffic systems', 'Service networks', 'Impact assessments', 'Project management', 'Geoinformatics', 'Business intelligence', 'Real estate'],
            fi: ['Maankäytön suunnittelu', 'Liikennesuunnittelu', 'Liikennejärjestelmät', 'Palveluverkot', 'Vaikutusten arvioinnit', 'Projektinhallinta', 'Geoinformatiikka', 'Liikkeenjohdon konsultointi', 'Kiinteistösektorin tuntemus']
        },
        imgs: [sonja],
        color: 'lilac violet'
    },
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
            en: ['Strategic land use planning', 'Digitalization of processes', 'Smart cities', 'Spatial analytics', 'Data management', 'Full-stack web development: Node.js, React, OpenLayers..', 'PostgreSQL, Geoserver', 'Cartographic design'],
            fi: ['Maankäytön suunnittelu', 'Prosessien digitalisaatio', 'Älykaupungit', 'Paikkatietoanalytiikak', 'Tiedonhallinta', 'Full-stack kehitys: Node.js, React, OpenLayers...', 'PostgreSQL, GeoServer', 'Kartografia']
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
            fi: `Jouko on kiipeily- ja suunnistusmiehiä. Oli edessä sitten seinämä graniittia, sateinen suo, analyysien aarniometsä taikka tiedon hallinnan ja tietojohtamisen kivinen tie, Jouko löytää aina tien perille.`,
            en: `Jouko is a passionate climber and orienteer. Whether he's facing a wall of granite, a misty mire, an abyss of analyses or a rocky road of data management and business intelligence, Jouko will find a way.`,
        },
        powers: {
            en: ['Strategic planning', 'Regional development', 'Digitalization of processes', 'Smart cities & Urban studies', 'Spatial analytics', 'Master data management', 'ETL (FME)', 'PostgreSQL', 'Data visualization'],
            fi: ['Maankäytön suunnittelu', 'Prosessien digitalisaatio', 'Älykaupungit', 'Paikkatietoanalytiikak', 'Tiedonhallinta', 'Full-stack kehitys: Node.js, React, OpenLayers...', 'PostgreSQL, GeoServer', 'Kartografia']
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
        powers: {
            en: ['Enterprise architecture', 'Reference architectures', 'Spatial data infrastructures', 'ETL processes', 'Digitalization of land use and planning', 'Data management', 'Full-stack ICT', 'PostgreSQL, GeoServer'],
            fi: ['Kokonaisarkkitehtuurit', 'Viitearkkitehtuurit', 'Paikkatietoinfrastruktuuri', 'ETL-prosessit', 'Maankäytön digitalisaatio', 'Tiedonhallinta', 'Full-stack IT', 'PostgreSQL, GeoServer']
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
        powers: {
            en: ['Full-stack web development: Node.js, React, geospatial...', 'API development', 'Database management', 'Agile development', 'Scrum mastering', 'ICT project management'],
            fi: ['Full-stack kehitys: Node.js, React, geospatialiset kirjastot...', 'Rajapintakehitys', 'Tietokantahallinta', 'Ketterä kehitys', 'Scrum masterointi', 'IT-projektinveto']
        },
        imgs: [ossi],
        color: 'grey blue'
    },
]

const incognito = {
    firstname: '',
    surname: '',
    title: {
        fi: "Sinä?",
        en: "You?",
        sv: "Du?",
        de: "Sie?"
    },
    email: 'info@ubigu.fi',
    tel: '+358 50 4347939',
    linkedin: 'https://www.linkedin.com/company/ubigu-oy',
    description: {
        fi: `Olemme aina kiinnostuneet laajentamaan joukkoamme mukavilla ja osaavilla tyypeillä, jotka eivät pelkää savea käsissään. Kenties sinä olet yksi heistä?`,
        en: `We are always interested in expanding our team with nice, talented people, who are not afraid of getting one's hands dirty. Perhaps you are one of them?`,
    },
    imgs: [incog],
    color: 'pink'
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
                        <Grid container spacing={2}
                            justify={'center'}>

                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='body1' align='center' className={classes.typography}>
                                    {intl.formatMessage({ id: 'notjust' })}
                                    <br /><br />
                                    {intl.formatMessage({ id: 'founded' })}
                                </Typography>
                            </Grid>

                            {persons.map(person => {

                                const name = person.firstname !== '' ? person.firstname + ' ' + person.surname : '';
                                const hovering = [person.tel, person.email].includes(hover);

                                return (
                                    <Grid key={name} item xs={12} sm={6} md={4} lg={3} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
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
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant='body1' align='center' className={classes.typography}>
                                    {intl.formatMessage({ id: 'theresmore1' })}
                                    <br /><br />
                                    {intl.formatMessage({ id: 'theresmore2' })}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                }
            </IntlContextConsumer>
        </div>
    )
}

export default People