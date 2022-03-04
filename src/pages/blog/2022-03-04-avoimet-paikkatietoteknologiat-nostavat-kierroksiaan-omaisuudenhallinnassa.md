---
templateKey: blog-post
title: Avoimet paikkatietoteknologiat nostavat kierroksiaan omaisuudenhallinnassa
date: 2022-03-04T10:52:37.282Z
description: "Tarve erilaisille omaisuudenhallinnan ratkaisuille on kasvanut
  viime vuosina, niin julkisella kuin yksityisellä sektorilla. Tämän myötä myös
  erilaiset tekniset ratkaisut ovat määrällisesti ja laadullisesti kehittyneet
  vauhdikkaasti, ja alalla on jo varsin tervettä kilpailua. Mutta mitä avoimen
  lähdekoodin paikkatietoteknologioihin pohjautuvat ratkaisut voivat tälle
  saralle tarjota, ja mitä näiden käyttöönotossa ja käyttämisessä tulisi
  huomioida? "
language: fi
author: Ville Koivisto
featuredpost: true
featuredimage: /img/jsuukuva.jpg
tags:
  - omaisuudenhallinta
  - qgis
  - foss4g
  - mapillary
---
Julkisen sektorin omaisuudenhallinnan kenttä on elänyt jonkinlaista murrosaikaa edelliset 5-10 vuotta. Monissa kaupungeissa on herätty siihen tosiasiaan, että merkittävä osa niiden omistamasta pääomasta on kiinni rakennetussa infrassa ja kiinteistöissä, ja näiden investointien kuluminen ajan hampaissa on väistämätöntä. Rakennetun ympäristön korjausvelka on jatkuvasti kasvanut ja se vaikuttaa ikävästi vähintään välillisesti jokaisen meidän tuloihin. Julkisen sektorin omistaman infran korjausvelka vaikuttaa meistä jokaiseen vähintään välillisesti maksujen muodossa. Suuressa kuvassa kyse on rahoituksen priorisoimisesta. Valitettavasti kunnossapitohankkeet saavat vuosi vuodelta liian vähän rahaa, jotta korjausvelkataso voisi pysyä samoissa luvuissa, saati laskea. Esimerkiksi vuoden 2017 [ROTI-raportti](https://www.ril.fi/media/2017/2017-vaikuttaminen/roti-2017/taustat/roti-2017_painettu-raportti.pdf) avaa asiaa hyvin.

<br>

Perustasoisessa omaisuudenhallinnassa on kyse pitkälti yksinkertaisiin kysymyksiin vastaamisesta. Mitä me omistamme? Missä omaisuuserämme sijaitsevat? Missä kunnossa nuo omaisuuserät ovat? Yksinkertaista tai ei, jos kunta haluaa harjoittaa kestävää omaisuudenhallintaa, tulee nopeasti tarve tietojärjestelmälle. Valitettavasti tietojärjestelmän hankinta ei olekaan se helpoin rasti ja tarjolla on paljon vaihtoehtoja.

<br>

Ilman asianomaista tietojärjestelmää syyllistytään herkästi helmasyntiin, jossa omaisuudenhallintaa tehdään jonkin aikaa projektiluontoisesti aktiivisesti, kunnes organisaation rajallisiin resursseihin kohdistuu paineita muualta. Lisäksi, ilman tietojärjestelmää autentikoimassa kerättyä dataa, päädytään herkästi tilanteeseen, jossa eri aineistokierrosten data ei ole keskenään yhteensopivaa. Monessa kaupungissa omaisuudenhallinnalle on pyritty tarjoamaan työrauha perustamalla sille asianomainen yksikkö.

<br>

![Omaisuudenhallinnan prosessin kuvausta](/img/kuva2.jpg "Omaisuudenhallinta perustuu tietoon ja sen keräämisessä pitää väistellä erilaisia sudenkuoppia")

*Kuva. Omaisuudenhallinta perustuu tietoon ja sen keräämisessä pitää väistellä erilaisia sudenkuoppia.*

<br>

Samaan tahtiin kun omaisuudenhallinta on noussut yleisempään tietoisuuteen, on avoimen lähdekoodin paikkatieto myös nostanut osakkeitaan suhteessa kaupallisiin kilpailijoihinsa. Erityisesti monelle tuttu työpöytäsovellusten työjuhta QGIS on päässyt yhä suuremmin valokeilaan, ja kaikkien sen päälle rakennettujen liitännäisten ja sovelluksien myötä siitä tulee ajoittain mieleen oma työkalupakki, jonka kansi ei meinaa enää mahtua kiinni. Avoimesta paikkatiedosta on tullut synonyyminen erilaisten toimittajaloukkujen, epäselvien omistajuuskuvioiden ja kustannushaasteiden ratkaisijana, kunhan siirtymään on muistettu panostaa.

<br>

Omaisuudenhallinta on usein yhdistelmä toimistolla ja kentällä tapahtuvaa tiedon inventointia ja hallinnointia. Kenttätyöhön QGIS ei sellaisenaan oikein taivu, joten tätä kysyntäaukkoa ovat tulleet täyttämään useampi liiketoimintansa avoimeen lähdekoodiin pohjaava toimija. Niistä paikkatietoyhteisön ja julkisorganisaatioiden tutkalla vahvimmin ovat QField ja Input. Ne molemmat nojaavat vahvasti QGIS:iin toimintansa mahdollistajina, ja ne kannattaakin ajatella sen työparina enemmän kuin itsenäisinä ohjelmistoina. Kyseisten mobiilisovellusten perusideana on määritellä projekti ensin QGIS:ssä ja sitten ottaa se mukaan kentälle, missä työt voivat jatkua.

<br>

Kun tuodaan vielä paikkatietokanta (yleensä PostGIS) aiemmin mainittujen kylkeen, ollaan jo aika vahvoilla paikkatietopohjaisen omaisuudenhallinnan aloittamisessa. Tällaisenpaikkatietokanta-QGIS-valikoitu-mobiilisovellus-yhdistelmänvaraan luotuja omaisuudenhallinnan tietojärjestelmiä on kaupunkiorganisaatioissa jo tavattavissa. Useimmilla kaupungeilla on jo harteillaan paikkatietokanta ja ainakin jotain kokemusta QGIS:n käytöstä, joten kuvion täydentäminen mobiilisovelluksella ei tunnu suurelta hypyltä siihen päälle. Projektimuotoisten aineistokampanjoiden pohjaksi tämä yhdistelmä onkin jo oiva. Click & play -tyyppinen ratkaisu ei kuitenkaan tämäkään missään nimessä ole, sillä varsinkin monikäyttäjäympäristöissä ja offline/online -tiedonkeruuta yhdistellessä kohdataan helposti niin teknisiä kuin toimintatapoihinkin liittyviä ongelmia.

<br>

![Mapillary-palvelussa omaisuudenhallintaan liittyvää kuva-aineistoa](/img/jsuukuva.jpg "Joensuun kaupungin ottamia Mapillary-kuvia")

*Kuva. Mapillaryn tunnistama penkki Joensuun Kuhasalossa \[www.mapillary.com/app/?pKey=275736084694069, joensuucity360 (www.mapillary.com/app/user/joensuucity360), CC-BY-SA].*

<br>

Avoimen lähdekoodin tietojärjestelmä voi yllättää käyttäjänsä ylläpidon vaatimuksissa ja määrässä. Tietojärjestelmä muodostuu usein monista eri osista, ja ne taas jälleen useammista osista. Kokonaisuuden hahmottaminen ja hallinta ei ole aina helppoa, josta viimeisin osoitus oli Log4J-haavoittuvuuden ponnahtaminen tietoisuuteen viime vuoden loppupuolella. Paras ratkaisu on panostaa oman henkilöstön osaamiseen ja antaa koulutukseen tukea. Mahdolliset konsulttitilaukset on hyvä järjestää niin, että osaamista siirtyy mahdollisimman paljon omalle henkilöstölle säilyttäen kuitenkin konsultin tukena ylläpitotehtävissä aina tarpeen mukaan.

<br>

Omaisuudenhallintaa ei sovi kuitenkaan unohtaa pieneksi ja usein näkymättömäksi osaksi organisaation paikkatietoinfrastruktuuria vain koska aloittaminen on helppoa. Ollakseen toimivaa omaisuudenhallinta vaatii säännöllisiä tiedonkeruukampanjoita ja tiedonhallinnan ohjelmointia aina hanketasolle asti. Herkästi se kuitenkin hukkuu osaksi organisaation valtavaa aineistotulvaa. Ideaalitapauksessa erityisesti kuntotieto ja muu omaisuudenhallinnan ohjelmointiin liittyvä tieto olisi jo osa perusrekistereitä ja erottamaton osa hankehallintoa.

<br>

Avoimiin teknologioihin panostavilla paikkatietotoimijoilla on jälleen iskun paikka toisaalta omaisuudenhallinnan paradigmamuutoksen puolestapuhujina ja toisaalta sen mahdollistajina tarjoamalla siihen välineet.