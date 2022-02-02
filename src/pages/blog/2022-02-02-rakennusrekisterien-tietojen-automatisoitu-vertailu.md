---
templateKey: blog-post
title: Rakennusrekisterien tietojen automatisoitu vertailu
date: 2022-02-02T06:43:09.482Z
description: Miten vertailla automaattisesti eri kansallisten ja paikallisten
  rakennustietoja kuvaavien rekisterien tietosisältöjä, niin rekisterien
  sisältämien tietojen perusparannusta ja esimerkiksi kiinteistöverotuoton
  ajantasaistamista varten? Kehitimme tähän viime vuoden lopussa edistynyttä
  prosessia yhdessä Maanmittauslaitoksen ja Vaasan kaupungin kanssa. Tulosten
  perusteella menetelmällä saadaan kiinni valtaosa rekisterien välisistä
  epäjohdonmukaisuuksista.
language: fi
author: Marko Kauppi
featuredpost: true
featuredimage: /img/img_9142b.jpg
tags:
  - "#kiinteistovero #rytj #fme"
---
Runsaanlaisesti on viime aikoina kirjoitettu sote-uudistuksen vaikutuksesta kuntien talouteen, ja myös kiinteistöverotuoton merkityksen kasvusta jatkossa osana kuntien tulopohjaa, taloudellista kantokykyä, investointikykyä, jne. Alan ammattilaisille ei myöskään yllättävää ole tieto, että kiinteistöverotus perustuu monin paikoin varsin hataraan tietopohjaan, sillä verotuksessa hyödynnettävien eri rekisterien tietosisällöt voivat olla keskenään varsin ristiriitaisia.

<br/>

Perinteinen lääke edellä mainitun ongelman ratkaisemiseen ovat olleet kuntien tekemät, tai useimmiten teettämät, kiinteistöveroselvitykset. Usein näiden selvitysten seurauksena kunnissa löydetään paljon sellaista aiemmin tietopohjaltaan epäkuranttia kiinteistökantaa, josta kiinteistöveroa pitäisi kantaa, mutta tähän tarvittavat ovat olleet virheelliset - suuntaan tai toiseen, jolloin kunta lopulta saa tilannetta korjattua edukseen, monesti jopa hyvin merkittävien kiinteistöveron vuosittaisten lisätuottojen muodossa.

<br/>

Nuo lisätuotot ovat avainasemassa siinä, että kiinteistöveroselvitykset maksavat usein itsensä takaisin muutamien vuosien kuluessa. Aivan halvasta lystistä kun ei selvitystenkään teettämisessä ole kyse, vaan kustannukset voivat olla melkeinpä mitä tahansa sadan tuhannen ja miljoonan euron välillä, kun puhutaan monivuotisesta selvitysurakasta. Selvityksissä on usein kaksi pääkomponenttia: rekisterien ja muun aineiston vertailu ja analysointi, sekä maastossa tehtävät tarkistusmittaukset. Toisinaan ulkopuoliset konsultit laativat kunnalle vain vertailu ja analyysiä, ja kunta itse käy tarkistusmittaamassa kohteita, tai toisinkin päin.

<br/>

“Tiedoiltaan epäilyttävien” kohteiden tarkistusmittaaminen paikan päällä on toki kallista ja aikaa vievää puuhaa, ja muodostaakin merkittävän osan kiinteistöveroselvitysten kustannuksista, mutta myös tätä edeltävä työpöytätyö on usein raskasta. Oikeastaan tämän jälkimmäinen osuuden radikaaliin nopeuttamiseen ja suoraviivaistamiseen pyrimme viime vuoden lopulla Maanmittauslaitoksen, Vaasan kaupungin ja Plandisain Oy:n kanssa toteuttamassamme hankkeessa. Tulokset olivatkin häikäiseviä!

<br/>

