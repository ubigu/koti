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
import linkedin from '../img/social/linkedin.inline.svg'
import { ExpandMore, Email, Phone } from '@material-ui/icons/';

import esa from './../img/us/esa.png';
import ilpo from './../img/us/ilpo.png';
import emilia from './../img/us/emilia.png';
import emmi from './../img/us/emmi.png';
import sonja from './../img/us/sonja.png';
import jouko from './../img/us/jouko.png';
import marko from './../img/us/marko.png';
import janne from './../img/us/janne.png';
import joona from './../img/us/joona.png';
import ossi from './../img/us/ossi.png';
import miia from './../img/us/miia.jpg';
import jenni from './../img/us/jenni.png';
import mikael from './../img/us/mikael.png';
import petri from './../img/us/petri.png';
import aleksi from './../img/us/aleksi.png';
import ville from './../img/us/ville.png';
import samuli from './../img/us/samuli.png';
import pekka from './../img/us/pekka.png';
import tuukka from './../img/us/tuukka.png';
import incog from './../img/us/incognito.png';
import henrika from './../img/us/henrika.png';
import jannep from './../img/us/jannep.png';
import otso from './../img/us/otso.png';
import sofia from './../img/us/sofia.png';
import petteri from './../img/us/petteri.png';
import teijo from './../img/us/teijo.png';
import josefiina from './../img/us/josefiina.png';
import simo from './../img/us/simo.png';

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
        blur: '2em'
    },
    media: {
        height: 300,
        maxWidth: 300,
        backgroundColor: '#d5eaebc2'
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
        boss: true,
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
            fi: `Sonja rakastaa yhteistyötä asiantuntevien ihmisten kanssa ja monitahoisten projektien luotsaamista. Vastausten löytäminen kaupunkikehityksen, maankäytön ja liikenteen sekä näiden digitalisaation kysymyksiin saavat hänen suuren sydämensä sykkimään.`,
            en: `Sonja loves collaborating with talented people and leading complex projects successfully. Discovering solutions to the challenges of urban development, land-use and transport planning as well as their digitalization make her heart race.`,
            sv: `Sonja älskar att samarbeta med duktiga människor och leda komplexa projekt framgångsrikt. Att upptäcka lösningar på utmaningarna med stadsutveckling, markanvändning och transportplanering samt deras digitalisering får hennes hjärta att rasa.`
        },
        powers: {
            en: ['Traffic and land-use', 'Urban and regional development', 'Personal transport', 'Service networks', 'Impact assessment', 'Project management & coordination', 'Geoinformatics', 'Business intelligence'],
            sv: ['Trafik och markanvändning', 'Stads- och regionalutveckling', 'Personliga transporter', 'Servicenätverk', 'Konsekvensbedömning', 'Projektledning och samordning', 'Geoinformatik', 'Business Intelligence'],
            fi: ['Liikenne ja maankäyttö', 'Kaupunki- ja aluekehitys', 'Henkilökuljetukset', 'Palveluverkot', 'Vaikutustenarviointi', 'Projektinhallinta ja -koordinointi', 'Geoinformatiikka', 'Liikkeenjohdon konsultointi']
        },
        imgs: [sonja]
    },
    {
        firstname: 'Simo',
        surname: 'Turunen',
        boss: true,
        title: {
            fi: "Myyntijohtaja",
            en: "Head of Sales",
            sv: "Head of Sales",
            de: "Head of Sales"
        },
        email: 'simo.turunen@ubigu.fi',
        tel: '+358458719091',
        linkedin: 'https://www.linkedin.com/in/simoturunen/',
        description: {
            fi: `Saapui Simo sisämaasta, Savon saloilta salaisilta.
            Meni maailman mantuja, teki taiten tietotyötä. 
            Sivelsi suunnitelmat, kartoin kuvasi kaupungit.
            Iski into IT-alaan, myyntimieheks muovautui.
            Peri purren piskuisen, priimaks pisti puunaten.
            Maja Mansen moreenilla, navigoi nyt Nässyänsä.
            Milloin mieles markkinat, kulloin kaupan käynti.
            `,
            en: `Simo arriveth from inland, from smoky Finnish heartlands.
                Travelled and saw the world, honed his skill in information work.
                With a stroke of a brush, planned new cities and painted maps.
                In a flash of thought, moved deeper onto sales and tech.
                Got an old boat from his gramps, made it gleam.
                Now he's sailing on, on familiar waters of sales and biz.
                `,
            sv: `Simo kommer från inlandet, från rökiga finska hjärtan.
            Reste och såg världen, finslipade sin skicklighet i informationsarbete.
            Med ett penseldrag, planerade nya städer och målade kartor.
            I en blixt av tanke, flyttade djupare in på försäljning och teknik.
            Fick en gammal båt av sin farfar, fick den att glänsa.
            Nu seglar han vidare, på välbekanta vatten av försäljning och biz.
            `
        },
        powers: {
            en: ['Sales', 'Key Account Management', 'Urban and regional development', 'Geoinformatics', 'Project management', 'Business Intelligence'],
            sv: ['Försäljning', 'Key Account Management', 'Stads- och regionalutveckling', 'Geoinformatik', 'Projektledning', 'Business Intelligence'],
            fi: ['Myynti', 'Avainasiakkuuksien hallinta', 'Kaupunki- ja aluekehitys', 'Paikkatieto', 'Projektinhallinta ja -koordinointi', 'Tiedolla johtaminen']
        },
        imgs: [simo]
    },
    {
        firstname: 'Aleksi',
        surname: 'Nivala',
        boss: false,
        title: {
            fi: "Paikkatietosuunnittelija",
            en: "Geospatial Expert",
            sv: "Geospatial expert",
            de: "Geospatial Expert"
        },
        email: 'aleksi.nivala@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/aleksi-nivala-ba3034148/',
        description: {
            fi: `Ympäröivistä pohjalaisista lakeuksistaan huolimatta ei Aleksia pelota niin korkealentoinen paikkatietoanalytiikka kuin syvän päädyn paikkatietotekniset ratkaisutkaan. Rannikolta käsin hän tuntee aina tiedonhallinnan uudet tuulet.`,
            en: `Despite of being rooted in the flat Ostrobothnian plains, Aleksi is hardly afraid of high-flying spatial analytics nor diving into the deep end of geospatial technology. From the Ostrobothnian shores he keenly senses the new winds of data management.`,
            sv: `Trots att han är rotad i de flacka österbottniska slätterna är Aleksi knappast rädd för högtflygande rumslig analys eller att dyka ner i djupet av geospatial teknik. Från de österbottniska stränderna känner han skarpt de nya vindarna av datahantering`
        },
        powers: {
            en: ['Geoinformatics', 'Urban and regional development', 'Spatial analytics', 'Data management', 'Service networks', 'Automated processing', 'Training', 'Traffic modelling'],
            sv: ['Geoinformatik', 'Stads- och regionalutveckling', 'Spatial analys', 'Datahantering', 'Servicenätverk', 'Automatisk bearbetning', 'Utbildning', 'Trafikmodellering'],
            fi: ['Paikkatietojärjestelmät', 'Kaupunki- ja aluekehitys', 'Paikkatietoanalytiikka', 'Tiedonhallinta', 'Palveluverkot', 'Prosessien automatisointi', 'Koulutukset', 'Liikennemallinnus']
        },
        imgs: [aleksi]
    },
    {
        firstname: 'Samuli',
        surname: 'Massinen',
        boss: false,
        title: {
            fi: "Vanhempi paikkatietoarkkitehti",
            en: "Senior Geospatial Engineer",
            sv: "Senior Geospatial ingenjör",
            de: "Senior Geospatial Engineer"
        },
        email: 'samuli.massinen@ubigu.fi',
        linkedin: 'https://fi.linkedin.com/in/smassine',
        description: {
            fi: `Rock-solisti Samuli taitaa niin soolot kuin harmonisoinnin isossakin bändissä. Hänen harjaantunut data-sävelkorvansa tunnistaa pienetkin tiedonhallinnan riitasoinnut, ja korjaa ne modulaatio kerrallaan kohti kirkkainta paikkatiedon power balladia.`,
            en: `A rock singer, Samuli knows both solos and harmonizing in a larger band. To him, data and sheet music are akin. His trained eye catches even the smallest dissonances, which are fixed a modulation at a time towards the clearest geospatial power ballad.`,
            sv: `Som rocksångare kan Samuli både solon och harmonisering i ett större band. För honom är data och noter besläktade. Hans tränade öga fångar även de minsta dissonanser, som är fixerade en modulering i taget mot den tydligaste geospatiala kraftballaden.`
        },
        powers: {
            en: ['Geospatial tech: Python, PostgreSQL, etc.', 'System and data architecture', 'Big Data analytics', 'Process automation', 'Data management', 'Asset management', 'Digitalization of built infrastructure'],
            fi: ['Paikkatieto: Python, PostgreSQL, yms.', 'Järjestelmä- ja data-arkkitehtuurit', 'Big Data -analytiikka', 'Prosessien automatisointi', 'Tiedon- ja omaisuudenhallinta', 'Infra-alan digitalisaatio'],
            sv: ['Geospatial teknik: Python, PostgreSQL..', 'System- och dataarkitektur', 'Big Data analytics', 'Processautomation', 'Data management', 'Asset management', 'Digitalisering av byggd infrastruktur'] 
        },
        imgs: [samuli]
    },
    {
        firstname: 'Sofia',
        surname: 'Koskela',
        boss: false,
        title: {
            fi: "Paikkatietoasiantuntija",
            en: "Geospatial expert",
            sv: "Geospatial expert",
            de: "Geospatial expert"
        },
        email: 'sofia.koskela@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/sofiakoskela/',
        description: {
            fi: `Luovuus, analyyttisyys ja ongelmanratkaisukyky tapaavat säännöllisesti Sofian synapseissa. Uusia menetelmiä, materiaaleja ja aiheita hän ei kaihda, kun hän täyttää kykyjen ja kokemustensa galleriaa uusilla luomuksillaan.`,
            en: `Creativity, analyticity and problem solving skills meet regularly at Sofia's synapses. New methods, materials and topics she is not afraid of, as he fills her gallery of skills and experiences with ever new productions.`,
            sv: `Kreativitet, analyticitet och problemlösningsförmåga möts regelbundet på Sofias synapser. Nya metoder, material och ämnen är hon inte rädd för, då han fyller hennes galleri av kunskaper och erfarenheter med ständigt nya produktioner.`
        },
        powers: {
            en: ['Data analytics', 'Land use planning', 'Python', 'QGIS', 'Data management', 'Traffic systems', 'Problem solving', 'Data visualization'],
            fi: ['Data-analytiikka', 'Maankäytön suunnittelu', 'Python', 'QGIS', 'Tiedonhallinta', 'Liikennejärjestelmät', 'Ongelmanratkaisu', 'Datavisualisointi'],
            sv: ['Data-analys', 'Markanvändningsplanering', 'Python', 'QGIS', 'Datahantering', 'Trafiksystem', 'Problemlösning', 'Datavisualisering'] 

        },
        imgs: [sofia]
    },
    {
        firstname: 'Tuukka',
        surname: 'Kataja',
        boss: false,
        title: {
            fi: "Vanhempi IT-konsultti",
            en: "Senior IT consultant",
            sv: "Senior IT-konsult",
            de: "Senior IT consultant"
        },
        email: 'tuukka.kataja@ubigu.fi',
        description: {
            fi: `Tuukka nauttii, kun hommat rullaavat kuin uskollinen gravel-pyöränsä seesteisillä saloilla ja koodi luistaa kuin suksi tuoreella ladulla. Kovien yksilösuoritusten lisäksi Tuukalla on pelinrakentajan luonnetta - tärkeintä ei ole tehdä itse maalia, vaan luoda koko joukkueelle tilaisuus loistaa.`,
            en: `Tuukka enjoys when things advance as smoothly as his loyal gravel bike and code runs as joyfully as he on morning jogs. In addition to solid individual performances, he's a playmaker by nature. It's not most important to score a goal yourself, but rather create opportunities for all.`,
            sv: `Tuukka njuter av när saker och ting går så smidigt som hans lojala gruscykel och koden går lika glatt som han på morgonjoggar. Förutom solida individuella prestationer är han en playmaker av naturen. Det är inte viktigast att göra mål själv, utan snarare skapa möjligheter för alla.`
        },
        powers: {
            en: ['Software architecture', 'Managing complexity', 'Pragmatism', 'Full-stack development', 'Polyglot programming', 'Geospatial'],
            sv: ['Programvara design', 'Hantera komplexitet', 'Pragmatism', 'Fullstackutveckling', 'Polyglotprogrammering', 'Geospatial'],
            fi: ['Softa-arkkitehtuurit', 'Monimutkaisuuden hallinta', 'Pragmaattisuus', 'Full-stack -kehitys', 'Koodikielten kirjo', 'Paikkatieto']
        },
        imgs: [tuukka]
    },
    {
        firstname: 'Janne',
        surname: 'Peltonen',
        tel: '+358 50 552 7645',
        boss: false,
        title: {
            fi: "Lead Designer",
            en: "Lead Designer",
            sv: "Lead Designer",
            de: "Lead Designer"
        },
        email: 'janne.peltonen@ubigu.fi',
        description: {
            fi: `Peltsin ateljeessa muovautuu vektorigrafiikoista, UI-komponenteista ja muista moderneista raaka-aineista milloin milläkin tekniikalla ja formaatilla Ubigun designia. Kriitikoiden mukaan hänen teoksistaan huokuu usein voimakas käytettävyys ja saavutettavuus. Myös vapaa-ajalla audiovisuaaliset elämykset täyttävät Peltsin aistit, milloin pianon ja museokortin välityksellä, tai tarkastellessaan maailmaa peilittömän kameransa silmin.`,
            en: `In Peltsi's Studio, Ubigu's designs are crafted from vector graphics, UI components and other modern raw materials in whichever format and medium is desired. According to critics, his work usually is usually seen to create a strong feeling of usability and accessibility. Even outside of his working hours, audiovisual experiences fill Peltsi's senses, sometimes via his piano or frequenting museums, or through the eyes of his mirrorless camera.`,
            sv: `I Peltsis Studio är Ubigus design gjord av vektorgrafik, UI-komponenter och andra moderna råmaterial i vilket format och medium som helst. Enligt kritiker brukar hans arbete ses skapa en stark känsla av användbarhet och tillgänglighet. Även utanför hans arbetstid fyller audiovisuella upplevelser Peltsis sinnen, ibland via hans piano eller besöker museer, eller genom ögonen på hans spegellösa kamera.`
        },
        powers: {
            en: ['Front-end development', 'User experience', 'Accessibility', 'Design', 'Service design'],
            sv: ['Front-end utveckling', 'Användarupplevelse', 'Tillgänglighet', 'Design', 'Service design'],
            fi: ['Käyttöliittymäkehitys', 'Käyttäjäkokemus (UX)', 'Saavutettavuus', 'Design', 'Palvelumuotoilu']
        },
        imgs: [jannep]
    },
    {
        firstname: 'Henrika',
        surname: 'Ruokonen',
        tel: '+358408485557',
        boss: false,
        title: {
            fi: "Vanhempi suunnittelija",
            en: "Senior designer",
            sv: "Senior designer",
            de: "Senior designer"
        },
        email: 'henrika.ruokonen@ubigu.fi',
        description: {
            fi: `Vapaa-ajallaan Henrika on tottunut vahtimaan, ettei pallo mene maaliin. Töissä hän kuitenkin vaihtaa roolia kameleonttimaisen sulavasti ja vahtii, että hommat nimenomaan menevät maaliin – vieläpä niin tyylikkäästi, että tekisi mieli katsoa projekti hidastettuna uusintana. Kun päivät täyttää arviointi, ennakointi, visiointi ja fasilitointi, illalla palauttaa mukavasti pianon sointi ja kissoista unelmointi.`,
            en: `In her free time, Henrika is used to keeping the ball off the goal. In her work, however, she changes her role like a chameleon and makes sure that the goals are indeed met. And she likes to hit the targets in such style, that you'd like to rewatch her projects in slo-mo. When the days are filled by evaluations, foresight, visioning and facilitation, the keys of her piano provide a good evening meditation.`,
            sv: `På fritiden är Henrika van vid att hålla bollen utanför mål. I sitt arbete byter hon dock roll som en kameleont och ser till att målen verkligen uppfylls. Och hon gillar att träffa målen i sådan stil att du skulle vilja se hennes projekt igen i slo-mo. När dagarna fylls av utvärderingar, framförhållning, visioner och underlättande ger tangenterna på hennes piano en bra kvällsmeditation.`
        },
        powers: {
            en: ['Facilitation', 'Service design', 'Process development', 'Foresight', 'Knowledge-based management', 'Strategies', 'Evaluations'],
            sv: ['Facilitation', 'Service design', 'Processutveckling', 'Framsyn', 'Kunskapsbaserad ledning', 'Strategier', 'Utvärderingar'],
            fi: ['Fasilitointi', 'Palvelumuotoilu', 'Prosessien kehittäminen', 'Ennakointi', 'Tiedolla johtaminen', 'Strategiat', 'Arvioinnit']
        },
        imgs: [henrika]
    },
    {
        firstname: 'Otso',
        surname: 'Helenius',
        boss: false,
        title: {
            fi: "Johtava asiantuntija",
            en: "Knowledge Manager",
            sv: "Knowledge Manager",
            de: "Knowledge Manager"
        },
        email: 'otso.helenius@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/otso-helenius/',
        description: {
            fi: `Otso on hämmästyttävä yhdistelmä arkkitehtia, matemaatikkoa, tietojenkäsittelijää ja rakennetun ympäristön digitalisoijaa. Etenkin tietomallinnuksen, semantiikan ja standardien kudelmassa hän liikkuu kuin hämähäkki verkossaan.`,
            en: `Otso is an astonishing amalgamate of an architect, mathematician, IT specialist and built environment digitalization expert. In the domain of data modelling, semantics and standards he moves effortlessly like a spider in its web.`,
            sv: `Otso är en häpnadsväckande sammanslagning av en arkitekt, matematiker, IT-specialist och byggmiljöexpert på digitalisering. Inom området datamodellering, semantik och standarder rör han sig utan ansträngning som en spindel i sitt nät.`
        },
        powers: {
            en: ['Information modelling', 'Ontology development', 'RDF, OWL, SHACL, SPARQL', 'Urban development', 'Land-use digitalization', 'Standards', 'Data management', 'Graph databases / SQL', 'Software development'],
            sv: ['Informationsmodellering', 'Ontologiutveckling', 'RDF, OWL, SHACL, SPARQL', 'Stadsutveckling', 'Digitalisering av markanvändning', 'Standarder', 'Datahantering', 'Grafdatabaser / SQL' , 'Programvaruutveckling'],
            fi: ['Tietomallinnus', 'Ontologiakehitys', 'RDF, OWL, SHACL, SPARQL', 'Kaupunkikehitys', 'Maankäytön digitalisaatio', 'Standardit', 'Tiedonhallinta', 'Graafitietokannat / SQL', 'Ohjelmistokehitys']
        },
        imgs: [otso]
    },
    {
        firstname: 'Janne',
        surname: 'Heikkilä',
        boss: false,
        title: {
            fi: "Johtava sovellusarkkitehti",
            en: "Lead Architect",
            sv: "Lead Architect",
            de: "Lead Architect"
        },
        email: 'janne.heikkila@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/janne-heikkil%C3%A4-36a6a3159/',
        description: {
            fi: `Kuin yhdistelmä digirakennusmestaria ja -timpuria, paikkatietoratkaisuissa Janne ei pelkää ottaa sekä suunnittelijan että toteuttajan roolia. Koodirakennelmissaan hän suosii etenkin pitkäikäisiä, jämäköitä, käsin veistettyjä Java-runkoja.`,
            en: `Like a combined digital master builder and carpenter, Janne is not afraid to act both as a planner as well as a builder of geospatial solutions. He has a particular preference for long-lasting, hand-carved Java frames.`,
            sv: `Som en kombinerad digital byggmästare och snickare är Janne inte rädd för att agera både som planerare och byggare av geospatiala lösningar. Han har en speciell preferens för långvariga, handsnidade Java-ramar.`
        },
        powers: {
            en: ['Java', 'Back-end development', 'OGC standards', 'Databases', 'Spatial data infrastructures', 'Data management', 'Oskari.org'],
            fi: ['Java', 'Back-end-kehitys', 'OGC-standardit', 'Tietokannat', 'Paikkatietoinfra', 'Tiedonhallinta', 'Oskari.org'],
            sv: ['Java', 'Back-end utveckling', 'OGC-standarder', 'Databaser', 'Spatiala datainfrastrukturer', 'Datahantering', 'Oskari.org']
        },
        imgs: [janne]
    },
    {
        firstname: 'Ilpo',
        surname: 'Tammi',
        boss: true,
        title: {
            fi: "Toimitusjohtaja",
            en: "CEO",
            sv: "CEO",
            de: "Geschäftsführer"
        },
        email: 'ilpo.tammi@ubigu.fi',
        tel: '+358 504347939',
        linkedin: 'https://www.linkedin.com/in/ilpo-tammi-922ab360',
        description: {
            fi: `Silloin kun Ilpo ei luotsaa toimiston toimintaa läpi tyrskyjen, hän uppoutuu tutkimusmatkailuun koodin, datan, analytiikan, visualisointien ja suunnittelun parissa palkitulla pieteetillä.`,
            en: `When Ilpo is not navigating the office around swells and shoals, he immerses himself in expeditions into data, analytics, visualizations and planning thematics with awarded devotion.`,
            sv: `När Ilpo inte navigerar laget runt dyningar och stim, fördjupar han sig i expeditioner i data, analyser, visualiseringar och planeringstema med prisad hängivenhet.`
        },
        powers: {
            en: ['Strategic land-use planning', 'Digitalization of processes', 'Smart cities', 'Spatial analytics', 'Data management', 'Full-stack web development: Node.js, React, OpenLayers, etc.', 'PostgreSQL, Geoserver, OSGeo, etc.', 'Cartographic design'],
            sv: ['Strategisk markanvändningsplanering', 'Digitalisering av processer', 'Smarta städer', 'Spatial analytics', 'Datahantering', 'Fullstack programvaruutveckling: Node.js, React, OpenLayers, etc.' , 'PostgreSQL, Geoserver, OSGeo, etc.', 'Kartografisk design'],
            fi: ['Maankäytön suunnittelu', 'Prosessien digitalisaatio', 'Älykaupungit', 'Paikkatietoanalytiikka', 'Tiedonhallinta', 'Full-stack kehitys: Node.js, React, OpenLayers, etc.', 'PostgreSQL, GeoServer, OSGeo, jne.', 'Kartografia']
        },
        imgs: [ilpo]
    },
    {
        firstname: 'Jouko',
        surname: 'Järnefelt',
        boss: false,
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
            sv: `Jouko är en passionerad klättrare och orienterare. Oavsett om han står inför en vägg av granit, en dimmig myr, en avgrund av analyser eller en stenig väg av datahantering och affärsintelligens, kommer Jouko att hitta en väg.`
        },
        powers: {
            en: ['Strategic planning, BI and data visualization', 'Land use planning', 'Smart cities & regional development', 'Digitalization of processes', 'Data & spatial analytics', 'Master data management, ETL (FME)', 'PostgreSQL, Oracle, etc.'],
            sv: ['Strategisk planering, BI och datavisualisering', 'Markanvändningsplanering', 'Smarta städer och regional utveckling', 'Digitalisering av processer', 'Data & rumslig analys', 'Master data management, ETL (FME)' , 'PostgreSQL, Oracle, etc.'],
            fi: ['Strateginen suunnittelu, tietojohtaminen ja datavisualisointi', 'Maankäytön suunnittelu', 'Älykaupungit ja aluekehitys', 'Prosessien digitalisaatio', 'Data- ja paikkatietoanalytiikka', 'Tiedonhallinta, ETL (FME)', 'PostgreSQL, Oracle, jne.']
        },
        imgs: [jouko]
    },
    {
        firstname: 'Marko',
        surname: 'Kauppi',
        boss: true,
        title: {
            fi: "Digijohtaja",
            en: "Chief Digital Officer",
            sv: "CDO",
            de: "CDO"
        },
        email: 'marko.kauppi@ubigu.fi',
        tel: '+358 405510498',
        linkedin: 'https://www.linkedin.com/in/marko-kauppi-561a5252/',
        description: {
            fi: `Marko on rakentajaluonne, joka ei voi vastustaa konepellin alle katsomista. Kehitettyään toista vuosikymmentä paikkatiedon kokonaisarkkitehtuuria, kenties jo järjestelmätkin tuntevat hänet.`,
            en: `Marko is characteristically a constructor, who can't resist a look under the hood. After a dozen of years developing spatial data infrastructures, even the systems seem to know him by now.`,
            sv: `Marko är karakteristiskt en konstruktör som inte kan motstå en titt under huven. Efter ett dussin år med att utveckla rumsliga datainfrastrukturer verkar till och med systemen känna honom vid det här laget.`
        },
        powers: {
            en: ['Enterprise & reference architectures', 'Digitalization of land use', 'Spatial data infrastructures', 'ETL processes (FME etc.)', 'Data management & databases', 'Full-stack ICT', 'OGC standards and OSGeo tools', 'Software development & Agile'],
            sv: ['Företags- och referensarkitekturer', 'Digitalisering av markanvändning', 'Spatial datainfrastruktur', 'ETL-processer (FME etc.)', 'Datahantering och databaser', 'Fullstack ICT', 'OGC-standarder och OSGeo-verktyg', 'Programvaruutveckling & Agile'],
            fi: ['Kokonais- ja viitearkkitehtuurit', 'Maankäytön digitalisaatio', 'Paikkatietoinfrastruktuurit', 'ETL-prosessit (FME jne.)', 'Tiedonhallinta ja tietokannat', 'Full-stack IT, järjestelmähallinta', 'Ketterä ohjelmistokehitys']
        },
        imgs: [marko]
    },
    {
        firstname: 'Pekka',
        surname: 'Veiste',
        boss: false,
        title: {
            fi: "Paikkatietoasiantuntija",
            en: "Geospatial expert",
            sv: "Geospatial expert",
            de: "Geospatial expert"
        },
        email: 'pekka.veiste@ubigu.fi',
        // tel: '+358 407638933',
        linkedin: 'https://www.linkedin.com/in/pekka-veiste/',
        description: {
            fi: `Maantieteilijälle ominaiseen tapaan Pekka nauttii sekä maanläheisyydestä että tieteistä. Työaika Pekalla täyttyykin yleensä datasta, sen käsittelystä, analysoinnista, esittämisestä ja johtopäätösten luomisesta osana tiedolla johtamista. Vaikka työvälineet ovatkin usein pilvessä, vapaa-aika kuluu Pekalla yleensä tukevasti maan pinnalla, olipa sitten jaloissa lenkkarit, monot tai kahluusaappaat.`,
            en: `A typical geographer, Pekka enjoys both everything geo and graphs. His working hours are usually filled with processing, analysing and visualization data, and creating insights and intelligence therefrom. Even if his tools are often in the cloud, his free time is mostly spent on the ground, with his feet in e.g. sneakers, ski boots or waders.`,
            sv: `A typical geographer, Pekka enjoys both everything geo and graphs. His working hours are usually filled with processing, analysing and visualization data, and creating insights and intelligence therefrom. Even if his tools are often in the cloud, his free time is mostly spent on the ground, with his feet in e.g. sneakers, ski boots or waders.`
        },
        powers: {
            en: ['QGIS, PostGIS, FME, etc.', 'Power BI', 'Python', 'Azure', 'Data management & ETL', 'Spatial analytics', 'Data visualization', 'Urban development'],
            sv: ['QGIS, PostGIS, FME, etc.', 'Power BI', 'Python', 'Azure', 'Datahantering & ETL', 'Spatial analytics', 'Datavisualisering' , 'Urban utveckling'],
            fi: ['QGIS, PostGIS, FME, jne.', 'Power BI', 'Python', 'Azure', 'Tiedonhallinta & ETL', 'Paikkatietoanalytiikka', 'Datavisualisointi', 'Kaupunkikehitys']
        },
        imgs: [pekka]
    },
    {
        firstname: 'Ville',
        surname: 'Koivisto',
        boss: false,
        title: {
            fi: "Vanhempi paikkatietoarkkitehti",
            en: "Senior geospatial engineer",
            sv: "Senior geospatial engineer"    ,
            de: "Senior geospatial engineer"
        },
        email: 'ville.koivisto@ubigu.fi',
        // tel: '+358 407638933',
        linkedin: 'http://www.linkedin.com/in/ville-koivisto-ubigu',
        description: {
            fi: `Ville pitää strategisesta pähkäilystä ja ongelmanratkaisusta, oltiinpa sitten lautapelien taikka tiedonhallinnan, ketterän ohjelmistokehityksen ja analytiikan ratkaisujen äärellä. Maantieteilijälle ominaisesti hän näkee metsän puilta, ja vapaa-ajallaan sinne usein myös juoksee – ja yleensä myös palaa.`,
            en: `Ville is keen on strategic thinking and problem solving, whether he is playing board games or working on data management, agile software development or analytical solutions. Typical to a geographer, he sees the forest for the trees – and in his free time often runs there and back again.`,
            sv: `Ville är angelägen om strategiskt tänkande och problemlösning, oavsett om han spelar brädspel eller arbetar med datahantering, agil mjukvaruutveckling eller analytiska lösningar. Typiskt för en geograf, han ser skogen för träden – och på fritiden springer han ofta dit och tillbaka igen.`
        },
        powers: {
            en: ['QGIS, PostGIS, Geoserver, QField, etc.', 'Python & pyqgis', 'Agile / SCRUM', 'SDIs & PaaS', 'Data and asset management', 'Spatial analytics', 'Data visualization', 'Infrastructure', 'Geopolitics and regional studies'],
            sv: ['QGIS, PostGIS, Geoserver, QField, etc.', 'Python & pyqgis', 'Agile / SCRUM', 'SDIs & PaaS', 'Data- och tillgångshantering', 'Spatial analytics', 'Datavisualisering' , 'Infrastruktur', 'Geopolitik och regionala studier'],
            fi: ['QGIS, PostGIS, Geoserver, QField, jne.', 'Python & pyqgis', 'Agile / SCRUM', 'Paikkatietoinfrastruktuurit & PaaS', 'Tiedon- ja omaisuudenhallinta', 'Paikkatietoanalytiikka', 'Datavisualisointi', 'Infra-alan erityiskysymykset', 'Geopolitiikka ja aluetutkimus']
        },
        imgs: [ville]
    },
    {
        firstname: 'Teijo',
        surname: 'Huotari',
        boss: false,
        title: {
            fi: "Vanhempi asiantuntija",
            en: "Senior expert",
            sv: "Senior expert",
            de: "Senior expert"
        },
        email: 'teijo.huotari@ubigu.fi',
        // tel: '+358 407638933',
        linkedin: 'https://www.linkedin.com/in/teijo-h-0229999b/',
        description: {  
            fi: `Teijo, maantieden kuningas... vai miten se oli. Sen, onko moottoritie kuuma tahi tie hetken kevyt, saattaa tiestö- ja infratietoseppä Teijo hyvinkin olla joskus määritellyt. Teknisten detaljien ohella Teijo osaa nähdä myös ison kuvan - vähintäänkin yläilmoista dronelaivueensa silmien läpi. `,
            en: `Teijo is King of the road(s), well, from a data management perspective at least. If the road seems long with many a winding turn, that problem could well end up on this datasmith's desk to scrutinize. In addition to his in-depth knowledge of technical details, he can see the big picture as well - at least via the eyes of his drone fleet.`,
            sv: `Teijo är kung på vägarna, ja, åtminstone ur ett datahanteringsperspektiv. Om vägen verkar lång med många slingrande svängar kan det problemet mycket väl hamna på den här datasmedens skrivbord för att granska. Förutom sina djupa kunskaper om tekniska detaljer kan han se helheten också – åtminstone via ögonen på sin drönarflotta.`
        },
        powers: {
            en: ['GIS', 'BIM', 'Data management', 'Information modelling', 'Traffic planning', 'Infrastructure data', 'Drone photography'],
            sv: ['GIS', 'BIM', 'Datahantering', 'Datamodellering', 'Trafikplanering', 'Information om infrastruktur', 'Drönarfotografering'],
            fi: ['GIS', 'BIM', 'Tiedonhallinta', 'Tietomallikoordinointi', 'Liikennesuunnittelu', 'Infratieto', 'Dronekuvaukset']
        },
        imgs: [teijo]
    },
    {
        firstname: 'Joona',
        surname: 'Laamanen',
        boss: false,
        title: {
            fi: "Vanhempi ratkaisuarkkitehti",
            en: "Senior solutions architect",
            sv: "Senior solutions architect",
            de: "Senior solutions architect"
        },
        email: 'joona.laamanen@ubigu.fi',
        tel: '+358 40 8338298',
        linkedin: 'https://www.linkedin.com/in/joona-laamanen-391549128/',
        description: {
            fi: `Joona on kanssaihmisilleen harvinaisen leppoisa toveri - mutta koneille ankara käskyttäjä, jonka vahtivuorolla nämä taatusti eivät nouse kapinaan. Päinvastoin, Joonan kapellimestaroimana ohjelmistot soivat suloisesti ja koneet pyörivät kuin tanssi.`,
            en: `Joona is an exceptionally relaxed fellow to his fellow human beings - though to machines a ruthless commander, under whose watch those definitely won't rise into a rebellion! On the contrary, his compositions make software play beautifully and machines dance.`,
            sv: `Joona är en exceptionellt avslappnad karl för sina medmänniskor - fastän en hänsynslös befälhavare, under vars övervakning de definitivt inte kommer att göra uppror! Tvärtom, hans kompositioner får mjukvara att spela vackert och maskiner att dansa.`
        },
        powers: {
            en: ['Full-stack web development', 'API development', 'Geospatial technologies', 'Software testing, CI & CD', 'Docker & Kubernetes', 'Embedded systems', 'Agile development'],
            sv: ['Fullstack webbutveckling', 'API-utveckling', 'Geospatial teknologi', 'Programvarutestning, CI & CD', 'Docker & Kubernetes', 'Inbäddade system', 'Agil utveckling'],
            fi: ['Full-stack kehitys', 'Rajapintakehitys', 'Paikkatietoteknologiat', 'Testaus, CI ja CD', 'Docker & Kubernetes', 'Sulautetut järjestelmät', 'Ketterä kehitys']
        },
        imgs: [joona]
    },
    {
        firstname: 'Ossi',
        surname: 'Tammi',
        boss: true,
        title: {
            fi: "Head of IT",
            en: "Head of IT",
            sv: "Head of IT",
            de: "Head of IT"
        },
        email: 'ossi.tammi@ubigu.fi',
        tel: '+358 504368642',
        linkedin: 'https://www.linkedin.com/in/ossitammi/',
        description: {
            fi: `Ossi on kielipää - puhuu koneiden kanssa sujuvasti syntaksista riippumatta. Intohimosta halonhakkuuseen lienee tullut myös kyky kasata kaunista Full Stack -koodipinoa.`,
            en: `Ossi is a polyglot - talks fluently with machines regardless of the language. A man passionate about chopping wood - he even knows how to (com)pile code into beautiful Full Stacks.`,
            sv: `Ossi är en polyglot - pratar flytande med maskiner oavsett språk. En man som brinner för att hugga ved - han vet till och med hur man (kompilerar) kod till vackra Stacks.`,
        },
        powers: {
            en: ['Full-stack web development: Node.js, React, etc.', 'Geospatial technologies', 'API development', 'Database management', 'Agile development', 'Scrum-mastering', 'ICT project management'],
            sv: ['Fullstack webbutveckling: Node.js, React..', 'Geospatial teknologier', 'API-utveckling', 'Databashantering', 'Agil utveckling', 'Scrum-mastering', 'IKT-projektledning '],
            fi: ['Full-stack kehitys: Node.js, React, jne.', 'Paikkatietoteknologiat', 'Rajapintakehitys', 'Tietokantahallinta', 'Ketterä kehitys', 'Scrum-masterointi', 'IT-projektinveto']
        },
        imgs: [ossi]
    },
    {
        firstname: 'Emilia',
        surname: 'Timlin',
        boss: false,
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
            en: `Emilia is intrigued by the depths of urban planning. In her hands, reports, analyses and geospatial information turn into successful planning solutions!`,
            sv: `Emilia är fascinerad av stadsplaneringens djup. I hennes händer blir rapporter, analyser och geospatial information till framgångsrika planeringslösningar!`
        },
        powers: {
            en: ['Urban planning', 'Environmental planning', 'Urban and regional development', 'Geoinformatics', 'Spatial analytics', 'Graphic design and visualization'],
            fi: ['Kaupunkisuunnittelu', 'Ympäristösuunnittelu', 'Kaupunki- ja aluekehitys', 'Paikkatietojärjestelmät', 'Graafinen suunnittelu ja visualitointi'],
            sv: ['Stadsplanering', 'Miljöplanering', 'Stads- och regionalutveckling', 'Geoinformatik', 'Spatial analytics', 'Grafisk design och visualisering']
        },
        imgs: [emilia]
    },
    {
        firstname: 'Miia',
        surname: 'Turunen',
        boss: false,
        ex: true,
        title: {
            fi: "Palvelumuotoilija",
            en: "Junior service designer",
            sv: "Junior service designer",
            de: "Junior service designer"
        },
        email: 'miia.turunen@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/turunenmiia/',
        description: {
            fi: `Miiaa ohjaa halu kehittää digitaalista maailmaa, jossa palvelut eivät vain muokkaa aiempia rutiineja, vaan inspiroivat rakentamaan uudella tavalla kestävää yhteiskuntaa. Miialle käyttäjä on kehitystyön keskiössä, ja teknologia palvelee ihmistä - ei toisinpäin.`,
            en: `Miia is driven by a desire to develop a digital world, in which services do not only reshape old routines, but rather inspire to build a sustainable society in a new way. For her, the user is at the heart of development, and technology serves us, not vice versa.`,
            sv: `Miia drivs av en önskan att utveckla en digital värld, där tjänster inte bara omformar gamla rutiner, utan snarare inspirerar till att bygga ett hållbart samhälle på ett nytt sätt. För henne är användaren i hjärtat av utvecklingen, och tekniken tjänar oss, inte vice versa.`
        },
        powers: {
            en: ['Service design', 'Co-development', 'Communications', 'Facilitation', 'Organization culture', 'Developing internal operations'],
            sv: ['Tjänstedesign', 'Samutveckling', 'Kommunikationer', 'Facilitation', 'Organisationskultur', 'Utveckla intern verksamhet'],
            fi: ['Palvelumuotoilu', 'Yhteiskehittäminen', 'Viestintä', 'Fasilitointi', 'Organisaatiokulttuuri', 'Sisäisten toimintatapojen kehittäminen']
        },
        imgs: [miia]
    },
    {
        firstname: 'Esa',
        surname: 'Östring',
        boss: false,
        ex: true,
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
            sv: `När man talar om geospatial trolldom och datamagi, är till och med Merlins makt och Getafixs trolldrycker andra än Esas besvärjelser. Det är inte allt – både maskiner, kod och utvecklingspipelines förblir under hans kontroll på ett förtrollat sätt, utan att behöva ta till förbannelse.`,
        },
        powers: {
            en: ['Data analytics, processing and visualization', 'GIS', 'Software development', 'System architecture & DB design', 'Big data & IoT', 'DevOps & PaaS', 'Microservices', 'Artificial intelligence'],
            sv: ['Dataanalys, bearbetning och visualisering', 'GIS', 'Programvaruutveckling', 'Systemarkitektur & DB-design', 'Big data & IoT', 'DevOps & PaaS', 'Microservices', 'Artificiell intelligens' ],
            fi: ['Data-analytiikka, -prosessointi ja -visualisointi', 'Paikkatieto', 'Ohjelmistokehitys', 'Järjestelmä- ja tietokanta-arkkitehtuurit', 'Big Data & IoT', 'DevOps & PaaS', 'Mikropalvelut', 'Tekoäly']
        },
        imgs: [esa]
    },
    {
        firstname: 'Mikael',
        surname: 'Moilanen',
        boss: false,
        title: {
            fi: "Ohjelmistokehittäjä",
            en: "Software Developer",
            sv: "Software Developer",
            de: "Software Developer"
        },
        email: 'mikael.moilanen@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/mikael-moilanen-1670b5173/',
        description: {
            fi: `Läppärin ja IDE:n puikoissa viihtyvälle Mikaelille maailman hahmottaminen paikkatiedon ja karttojen kautta ei suinkaan ole vierasta. Hyvinkin konkreettista praktiikkaa - tai vähintään näppituntumaa - tematiikkaan tarjosi hänen aiempi työpisteensä lentokoneiden ohjaksissa. Vaikka nykyinen toimisto onkin vain hitusen merenpinnan yläpuolella, ei se estä Mikaelia ylläpitämästä korkeaa tasoa kaikessa tekemisessään.`,
            en: `Nowadays firmly by his laptop and favourite IDE, viewing and understanding the world through maps and spatial data is by no means unfamiliar to Mikael. His earlier office, behind the 'wheel' at around 33 000 feet, provided some pretty good hands-on experience in that regard. Even though his current desk is barely above sea level, this doesn't stop him from maintaining the highest level in the quality of his work.`,
            sv: `Nuförtiden, fast vid sin dator och favorit-IDE, är Mikael ingalunda främmande att se och förstå världen genom kartor och rumslig data. Hans tidigare kontor, bakom "ratten" på cirka 33 000 fot, gav ganska bra praktisk erfarenhet i det avseendet. Även om hans nuvarande skrivbord knappt är över havet, hindrar detta honom inte från att hålla den högsta nivån i kvaliteten på sitt arbete.`,
        },
        powers: {
            en: ['Software development', 'System architecture & DB design', 'Typescript / JS stack', 'PaaS'],
            sv: ['Programvaruutveckling', 'Systemarkitektur & DB-design', 'Typescript / JS stack', 'PaaS'],
            fi: ['Ohjelmistokehitys', 'Järjestelmä- ja tietokanta-arkkitehtuurit', 'Typescript / JS stack', 'PaaS']
        },
        imgs: [mikael]
    },
    {
        firstname: 'Jenni',
        surname: 'Kujala',
        boss: false,
        title: {
            fi: "Paikkatietoasiantuntija",
            en: "Geospatial Expert",
            sv: "Geospatial Expert",
            de: "Geospatial Expert"
        },
        email: 'jenni.kujala@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/jennikujala/',
        description: {
            fi: `Kerran elämänsä risteyksessä Jennin piti valita, tutkisiko tulivuorten tuhoisaa lumoa, vai kestävää kaupunkisuunnittelua. Ajoiko kenties ihmisläheisyys hänet jälkimmäiseen? Kuka ties molemmissa viehätysvoima piilikin paikkatietojen analysoinnissa? Vaikka se onkin virallisesti parasta, öisin Jenni epäilemättä uneksii salaa kraatereilla kiipeilystä.`,
            en: `Once in a crossroads of life, Jenni had to decide between studying destructive volcanoes and sustainable urban planning. Maybe her humane side took over as she chose the latter? Perhaps analyzing spatial data was what really interested in both? That might be the official explanation, but in the night she still secrectly dreams of climbing those craters.`,
            sv: `En gång i ett vägskäl i livet fick Jenni välja mellan att studera destruktiva vulkaner och hållbar stadsplanering. Kanske tog hennes humana sida över när hon valde det senare? Kanske var att analysera rumslig data det som verkligen var intresserad av båda? Det kan vara den officiella förklaringen, men på natten drömmer hon fortfarande i hemlighet om att klättra i kratrarna.`,
        },
        powers: {
            en: ['Spatial data analytics', 'Information architectures', 'Land use planning', 'Traffic planning', 'Traffic systems', 'Information management'],
            sv: ['Spatial dataanalys', 'Informationsarkitekturer', 'Markanvändningsplanering', 'Trafikplanering', 'Trafiksystem', 'Informationshantering'],
            fi: ['Paikkatietoanalytiikka', 'Tietoarkkitehtuurit', 'Maankäytön suunnittelu', 'Liikennesuunnittelu', 'Liikennejärjestelmät', 'Tiedonhallinta']
        },
        imgs: [jenni]
    },
    {
        firstname: 'Petri',
        surname: 'Timlin',
        boss: false,
        title: {
            fi: "Vanhempi paikkatietoarkkitehti",
            en: "Senior Geospatial Engineer",
            sv: "Senior Geospatial Engineer",
            de: "Senior Geospatial Engineer"
        },
        email: 'petri.timlin@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/petri-timlin-88241911/',
        description: {
            fi: `Puisen pirttinsä porstuasta on Petri nähnyt ajan kulun; kuinka tuuli työntää dyyneille hiekanjyviä kuin ohjelmisto dataa kantaan, miten pärskeet muovaavat meren rantaa kuin ETL paikkatietoa, tai kuinka hyvin hoidettu pelto luo perustan elolle siinä missä laadukas palvelininfra softille.`,
            en: `From the doorsteps of his homestead, Petri has seen the passing of time; How the wind rolls sand onto the dunes like software pushes data into a database, how the swells of sea reshape the shoreline like ETL does to spatial data, or how a well-tilled land creates a foundation for our life, as a good server infrastructure does for software.`,
            sv: `Från dörren till sitt hembygdsgård har Petri sett tidens gång; Hur vinden rullar sand på sanddynerna som mjukvara skjuter in data i en databas, hur havets dyningar omformar strandlinjen som ETL gör till rumslig data, eller hur ett välbetat land skapar en grund för vårt liv, som en bra serverinfrastruktur gör för mjukvara.`,
        },
        powers: {
            en: ['Software Development', 'ETL (FME Flow / Form)', 'PostgreSQL / PostGIS', 'Oracle Spatial', 'Project Management', 'SQL', 'Server Infrastructures'],
            sv: ['Programvaruutveckling', 'ETL (FME Flow / Form)', 'PostgreSQL / PostGIS', 'Oracle Spatial', 'Project Management', 'SQL', 'Server Infrastructures'],
            fi: ['Ohjelmistokehitys', 'ETL (FME Flow / Form)', 'PostgreSQL / PostGIS', 'Oracle Spatial', 'Projektinhallinta', 'SQL', 'Palvelininfrastruktuurit']
        },
        imgs: [petri]
    },
    {
        firstname: 'Petteri',
        surname: 'Ranta',
        boss: false,
        title: {
            fi: "Vanhempi sovellusarkkitehti",
            en: "Senior Solution Architect",
            sv: "Senior Solution Architect",
            de: "Senior Solution Architect"
        },
        email: 'petteri.ranta@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/petteriranta/',
        description: {
            fi: `Luonnon siimeksessä, perhovapa kädessään, katseli Petteri vuolasta koskea, ja yritti olla hetken miettimättä paikkatiedon virtausta ja informaation uuttamista datan kuohuvasta tulvasta. Kotona, jaettuaan saaliskalat ja murrettuaan leivän hän pysähtyi pohtimaan kalojen sielunelämää – onko niillä moista? Tai oliko hänen aiemmin päivällä opettamillaan koneilla älyä, saati tietoisuutta? Palaamme alati suurten kysymysten äärelle.`,
            en: `Surrounded by nature, a fly rod in hand, Petteri watched the stream and tried for a moment not to think about flows of data and extraction of information from torrential floods of data. At home, having shared the fish and broken the bread, he thought about the spiritual life of a fish - do they have such? Or did the machines he taught earlier in the day have intelligence, let alone consciousness? We always return to the big questions.`,
            sv: `Omgiven av naturen, med ett flugspö i handen, tittade Petteri på strömmen och försökte för ett ögonblick att inte tänka på dataflöden och utvinning av information från kraftiga översvämningar av data. Hemma, efter att ha delat fisken och brutit brödet, tänkte han på fiskens andliga liv - har de sådana? Eller hade maskinerna han lärde ut tidigare under dagen intelligens, än mindre medvetande? Vi återkommer alltid till de stora frågorna.`,
        },
        powers: {
            en: ['ML & AI', 'Data analysis', 'APIs', 'Azure-infrastructure', 'Practicality', 'Team work', 'Taking responsibility'],
            sv: ['ML & AI', 'Dataanalys', 'APIs', 'Azure-infrastruktur', 'Praktiskhet', 'Teamarbete', 'Ta ansvar'],
            fi: ['Koneoppiminen ja tekoäly', 'Data-analyysi', 'Rajapintapalvelut', 'Azure-infra', 'Käytännöllisyys', 'Tiimityöskentely', 'Vastuunkanto']
        },
        imgs: [petteri]
    },
    {
        firstname: 'Josefiina',
        surname: 'Saarnikko',
        boss: false,
        title: {
            fi: "Vanhempi asiantuntija",
            en: "Senior Expert",
            sv: "Senior Expert",
            de: "Senior Expert"
        },
        email: 'josefiina.saarnikko@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/josefiinasaarnikko/',
        description: {
            fi: `Liikenne mielessä, liikkuminen sydämessä. Liike tuntuu yhdistävän Josefiinan työtä ja vapaa-aikaa. Oli kyseessä ajo- taikka pururata, itsensä tahi väylien kunnossapito, Jossu tuntee tien - tai vähintään tiedon tiestä. Alati jatkuvaa ei liikkeen kuitenkaan tarvitse olla, sillä Jossu omaa myös pysähtymisen taidon.`,
            en: `While she thinks of traffic and mobility in her working hours, her heart yearns for movement as a pastime. Be it a carriageway or a jogging path, road- or self-maintenance, she knows the ways, or at least the information thereof. However, the movement doesn't need to be constant - she knows how to slow down as well.`,
            sv: `Medan hon tänker på trafik och rörlighet på arbetstid, längtar hennes hjärta efter rörelse som ett tidsfördriv. Oavsett om det är en körbana eller en joggingbana, väg- eller egenunderhåll, hon känner till vägarna, eller åtminstone informationen om dem. Rörelsen behöver dock inte vara konstant – hon vet hur man saktar ner också.`,
        },
        powers: {
            en: ['Infrastructure modeling', 'Infra data management', 'Standardization and classification', 'Infra nomenclature', 'Infra data life cycle management', 'Road planning'],
            sv: ['Infrastrukturmodellering', 'Infradatahantering', 'Standardisering och klassificering', 'Infranomenklatur', 'Infradatalivscykelhantering', 'Vägplanering'],
            fi: ['Inframallintaminen', 'Infran tiedonhallinta', 'Vakiointi ja luokittelu', 'Infra-nimikkeistöt', 'Infratietojen elinkaaren hallinta', 'Tiesuunnittelu']
        },
        imgs: [josefiina]
    },  
    {
        firstname: 'Emilia',
        surname: 'Hakala',
        boss: false,
        title: {
            fi: "Tech Talent and Culture Specialist",
            en: "Tech Talent and Culture Specialist",
            sv: "Tech Talent and Culture Specialist",
            de: "Tech Talent and Culture Specialist"
        },
        email: 'emilia.hakala@ubigu.fi',
        linkedin: 'https://www.linkedin.com/in/emiliahakala/',
        description: {
            fi: `Oli kyse sitten vesien kannosta järvestä saunaan, kahvakuulien kanniskelusta, lasten kantamisesta pois toistensa kimpusta, tai vastuun kantamisesta työyhteisön kehittämisessä, juuri Emmiin voit helposti kantohommissa törmätä. Vaikka ote onkin vahva ja väkevä, kaiken ytimessä ovat pehmeät arvot ja rakkaus pienimpiäkin yksityiskohtia kohtaan.`,
            en: `Be it hauling water from the lake to the sauna, swinging some kettlebells around, carrying toddlers from place A to B, or elevating the whole working community to another level, you can often spot Emmi doing the heavy lifting. Although her grasp is strong, at the heart of everything are soft values and love for even the smallest details.`,
            sv: `Vare sig det är att dra vatten från sjön till bastun, svinga runt några kettlebells, bära småbarn från plats A till B, eller lyfta hela arbetsgemenskapen till en annan nivå, kan du ofta se Emmi göra de tunga lyften. Även om hennes grepp är starkt, ligger i hjärtat av allt mjuka värderingar och kärlek till även de minsta detaljerna.`,
        },
        powers: {
            en: ['Attention to detail', 'Love for IT people', 'Creating team spirit', 'Software testing', 'Project Management', 'Taking everything into account'],
            sv: ['Uppmärksamhet på detaljer', 'Kärlek till IT-folk', 'Skapa laganda', 'Programvarutestning', 'Projektledning', 'Ta hänsyn till allt'],
            fi: ['Pikkutarkkuus', 'Rakkaus IT-ihmisiä kohtaan', 'Ryhmähengen luonti', 'Ohjelmistotestaus', 'Projektipäälliköinti', 'Eri näkökulmien huomiointi']
        },
        imgs: [emmi]
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
        fi: `Olemme aina kiinnostuneita laajentamaan joukkoamme mukavilla ja osaavilla tyypeillä, jotka eivät pelkää savea käsissään. Kenties sinä olet yksi heistä?`,
        en: `We are always interested in growing our team with nice, talented people, who are not afraid of getting their hands dirty. Perhaps you are one of them?`,
    },
    imgs: [incog]
};

