import fullstack from './../img/products/fullstack.jpg';
import etl from './../img/products/etl.jpg';
import analytics from './../img/products/analytics.jpg';
import maadigi from './../img/products/maadigi.jpg';
import infodesign from './../img/products/infodesign.jpg';
import api from './../img/products/api.jpg';
import tools from './../img/products/tools.jpg';
import gis from './../img/products/gis.jpg';
import bi from './../img/products/tietojohtaminen.jpg';
import data from './../img/products/data.jpg';
import process from './../img/products/process.jpg';
import ka from './../img/products/ka.jpg';
import infra from './../img/products/infra.jpg';
import schooling from './../img/products/schooling.jpg';
import palvelut from './../img/products/palvelut.jpg';
import traffic from './../img/products/traffic.jpg';
import impact from './../img/products/impact.jpg';
import smart from './../img/products/smart.jpg';

const Products = [
    {
        category: 'planning',
        label: {
            fi: "Paikkatietoanalytiikka",
            en: "State-of-the-art spatial analytics",
            sv: "Toppmodern rumslig analys"
        },
        description: {
            fi: "Tuotamme asiakkaillemme palkitulla pieteetillä paikkatietoa hyödyntävää analytiikkaa, aihepiirejä kaihtamatta. Työkalupakistamme löytyvät sekä kertaluonteiset analyysit että automatisoidut tai jatkuvaluonteiset analytiikkapalvelut. Tulokset tarjoillaan tyylikkäästi visualisoituna, totta kai.",
            en: "We provide our customers with spatial data analytics, with awarded proficiency, regardless of the theme at hand. Our toolbox contains both one-timer analyses and reports as well as automated or continuous analytical services. The results served beautifully visualized, naturally.",
            sv: "Vi förser våra kunder med rumslig dataanalys, med tilldelad skicklighet, oavsett vilket tema det handlar om. Vår verktygslåda innehåller både engångsanalyser och rapporter samt automatiserade eller kontinuerliga analystjänster. Resultaten serverades vackert visualiserade, naturligtvis."
        },
        img: analytics
    },
    {
        category: 'planning',
        label: {
            fi: "Älykaupungit, kaupunki- ja aluekehitys",
            en: "Smart cities, urban and rural development",
            sv: "Smarta städer, stads- och landsbygdsutveckling"
        },
        description: {
            fi: "Vuosien saatossa kaupunki- ja aluekehityksen ja Smart City -teeman kysymykset ovat tulleet meille enemmän kuin tutuksi. Esimerkiksi kaupunkikehityksen skenaarioiden dataperusteinen luominen, IoT-datavirtojen rakentaminen ja aluekehityksen analyysit mittakaavatasosta riippumatta ovat kaikki osuneet polullemme.",
            en: "Throughout the years, questions related to urban and regional development and Smart Cities have become more than familiar to us. We've been for instance creating data-based urban development scenarios, IoT data flows and regional development analytics regardless of the spatial scale.",
            sv: "Genom åren har frågor relaterade till stads- och regionalutveckling och Smarta städer blivit mer än välbekanta för oss. Vi har till exempel skapat databaserade scenarier för stadsutveckling, IoT-dataflöden och regional utvecklingsanalys oavsett rumslig skala."
        },
        img: smart
    },
    {
        category: 'planning',
        label: {
            fi: "Strateginen palvelu- ym. suunnittelu",
            en: "Strategic asset & service planning",
            sv: "Strategisk tillgångs- och tjänsteplanering",
        },
        description: {
            fi: "Repertuaariimme on kertynyt vuosikausien edestä näkemystä ja kokemusta organisaatioiden strategisesta suunnittelusta ja sen tietoperustaisesta tukemisesta, esimerkiksi palvelu-, kiinteistö- ja tilaverkkojen skenarioinnista ja optimoinnista kaupunkistrategioiden toteutumisen seurantaan ja kansallisen tason dataperusteisiin politiikkamäärittelyihin.",
            en: "Our repertoire is filled with years of experience and insights on data-based planning and support of organisational strategy, for instance from service, real estate and asset planning and optimization to city strategy monitoring and evaluation to national level policy reformulations rooted in data analysis.",
            sv: "Vår repertoar är fylld med år av erfarenhet och insikter om databaserad planering och stöd för organisationsstrategi, till exempel från service, fastighets- och tillgångsplanering och optimering till övervakning och utvärdering av stadsstrategier till policyomformuleringar på nationell nivå med rötter i dataanalys."

        },
        img: palvelut
    },
    {
        category: 'planning',
        label: {
            fi: "Maankäytön suunnittelu ja digitalisaatio",
            en: "Land use planning & digitalization",
            sv: "Markanvändningsplanering & digitalisering"
        },
        description: {
            fi: "Maankäyttö, sen suunnittelu ja digitalisaatio aina tarkimmilta lupa-, tontti- ja kiinteistötasoilta asema-, yleis- ja maakuntakaavatasoille sekä kansallisen tason ohjausympäristöön on yksi merkittävimpiä vahvuuksiamme. Tarjoamme aihepiiristä kokonaisvaltaista kokemusta, näkemystä ja toteutuksia, organisaation koosta ja tyypistä riippumatta. ",
            en: "Land use, its planning and digitalization from the most detailed permit, lot and cadastral levels to detailed town planning, master planning and regional plans and national level regulatory settings is one of our keys strenghts. We provide you with holistic experience, insight and solutions on the topic, regardless the size and type of your organization.",
            sv: "Markanvändning, dess planering och digitalisering från de mest detaljerade tillstånds-, tomt- och fastighetsnivåerna till detaljerad stadsplanering, översiktsplanering och regionala planer och regelverk på nationell nivå är en av våra viktigaste styrkor. Vi ger dig helhetserfarenhet, insikter och lösningar på ämnet, oavsett storlek och typ av din organisation."
        },
        img: maadigi
    },
    {
        category: 'planning',
        label: {
            fi: "Liikennesuunnittelu",
            en: "Transport & traffic planning",
            sv: "Transport & trafikplanering"
        },
        description: {
            fi: "Kehitämme yhdessä asiakkaidemme ja alan asiantuntijaverkostojen kanssa ratkaisuja liikkumista ja kuljetuksia koskeviin haasteisiin. Kestävän liikkumisen edistäminen on intohimomme, panostamme liikenteen vaikutustenarviointien kehittämiseen ja valjastamme kehittyneen data-analytiikan parempien suunnitteluratkaisujen avuksi.",
            en: "We develop solutions to the challenges of mobility and transportation together with our customers and networks. Promoting sustainable mobility is our passion. We focus on developing traffic impact assessments and harness advanced data analytics to find better planning solutions.",
            sv: "Vi utvecklar lösningar på utmaningarna med mobilitet och transport tillsammans med våra kunder och nätverk. Att främja hållbar mobilitet är vår passion. Vi fokuserar på att utveckla trafikkonsekvensbedömningar och utnyttjar avancerad dataanalys för att hitta bättre planeringslösningar."
        },
        img: traffic
    },
    {
        category: 'planning',
        label: {
            fi: "Vaikutusten arvioinnit",
            en: "Impact assessments",
            sv: "Konsekvensbedömningar"
        },
        description: {
            fi: "Vuosien saatossa olemme olleet tekemässä lukuisia vaikutusten arviointeja, modernilla dataperusteisella otteella. Kuten muussakin analytiikassa, kertaluonteisten selvitysten lisäksi olemme rakentaneet menetelmiä automatisoiduille vaikutusten arvioinneille. Esimerkiksi ilmastovaikutusten arviointi, yhdyskuntarakenteellisten, kaupallisten, liikenteellisten ja luontoon kohdistuvien vaikutusten arviointi ovat käsialaamme.",
            en: "Throughout the years we've been involved in a lot of impact assessments, created with a modern data-based touch. As in other analytics, in addition to one-timer reports and analyses we've been building methods for automatized impact assessments. For instance impacts on climate and emissions, urban structure, commercial services, traffic and green and blue infrastructure have been on our menu.",
            sv: "Genom åren har vi varit involverade i många konsekvensanalyser, skapade med en modern databaserad touch. Som i andra analyser har vi förutom engångsrapporter och analyser byggt metoder för automatiserade konsekvensanalyser. Till exempel påverkan på klimat och utsläpp, stadsstruktur, kommersiell service, trafik och grön och blå infrastruktur har stått på vår meny."
        },
        img: impact
    },
    {
        category: 'supporting',
        label: {
            fi: "Prosessien uudistus ja digitalisointi",
            en: "Process renewal and digitalization",
            sv: "Processförnyelse och digitalisering"
        },
        description: {
            fi: "Tehottomat tai monimutkaiset prosessit, joissa on päällekkäistä tai epämielekästä työtä tai eivät palvele tarkoitustaan, eivät ole suosiossamme. Sen sijaan rakastamme prosessien uudistamista ja digitalisointia sellaisiksi, että prosessit ovat jouhevia ja palvelevat käyttäjiään ja tekijöitään, eikä toisin päin.",
            en: "Ineffective or complex processes with overlapping and unnecessary work, are not our friends. Instead, we love renewing and digitalization processes in a way that makes them streamlined and such that they serve their users and makers, not vice versa.",
            sv: "Ineffektiva eller komplexa processer med överlappande och onödigt arbete är inte våra vänner. Istället älskar vi att förnya och digitalisera processer på ett sätt som gör dem strömlinjeformade och så att de tjänar sina användare och skapare, inte vice versa."
        },
        img: process
    },
    {
        category: 'supporting',
        label: {
            fi: "Kokonais- ja viitearkkitehtuurit",
            en: "Enterprise and reference architectures",
            sv: "Företags- och referensarkitekturer"
        },
        description: {
            fi: "Liian usein tehdään digitalisaatiotoimenpiteitä pienissä, toisistaan irrallisissa palasissa, jolloin kokonaisuudesta muodostuu helposti sirpaleinen, vaikeasti hallittava ja kustannustehoton. Tämän vuoksi tarjoamme asiakkaillemme kokonaisvaltaista näkemystä ja suunnittelua organisaationsa kehittämisestä, kokonais- ja viitearkkitehtuurimenetelmiä hyödyntäen.",
            en: "Too often processes or individual tasks are digitalized in small, loose bits and pieces, which eventually causes the big picture to become fragmented, difficult to maintain and cost-inefficient. Therefore we provide our customers with holistics insights and planning for the organizational development, using enterprise and reference architecture approaches.",
            sv: "Alltför ofta digitaliseras processer eller enskilda uppgifter i små, lösa bitar, vilket så småningom gör att helheten blir fragmenterad, svår att underhålla och kostnadsineffektiv. Därför ger vi våra kunder holistiska insikter och planering för organisationsutveckling, med hjälp av företags- och referensarkitekturmetoder."
        },
        img: ka
    },
    {
        category: 'supporting',
        label: {
            fi: "Paikkatietoinfrastruktuurit",
            en: "Spatial data infrastructures",
            sv: "Infrastrukturer för rumslig data"
        },
        description: {
            fi: "Paikkatietoinfrastruktuurien rakentaminen, ylläpito ja huolto on ollut toimintamme kulmakiviä iät ja ajat. Koko paketti virtuaalipalvelinten pystytyksestä ja hallinnoinnista tietokantoihin, paikkatietopalvelimiin ja datan virtauttamiseen hoituvat kauttamme.",
            en: "Building, maintaining and upkeeping spatial data infrastructures has been one of our key operations for ages. The whole nine yards from spawning and maintaining virtual servers, dataabases and spatial data servers and data flows can be arranged by us.",
            sv: "Att bygga, underhålla och underhålla infrastrukturer för rumslig data har varit en av våra nyckelverksamheter i evigheter. Hela nio yards från att skapa och underhålla virtuella servrar, databaser och rumsliga dataservrar och dataflöden kan ordnas av oss."
        },
        img: infra
    },
    {
        category: 'supporting',
        label: {
            fi: "Datan hankinta, hallinta ja käsittely",
            en: "Data acquisition, management & processing",
            sv: "Datainsamling, hantering och bearbetning"
        },
        description: {
            fi: "Data hankinta ja käsittely vie usein tuhottoman osan tehollisesta työajasta. Automatisoidun tiedonhankinnan lisäksi tarjoamme datan käsittely- ja hallintapalveluita tarvittaessa käsipelilläkin, mutta pääasiassa vauhdikkain ETL-prosessein. Mikään aineistomuunnos- tai käsittelytarve ei ole meille liian mystinen.",
            en: "Data acquisition and processing take's often the lion's share from one's working hours. In addition to automated data acquisition we provide our customers with data handling and processing services, manually by hand if necessary, but mostly with blazing fast ETL processes. No data conversion or processing trick is too mysterious for us.",
            sv: "Datainsamling och bearbetning tar ofta lejonparten av ens arbetstid. Förutom automatiserad datainsamling förser vi våra kunder med datahanterings- och bearbetningstjänster, manuellt vid behov, men oftast med blixtrande snabba ETL-processer. Inget datakonverterings- eller bearbetningstrick är för mystiskt för oss."
        },
        img: etl
    },
    {
        category: 'supporting',
        label: {
            fi: "Tietojohtaminen",
            en: "Knowledge management & business intelligence",
            sv: "Business intelligence"
        },
        description: {
            fi: "Johtaminen ilman tietoa on kuin seilaisi yöllä myrskyssä lähellä rannikkoa ilman majakkaa. Tämän vuoksi tarjoamme asiakkaillemme tietojohtamisen palveluita laidasta laitaan keskitetystä tiedonhallinnasta liikkeenjohdon konsultointiin ja datan hyödyntämiseen organisaation strategisessa johtamisessa.",
            en: "Leading without information is like sailing in a storm the night close to the shore without a lighthouse. Therefore we offer our customers with a whole range of services on knowledge managmenet and business intelligence from master data management to utilizing data in strategic organizational leadership.",
            sv: "Att leda utan information är som att segla i en storm natten nära stranden utan en fyr. Därför erbjuder vi våra kunder en hel rad tjänster inom kunskapshantering och business intelligence från master data management till att använda data i strategiskt organisatoriskt ledarskap"
        },
        img: bi
    },
    {
        category: 'supporting',
        label: {
            fi: "Koulutus ja organisaatioiden tuki",
            en: "Train & empower",
            sv: "Träna och stärka"
        },
        description: {
            fi: "Uudet, säihkyvät teknologiset ratkaisut tai toimintamallit prosessien digitalisaatioon voivat jäädä melko tyhjänpäiväisiksi, mikäli niiden käyttöä ei jalkauteta käytäntöön. Tässä koulutus ja jatkuva tuki organisaatioille ovat keskiölle. Olemmekin kouluttaneet asiakkaitamme kunnista yliopistoihin ja yrityksiin hyvällä menestyksellä, milloin mihinkäkin teemaan.",
            en: "Bright and shining new technological solutions or digitalized processes can be rather useless, if they are not implemented in practice. Here, training and continuous support of organizations is key. We've trained our customers from municipalities to universities to companies, with good results, regardless of the theme at hand.",
            sv: "Ljusa och lysande nya tekniska lösningar eller digitaliserade processer kan vara ganska värdelösa om de inte implementeras i praktiken. Här är utbildning och kontinuerligt stöd till organisationer nyckeln. Vi har utbildat våra kunder från kommuner till universitet till företag, med goda resultat, oavsett tema."
        },
        img: schooling
    },
    {
        category: 'developing',
        label: {
            fi: "Full-stack ohjelmistokehitys",
            en: "Full-stack web development",
            sv: "Full-stack webbutveckling"
        },
        description: {
            fi: "Koko ohjelmistokehityksen kaari on keskeinen osa toimintaamme. Asiakkaillemme (ja toki myös itsellemme) teemme ohjelmistokehitystä koko 'stackista' tai tarvittaessa vain osasta sitä, kuten back-end tai UX/UI -kehitystä. Monia kieliä ja viitekehyksiä on tullut käytettyä, mutta lähimpänä sydäntämme ovat kiistämättä Node.js, React, Python ja Java.",
            en: "The complete story arc of software development is a key component of our work. For our customers (and for ourselves as well) we do software development on the full stack or just a part of it, if necessary, such as back-end or UX/UI development. Many languages and frameworks have been tried and used, but closest to our hearts are Node.js, React, Python and Java.",
            sv: "Den kompletta berättelsen om mjukvaruutveckling är en nyckelkomponent i vårt arbete. För våra kunder (och för oss själva också) gör vi mjukvaruutveckling på full stack eller bara en del av den, om det behövs, såsom back-end eller UX/UI-utveckling. Många språk och ramverk har prövats och använts, men närmast våra hjärtan ligger Node.js, React, Python och Java."
        },
        img: fullstack
    },
    {
        category: 'developing',
        label: {
            fi: "Data- ja analytiikkarajapinnat",
            en: "Data & analytics API services",
            sv: "Data & analytics API-tjänster"
        },
        description: {
            fi: "Oli kyseessä paikkatieto tai muu data, ei kannata jättää sitä nurkkiin lojumaan. Tänä päivänä tiedon tehokas hyödyntäminen eri prosesseissa ja käyttötarkoituksissa edellyttää, että se on koneluettavasti saatavilla. Olemme rakentaneet monenlaisia rajapintaratkaisuja tähän tarkoitukseen mm. OGC-standardeilla tai räätälöityjä REST- ja SOAP -rajapintoja.",
            en: "Whether it's spatial data or some other data, better not just leave it laying around and collecting dust. Today, powerful utilization of data in different processes and use cases requires that the data is machine-readable and available. We've built quite a few API solutions either with OGC standard or tailored REST and SOAP interfaces to fulfill such needs.",
            sv: "Oavsett om det är rumslig data eller någon annan data, bättre att inte bara låta den ligga och samla damm. Idag kräver ett kraftfullt utnyttjande av data i olika processer och användningsfall att datan är maskinläsbar och tillgänglig. Vi har byggt en hel del API-lösningar antingen med OGC-standard eller skräddarsydda REST- och SOAP-gränssnitt för att uppfylla sådana behov."
        },
        img: api
    },
    {
        category: 'developing',
        label: {
            fi: "Paikkatietotekniset ratkaisut",
            en: "Geospatial solutions",
            sv: "Geospatiala lösningar"
        },
        description: {
            fi: "Kaikenlaiset paikkatietotekniset ratkaisut ja niiden rakentaminen ja hyödyntäminen ovat meille tuttua. Olemme teknologiariippumaton toimija, mutta erityisesti avoimen lähdekoodin ohjelmistot ovat meille lähellä sydäntä. Mm. seuraavilla teknologiolla olemme rakentaneet ratkaisujamme: QGIS, GeoServer, PostgreSQL, PostGIS, Oskari.org, FME, ArcGIS, R, OpenLayers, Leaflet, Mapbox, Carto, Cesium, Oracle Spatial, OSRM, jne.",
            en: "All kinds of geospatial technologies and solutions based on them are familiar to us. We are technology agnostic, but open-source technologies are particularly close to our hearts. We've been building things with for instance these technologies: GeoServer, PostgreSQL, PostGIS, Oskari.org, FME, ArcGIS, R, OpenLayers, Leaflet, Mapbox, Carto, Cesium, Oracle Spatial, OSRM, etc.",
            sv: "Alla typer av geospatiala teknologier och lösningar baserade på dem är bekanta för oss. Vi är teknikagnostiker, men öppen källkod ligger oss särskilt varmt om hjärtat. Vi har byggt saker med till exempel dessa teknologier: GeoServer, PostgreSQL, PostGIS, Oskari.org, FME, ArcGIS, R, OpenLayers, Leaflet, Mapbox, Carto, Cesium, Oracle Spatial, OSRM, etc."
        },
        img: gis
    },
    {
        category: 'developing',
        label: {
            fi: "Automatisoitu tiedonkeruu",
            en: "Automated data harvesting",
            sv: "Automatiserad datainsamling"
        },
        description: {
            fi: "Kuka pitää tiedonkeruusta käsipelilllä? No, onhan se hetken aikaa ihan hauskaa - mutta hyvin lyhyen hetken. Olemme olleet rakentamassa monensorttista automaattista datankerääjää tai 'harvesteria', jotka lukevat ja käsittelevät tietokannoista tai rajapinnoilta dataa suoraan asiakkaidemme käyttöön. Säästyy sitten aikaa itse tekemisen pihviin.",
            en: "Who likes hand-picking data? Well, it's fun for a while - a very short while. We've been building quite a few automated data collectors or harvesters that roam databases or APIs, fetch and prepare data readily for our customers to use. Saves some time for the actual work, right?",
            sv: "Vem gillar att handplocka data? Nåväl, det är roligt ett tag – en väldigt kort stund. Vi har byggt en hel del automatiska datainsamlare eller skördare som strövar runt i databaser eller API:er, hämtar och förbereder data lätt för våra kunder att använda. Sparar lite tid för själva arbetet, eller hur?"
        },
        img: data
    },
    {
        category: 'developing',
        label: {
            fi: "Räätälöidyt työkalut",
            en: "Tailor-made tools",
            sv: "Skräddarsydda verktyg"
        },
        description: {
            fi: "Keskeinen osa asiakkaidemme toiminnan digitalisaatiota on usein joko olemassa olevien digitaalisten työvälineiden päivittäminen tai korvaaminen, tai täysin uusiin tarpeisiin vastaaminen, yhdessä asiakkaan kanssa määritellen. Joskus kyseessä saattaa olla vain ohjelmiston osan tai lisäosan rakentaminen, joskus koko paketin.",
            en: "A central part of our work in digitalizing our customers' processes is replacing or updating existing digital tools, or designing and creating completely new tools to answer to novel demand. Sometimes it may be just a part or a plug-in of a software, sometimes it's the whole package.",
            sv: "En central del av vårt arbete med att digitalisera våra kunders processer är att ersätta eller uppdatera befintliga digitala verktyg, eller att designa och skapa helt nya verktyg för att möta nya efterfrågan. Ibland kan det bara vara en del eller en plug-in av en programvara, ibland är det hela paketet."
        },
        img: tools
    },
    {
        category: 'developing',
        label: {
            fi: "Tietomuotoilu",
            en: "Data visualization and information design",
            sv: "Datavisualisering och informationsdesign"
        },
        description: {
            fi: "Rakastamme tiedon pureskelua selkeisiin, ymmärrettäviin osiin, ja data muuntamista informaatioksi. Muun muassa näyttävät, havainnolliset kartta- ja tilastovisualisaatiot joko artesaanityyppisesti (puoliksi) käsipelillä rakennettuna tai dynaamisina ohjelmallisesti erilaisille aluistoille kehitettyinä ovat käsialaamme. Alustoista tai teknologiasta olemme käyttäneet mm. Power BI, D3.js, Chart.js, Nivo, Tableau, Qlik, jne.",
            en: "We love scrutinizing data and chopping it down to understandable parts, converting data to information. Beautiful, informative map and statistics visualizations created either in an artesanal manner (half) hand-made or as dynamic programmatic creations on a wealth of platforms are our thing. Some of the platforms or technologies we've used include Power BI, D3.js, Chart.js., Nivo, Tableau, Qlik, etc.",
            sv: "Vi älskar att granska data och skära ner den till begripliga delar, konvertera data till information. Vackra, informativa kart- och statistikvisualiseringar skapade antingen på ett artesanalt sätt (halv) handgjorda eller som dynamiska programmatiska skapelser på en mängd plattformar är vår grej. Några av de plattformar eller tekniker vi har använt inkluderar Power BI, D3.js, Chart.js., Nivo, Tableau, Qlik, etc."
        },
        img: infodesign
    },
]

export default Products