Työssä mentiin perinteisten selvitysten prosesseja askel pidemmälle, ja vertailtiin kunnan ja Verohallinnon rakennus- ja kiinteistötietojen sijaan neljän keskeisen tietolähteen sisältöjä pitkälle viedyllä automatiikalla: kunnan rakennus- ja huoneistorekisteri, Digi- ja väestötietoviraston väestötietojärjestelmän rakennus- ja huoneistotiedot, Verohallinnon kiinteistöverotuksen rekisteritiedot sekä Maanmittauslaitoksen Kansallisen maastotietokannan (KMTK) tiedot. Lisäksi keskeisessä roolissa olivat MML:n kunnille toteuttamat KMTK:n [VTJ-PRT-analyysit](https://www.maanmittauslaitos.fi/kartat-ja-paikkatieto/peruspaikkatietojen-tuotanto/tiedontuottajille/rakennustiedot). KMTK:n erityislaatuisuus perustuu mm. sen tuotannon taustalla käytettyihin ortokuva- ja laserkeilausaineistoihin (jatkossa enenevästi), jotka paljastavat rekisterien “silmiltä” piiloon jääviä kohteita herkästikin.

<br/>

![FME-prosessin yleissilmäys](/img/fme.jpg "FME-prosessi")

*Kuva 1. Neljän rekisterin tietojen automatisoitu vertailu ja harmonisointi ei ole kovin yksinkertainen veivaus. Tässä ongelman ratkaistavuutta lähdettiin kokeilemaan FME Workbenchillä.*

<br/>

Työn tulosten perusteella arvioiden kehitetty menetelmä toimii varsin hyvin rekisterien välisten epäjohdonmukaisuuksien automaattisessa tunnistamisessa, sillä noin 90% rakennustiedoista saadaan linkitettyä eri rekisterien välillä. Pelkästään yhden kunnan osalta löydettiin yhdellä analyysin testiajolla arviolta vajaan 700 000 €/v arvosta verottamatonta rakennuskantaa sekä kunkin rakennuksen osalta tieto siitä, missä rekisterissä tai rekistereissä sitä koskevat ongelmat mahdollisesti piilevät.

<br/>

![Kuvassa on esitetty kartalla rakennusrekisterien eroja.](/img/rekkarit.png "Rakennusrekisterien eroja")

*Kuva 2. Rakennusrekisterien tiedoissa on eroja niin attribuuttitietojen kuin paikkatiedon osalta niin mikro- kuin makroskaalassa, mikä tekee tietojen yhdistelystä hyvin haastavaa. Lisäksi esimerkiksi kunnan sisällä eri alueilla rekisterien tietosisällön laatu voi vaihdella merkittävästi mm. rakennuskannan pääasiallisen käyttötarkoituksen, rakennusajankohdan ja esimerkiksi kuntaliitosten peruja.*

<br/>

Koska rakennustietojen muodostumisen taustalla oleva prosessi on nykyisellään epäeheää tietoa muodostava, ei analyysin kerta-ajo riitä lopullisesti korjaamaan rakennustietoja. Työn lopputuloksina todettiinkin, että menetelmän avulla pitäisi tuottaa viranomaisille mahdollisimman ajantasainen tilannekuvatieto, joka olisi jokseenkin vaihtoehtona sille, että rekisterit korjataan kerralla kuntoon. Rekisterien korjaaminen kerralla kuntoon olisikin jokseenkin epärealistista, ja tietyn ajanhetken selvitys tietopuutteista usein vanhenee ennen kuin korjauksia ehditään tarkistusmitata ja viedä rekisteriin. Dynaaminen tilannekuva tukisi systemaattista perusrekisterien perusparantamista (mm. automatisoitujen raporttien, vertailuanalyysien sekä visualisointien avulla) sekä kiinteistöverotuottoa. Rakennustietojen perusparantaminen liittyy keskeisesti myös lähitulevaisuudessa kehitettävään [Rakennetun ympäristön tietojärjestelmään](https://ym.fi/ryhti/rytj), jonka on tarkoitus myös integroida eri lähteiden rakennustietoja keskenään - tällöin pohjana käytettävän rakennustiedon migraation suunnittelua on tehtävä hyvinkin hartaudella.

<br/>

![Karttakuvassa on esitetty rakennuskannan verotusarvoarvio kartalla](/img/heatmap.jpg "Heatmap-kartta")

*Kuva 3. Rakennuskannan verotusarvoa tai -tuottoa voidaan esittää esimerkiksi heatmap-visualisoinnein.*

<br/>

Mikäli rakennusrekisterien perusparantamisen tehokas tukeminen ja kunnan kiinteistöverotuoton saattaminen ajan tasalle kiinnostaa, nykäiseppä hihasta!