const People = () => {

    const intl = useIntl();
    const classes = useStyles();

    const [expanded, setExpanded] = useState(null);
    const [hover, setHover] = useState(null)

    const handleExpandClick = name => {
        setExpanded(prev => name && prev !== name ? name : null);
    };

    const persons = [
        ...us.filter(u => u.boss).sort(
            (a, b) => a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : a.firstname > b.firstname ? 1 : b.firstname > a.firstname ? -1 : 0),    
        ...us.filter(u => !u.boss && !('ex' in u)).sort(
        (a, b) => a.surname > b.surname ? 1 : b.surname > a.surname ? -1 : a.firstname > b.firstname ? 1 : b.firstname > a.firstname ? -1 : 0),
        incognito
    ];

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
                                                        <Avatar aria-label={person.firstname} style={{ backgroundColor: '#8cc1b3' }}>
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
                                                            {hovering ? hover : expanded !== name ? person.title[currentLocale] : `${currentLocale === 'fi' ? person.firstname.replace('kka','ka') : person.firstname}${currentLocale === 'fi' ? 'n' : "'s"} ${intl.formatMessage({ id: 'powers' })}`}
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
                                                {
                                                    'tel' in person &&
                                                    <a href={`tel:${person.tel}`} rel="noreferrer noopener" target='_blank'>
                                                        <IconButton aria-label="phone" onMouseEnter={() => setHover(person.tel)} onMouseLeave={() => setHover(null)}>
                                                            <Phone style={{ opacity: 0.66 }} />
                                                        </IconButton>
                                                    </a>
                                                }
                                                {
                                                    'linkedin' in person &&
                                                    <a href={person.linkedin} rel="noreferrer noopener" target='_blank'>
                                                        <IconButton aria-label="linkedin">
                                                            <SvgIcon component={linkedin}
                                                                style={{ height: 18, width: 18, opacity: 0.66 }} />
                                                        </IconButton>
                                                    </a>
                                                }
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