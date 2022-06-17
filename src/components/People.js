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
import { makeStyles } from '@material-ui/core/styles';
import colors from '../styles/colors';
import linkedin from '../img/social/linkedin.inline.svg'
import { ExpandMore, Email, Phone, EmojiFlagsOutlined } from '@material-ui/icons/';

import esa from './../img/us/esa.jpg';
import ilpo from './../img/us/ilpo.jpg';
import emilia from './../img/us/emilia.jpg';
import sonja from './../img/us/sonja.jpg';
import jouko from './../img/us/jouko.jpg';
import marko from './../img/us/marko.jpg';
import janne from './../img/us/janne.jpg';
import joona from './../img/us/joona.jpg';
import ossi from './../img/us/ossi.jpg';
import miia from './../img/us/miia.jpg';
import aleksi from './../img/us/aleksi.jpg';
import ville from './../img/us/ville.jpg';
import incog from './../img/us/incognito.jpg';
import incoming from './../img/us/incoming.jpg';
import otso from './../img/us/otso.jpg';

const useStyles = makeStyles(theme => ({
    holder: {
        width: '70%',
        overflow: 'hidden',
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.only('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
    },
    cardRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 300,
        margin: theme.spacing(2),
        minHeight: 150,
    },
    img: {
        display: 'inline',
        margin: '0 auto',
        height: '100%',
        width: 'auto',
    },
    media: {
        height: 300,
        maxWidth: 300,
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
        surname: 'Lang',
        title: {
            fi: "Liiketoimintajohtaja",
            en: "COO",
            sv: "COO",
            de: "COO"
        },
        email: 'sonja.lang@ubigu.fi',
        tel: '+358 40 1899 330',
        linkedin: 'https://www.linkedin.com/in/sonja-aarnio-1355541b4/',
        description: {
            fi: `Sonja rakastaa yhteistyötä asiantuntevien ihmisten kanssa ja monitahoisten projektien luotsaamista. Vastausten löytäminen kaupunkikehityksen, maankäytön ja liikenteen ja näiden digitalisaation kysymyksiin saavat hänen suuren sydämensä sykkimään.`,
            en: `Sonja loves working together with insightful people and steering multifaceted projects. Finding answers to questions on urban development, land use and transport planning and their digitalization make her heart beat like no other.`,
        },
        powers: {
            en: ['Traffic and land use', 'Urban and regional development', 'Personal transport', 'Service networks', 'Impact assessments', 'Project management & coordination', 'Geoinformatics', 'Business intelligence'],
            fi: ['Liikenne ja maankäyttö', 'Kaupunki- ja aluekehitys', 'Henkilökuljetukset', 'Palveluverkot', 'Vaikutusten arvioinnit', 'Projektinhallinta ja -koordinointi', 'Geoinformatiikka', 'Liikkeenjohdon konsultointi']
        },
        imgs: [sonja],
        color: 'dark cool grey'
    },
    {
        firstname: 'Aleksi',
        surname: 'Nivala',
        title: {
            fi: "Paikkatietosuunnittelija",
            en: "Geospatial Expert",
            sv: "Geospatial Expert",
            de: "Geospatial Expert"
        },
        email: 'aleksi.nivala@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/aleksi-nivala-ba3034148/',
        description: {
            fi: `Ympäröivistä pohjalaisista lakeuksistaan huolimatta ei Aleksia pelota niin korkealentoinen paikkatietoanalytiikka kuin syvän päädyn paikkatietotekniset ratkaisutkaan, ja rannikolta tuntee aina tiedonhallinnan uudet tuulet.`,
            en: `Despite the surrounding Ostrobothnian plains, Aleksi is not afraid of high-flown spatial analytics nor diving into the deep end of geospatial technology, and on the shores he always senses the new winds of data management.`,
        },
        powers: {
            en: ['Geoinformatics', 'Urban and regional development', 'Spatial analytics', 'Data management', 'Service networks', 'Automated processing', 'Training', 'Traffic modelling'],
            fi: ['Paikkatietojärjestelmät', 'Kaupunki- ja aluekehitys', 'Paikkatietoanalytiikka', 'Tiedonhallinta', 'Palveluverkot', 'Prosessien automatisointi', 'Koulutukset', 'Liikennemallinnus']
        },
        imgs: [aleksi],
        color: 'light warm red'
    },
    {
        firstname: 'Otso',
        surname: 'Helenius',
        title: {
            fi: "Vanhempi asiantuntija",
            en: "Senior Expert",
            sv: "Senior Expert",
            de: "Senior Expert"
        },
        email: 'otso.helenius@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/otso-helenius/',
        description: {
            fi: `Otso on hämmästyttävä yhdistelmä arkkitehtiä, matemaatikkoa, tietojenkäsittelijää ja rakennetun ympäristön digitalisoijaa. Etenkin tietomallinnuksen, semantiikan ja standardien kudelmassa hän liikkuu kuin hämähäkki verkollaan.`,
            en: `Otso is an astonishing combination of an architect, mathematician, IT specialist and built environment digitalization expert. In the mesh of data modelling, semantics and standards he moves like a spider on its web.`,
        },
        powers: {
            en: ['Information modelling', 'Ontologies', 'Semantic web / linked data', 'Urban development', 'Maankäytön digitalisaatio', 'Standards', 'Data management', 'Databases', 'Software development'],
            fi: ['Tietomallinnus', 'Ontologiat', 'Semanttinen web / linkitetty tieto', 'Kaupunkikehitys', 'Digitalization of land use', 'Standardit', 'Tiedonhallinta', 'Tietokannat', 'Ohjelmistokehitys']
        },
        imgs: [otso],
        color: 'amarillo yellow'
    },
    {
        firstname: 'Janne',
        surname: 'Heikkilä',
        title: {
            fi: "Vanhempi sovellusarkkitehti",
            en: "Senior Software Architect",
            sv: "Senior Software Architect",
            de: "Senior Software Architect"
        },
        email: 'janne.heikkila@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/janne-heikkil%C3%A4-36a6a3159/',
        description: {
            fi: `Kuin yhdistelmä digirakennusmestaria ja -timpuria, paikkatietoratkaisuissa Janne ei pelkää ottaa sekä suunnittelijan että toteuttajan roolia. Koodirakennelmissaan hän suosii etenkin pitkäikäisiä, jämäköitä, käsin veistettyjä Java-runkoja.`,
            en: `Like a combined digital master builder and carpenter, Janne is not afraid to take the roles of both planner and builder when it comes to geospatial solutions. Especially he prefers using long-lasting, hand-carved Java frames.`,
        },
        powers: {
            en: ['Java', 'Back-end development', 'OGC standards', 'Databases', 'Spatial data infrastructures', 'Data management', 'Oskari.org'],
            fi: ['Java', 'Back-end-kehitys', 'OGC standardit', 'Tietokannat', 'Paikkatietoinfra', 'Tiedonhallinta', 'Oskari.org']
        },
        imgs: [janne],
        color: 'light petrol'
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
            en: ['Strategic land use planning', 'Digitalization of processes', 'Smart cities', 'Spatial analytics', 'Data management', 'Full-stack web development: Node.js, React, OpenLayers..', 'PostgreSQL, Geoserver, OSGeo...', 'Cartographic design'],
            fi: ['Maankäytön suunnittelu', 'Prosessien digitalisaatio', 'Älykaupungit', 'Paikkatietoanalytiikka', 'Tiedonhallinta', 'Full-stack kehitys: Node.js, React, OpenLayers...', 'PostgreSQL, GeoServer, OSGeo...', 'Kartografia']
        },
        imgs: [ilpo],
        color: 'pink'
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
            en: ['Strategic planning, BI and data visualization', 'Land use planning', 'Smart cities & regional development', 'Digitalization of processes', 'Data & spatial analytics', 'Master data management, ETL (FME)', 'PostgreSQL, Oracle...'],
            fi: ['Strateginen suunnittelu, tietojohtaminen ja datavisualisointi', 'Maankäytön suunnittelu', 'Älykaupungit ja aluekehitys', 'Prosessien digitalisaatio', 'Data- ja paikkatietoanalytiikka', 'Tiedonhallinta, ETL (FME)', 'PostgreSQL, Oracle...']
        },
        imgs: [jouko],
        color: 'dark blue'
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
            en: ['Enterprise & reference architectures', 'Digitalization of land use', 'Spatial data infrastructures', 'ETL processes (FME etc.)', 'Data management & databases', 'Full-stack ICT', 'OGC standards and OSGeo tools', 'Software development & Agile'],
            fi: ['Kokonais- ja viitearkkitehtuurit', 'Maankäytön digitalisaatio', 'Paikkatietoinfrastruktuurit', 'ETL-prosessit (FME yms.)', 'Tiedonhallinta ja tietokannat', 'Full-stack IT, järjestelmähallinta', 'Ketterä ohjelmistokehitys']
        },
        imgs: [marko],
        color: 'aqua blue'
    },
    {
        firstname: 'Ville',
        surname: 'Koivisto',
        title: {
            fi: "Paikkatietoasiantuntija",
            en: "Geospatial expert",
            sv: "Geospatial expert",
            de: "Geospatial expert"
        },
        email: 'ville.koivisto@ubigu.fi',
        // tel: '+358 407638933',
        linkedin: 'http://www.linkedin.com/in/ville-koivisto-ubigu',
        description: {
            fi: `Ville pitää strategisesta pähkäilystä ja ongelmanratkaisusta, oltiinpa sitten lautapelien taikka tiedonhallinnan, ketterän ohjelmistokehityksen ja analytiikan ratkaisujen äärellä. Maantieteilijälle ominaisesti hän näkee metsän puilta, ja vapaa-ajallaan sinne usein myös juoksee – ja yleensä myös palaa.`,
            en: `Ville is keen on strategic thinking and problem solving, whether he is playing board games or working on data management, agile software development or analytical solutions. Typical to a geographer, he sees the forest for the trees – and in his free time often runs there and back again.`,
        },
        powers: {
            en: ['QGIS, PostGIS, Geoserver, QField...', 'Python & pyqgis', 'Agile / SCRUM', 'SDIs & PaaS', 'Data and asset management', 'Spatial analytics', 'Data visualization', 'Infrastructure', 'Geopolitics and regional studies'],
            fi: ['QGIS, PostGIS, Geoserver, QField...', 'Python & pyqgis', 'Agile / SCRUM', 'Paikkatietoinfrastruktuurit & PaaS', 'Tiedon- ja omaisuudenhallinta', 'Paikkatietoanalytiikka', 'Datavisualisointi', 'Infra-alan erityiskysymykset', 'Geopolitiikka ja aluetutkimus']
        },
        imgs: [ville],
        color: 'misty blue'
    },
    {
        firstname: 'Joona',
        surname: 'Laamanen',
        title: {
            fi: "Ratkaisuarkkitehti",
            en: "Solutions architect",
            sv: "Solutions architect",
            de: "Solutions architect"
        },
        email: 'joona.laamanen@ubigu.fi',
        tel: '+358 40 8338298',
        linkedin: 'https://www.linkedin.com/in/joona-laamanen-391549128/',
        description: {
            fi: `Joona on kanssaihmisilleen harvinaisen leppoisa toveri - mutta koneille ankara käskyttäjä, jonka vahtivuorolla nämä taatusti eivät nouse kapinaan. Päinvastoin, Joonan kapellimestaroimana ohjelmistot soivat suloisesti ja koneet pyörivät kuin tanssi.`,
            en: `Joona is an exceptionally relaxed fellow to his fellow human beings - though to machines a ruthless commander, under whose watch those definitely won't rise into a rebellion! On the contrary, his compositions make software play beautifully and machines dance.`,
        },
        powers: {
            en: ['Full-stack web development', 'API development', 'Geospatial technologies', 'Software testing, CI & CD', 'Docker & Kubernetes', 'Embedded systems', 'Agile development'],
            fi: ['Full-stack kehitys', 'Rajapintakehitys', 'Paikkatietoteknologiat', 'Testaus, CI ja CD', 'Docker & Kubernetes', 'Sulautetut järjestelmät', 'Ketterä kehitys']
        },
        imgs: [joona],
        color: 'misty blue'
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
            en: ['Full-stack web development: Node.js, React, and many more', 'Geospatial technologies', 'API development', 'Database management', 'Agile development', 'Scrum-mastering', 'ICT project management'],
            fi: ['Full-stack kehitys: Node.js, React, ja paljon muuta', 'Paikkatietoteknologiat', 'Rajapintakehitys', 'Tietokantahallinta', 'Ketterä kehitys', 'Scrum-masterointi', 'IT-projektinveto']
        },
        imgs: [ossi],
        color: 'blue grey'
    },
    {
        firstname: 'Emilia',
        surname: 'Timlin',
        title: {
            fi: "Suunnittelija",
            en: "Urban planner",
            sv: "Urban planner",
            de: "Urban planner"
        },
        email: 'emilia.timlin@ubigu.fi',
        linkedin: 'https://fi.linkedin.com/in/emilia-timlin-718553203',
        description: {
            fi: `Emiliaa kiehtovat suunnittelun salat. Hänen käsissään raportit, selvitykset ja paikkatieto muuntuvat toimiviksi suunnitteluratkaisuiksi!`,
            en: `Emilia is intrigued by the depths of urban planning. In her hands, reports, analyses and geospatial information turn into functional planning solutions!`,
        },
        powers: {
            en: ['Urban planning', 'Environmental planning', 'Urban and regional development', 'Geoinformatics', 'Spatial analytics', 'Graphic design and visualization'],
            fi: ['Kaupunkisuunnittelu', 'Ympäristösuunnittelu', 'Kaupunki- ja aluekehitys', 'Paikkatietojärjestelmät', 'Graafinen suunnittelu ja visualitointi']
        },
        imgs: [emilia],
        color: 'light yellow'
    },
    {
        firstname: 'Miia',
        surname: 'Turunen',
        title: {
            fi: "Palvelumuotoilija",
            en: "Junior service designer",
            sv: "Junior service designer",
            de: "Junior service designer"
        },
        email: 'miia.turunen@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/turunenmiia/',
        description: {
            fi: `Miiaa ohjaa halu kehittää digitaalista maailmaa, jossa palvelut eivät vain muokkaa aiempia rutiineja, mutta inspiroivat rakentamaan uudella tavalla kestävää yhteiskuntaa. Miialle käyttäjä on kehitystyön keskiössä, ja teknologia palvelee ihmistä - ei toisinpäin.`,
            en: `Miia is driven by a desire to develop a digital world, in which services do not only reshape old routines, but rather inspire to build a sustainable society in a new way. For her, the user is at the heart of development, and technology serves us, not vice versa.`,
        },
        powers: {
            en: ['Service design', 'Co-development', 'Communications', 'Facilitation', 'Organization culture', 'Developing internal operations'],
            fi: ['Palvelumuotoilu', 'Yhteiskehittäminen', 'Viestintä', 'Fasilitointi', 'Organisaatiokulttuuri', 'Sisäisten toimintatapojen kehittäminen']
        },
        imgs: [miia],
        color: 'lilac violet'
    },
    {
        firstname: 'Esa',
        surname: 'Östring',
        title: {
            fi: "Vanhempi data-arkkitehti",
            en: "Senior Data Architect",
            sv: "Senior Data Architect",
            de: "Senior Data Architect"
        },
        email: 'esa.ostring@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/esa-%C3%B6string-1997136/',
        description: {
            fi: `Paikkatietovelhoista ja datamagiasta kun puhutaan, niin Esan loitsuille kalpenevat niin Merlinin mahti kuin Akvavitixin keitokset. Eikä siinä kaikki – myös koneet, koodit ja kehitysputket pysyvät hänen hallinnassaan liki taianomaisesti ilman, että menee noitumisen puolelle.`,
            en: `When talking of geospatial wizardry and data magic, even Merlin’s might and Getafix’s potions are second to Esa’s spells. That is not all – machines, code and development pipelines alike stay under his control in an enchanted manner, without having to resort to cursing.`,
        },
        powers: {
            en: ['Data analytics, processing and visualization', 'GIS', 'Software development', 'System architecture & DB design', 'Big data & IoT', 'DevOps & PaaS', 'Microservices', 'Artificial intelligence'],
            fi: ['Data-analytiikka, -prosessointi ja -visualisointi', 'Paikkatieto', 'Ohjelmistokehitys', 'Järjestelmä- ja tietokanta-arkkitehtuurit', 'Big Data & IoT', 'DevOps & PaaS', 'Mikropalvelut', 'Tekoäly']
        },
        imgs: [esa],
        color: 'pine green'
    }
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
    color: 'light cool grey'
};

const People = () => {

    const intl = useIntl();
    const classes = useStyles();

    const [expanded, setExpanded] = useState(null);
    const [hover, setHover] = useState(null)

    const handleExpandClick = name => {
        setExpanded(prev => name && prev !== name ? name : null);
    };

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
                                    <Grid key={name} item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'flex', justifyContent: 'center' }}>
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
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={person.imgs[0]}
                                                        title={person.firstname}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="subtitle1" component="h2" align='center'>
                                                            {hovering ? hover : expanded !== name ? person.title[currentLocale] : `${person.firstname}${currentLocale === 'fi' ? 'n' : "'s"} ${intl.formatMessage({ id: 'powers' })}`}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                                            {expanded !== name ? person.description[currentLocale] :
                                                                <ul style={{ listStyle: 'circle', marginLeft: 18 }}>
                                                                    {person.powers[currentLocale].map(power => <li>{power}</li>)}
                                                                </ul>
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
        </div >
    )
}

export default People