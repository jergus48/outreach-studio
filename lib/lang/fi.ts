import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Ennen', solution: 'Mitä rakensimme', wouldBuild: 'MITÄ RAKENTAISIMME', today: 'TÄNÄÄN' },
  kinds: { console: 'OPERAATIOKONSOLI', documents: 'ASIAKIRJA-AUTOMAATIO', portal: 'ITSEPALVELUPORTAALI', agent: 'TEKOÄLYAGENTTI', tool: 'SISÄINEN TYÖKALU' },
  cover: { kicker: 'RÄÄTÄLÖIDYT OHJELMISTOT', right: 'TARJOUKSEN ESITTELY · 2026', foot: 'Toimiva prototyyppi päivissä, ei kuukausissa' },
  what: { label: '01 — MITÄ TEEMME', before: 'Rakennamme ', hl: 'räätälöityjä ohjelmistoja', after: ' yrityksille, jotka ovat kasvaneet ulos taulukoista ja valmisohjelmista.', chips: ['Kojelaudat ja konsolit', 'Asiakas- ja kumppaniportaalit', 'Data- ja asiakirja-automaatio'] },
  why: { label: '02 — MIKSI YRITYKSET TULEVAT LUOKSEMME', title: 'Hyvät yritykset, joita väärät työkalut jarruttavat.', items: ['Valmisohjelmisto pakottaa prosessinne mukautumaan tuotteeseensa, ei päinvastoin.', 'Tärkein työ tehdään ⟦taulukoissa⟧ ja sähköpostissa: hauras, manuaalinen ja mahdoton skaalata.', 'Yleiset työkalut eivät sovi ⟦juuri teidän tilanteisiinne⟧, joten ihmiset paikkaavat aukot käsin hiljaa, tiimin kustannuksella.'] },
  build: { label: '03 — MITÄ RAKENNAMME', title: 'Neljä asiaa, tehtynä poikkeuksellisen hyvin.', items: [
    { t: 'Operaatiokonsolit', d: 'Kojelaudat, jotka muuttavat raakadatan päätöksiksi: lajittelu, tarkastus ja tila yhdellä silmäyksellä.' },
    { t: 'Itsepalveluportaalit', d: 'Portaalit asiakkaille, sisällöntuottajille ja kumppaneille: tilit, lähetykset, maksut ja moderointi.' },
    { t: 'Asiakirja-automaatio', d: 'Raportit, Word-tiedostot ja taulukot, jotka tiiminne kirjoittaa nyt käsin, syntyvät yhdellä klikkauksella.' },
    { t: 'Sisäiset työkalut', d: 'Tarkoitukseen rakennetut korvaajat taulukko- ja sähköpostiprosesseille, joilla yrityksenne pyörii.' }] },
  worksIntro: { label: '04 — VALITUT TYÖT', title: 'Valitut työt', text: 'Kuusi järjestelmää, rakennettu ja päivittäisessä käytössä mediassa, kulttuurissa, painoalalla, rakennustekniikassa, asiakirjahallinnassa ja maanhallinnassa.' },
  works: [
    { tag: 'TAPAUS 01 · MEDIA / SISÄLTÖAUTOMAATIO', name: 'Upshift', sub: 'Sisällöntuotannon ja suunnittelun alusta', problem: 'Somesisältö tehtiin käsin: kuvien etsintä, tekstien kirjoitus, diojen kokoaminen ja julkaisu kanavakohtaisesti yksi kerrallaan.', solution: 'Täysin automaattinen kulku: järjestelmä luo kuvat ja tekstit, kokoaa diat ja videot, lähettää ne hyväksyttäväksi ja julkaisee suoraan YouTubeen, Instagramiin ja Facebookiin. Sama alusta pyörittää tekijäportaalia, joka tarkistaa katselut ja soveltaa porrastetut palkkiosäännöt automaattisesti.', stats: [['€1–2k', 'säästöä kuukaudessa tekijöissä'], ['A–Ö', 'visuaalit, tekstit ja julkaisu']], img: 'upshift' },
    { tag: 'TAPAUS 02 · ASIAKIRJAHALLINTA', name: 'Gaya', sub: 'Asiakirjojen skannauskonsoli', problem: 'Henkilöstö vertasi asiakirjoja tietokantaan käsin, sivu sivulta.', solution: 'Konsoli, joka lajittelee koko erän luokkiin säilytä, hylkää, virhe ja kaksoiskappale ja näyttää vain huomiota vaativat poikkeukset.', stats: [['Koko erä', 'lajiteltu kerralla'], ['1 klikkaus', 'skannaukseen ja lajitteluun']], img: 'gaya' },
    { tag: 'TAPAUS 03 · RAKENNUSTEKNIIKKA', name: 'Geosoul', sub: 'Insinööriasiakirjojen generaattori', problem: 'Geotekniset raportit kirjoitettiin käsin Wordilla: tunteja per raportti ja virheet olivat helppoja.', solution: 'Kaksivaiheinen ohjattu toiminto, joka muuttaa muutaman jäsennellyn syötteen täysin muotoilluksi tekniseksi Word-asiakirjaksi.', stats: [['2 vaihetta', 'valmiiseen raporttiin'], ['.docx', 'syntyy heti']], img: 'geosoul' },
    { tag: 'TAPAUS 04 · VALMISTUS / PAINOALA', name: 'Hakom & Aluprint', sub: 'Laatuasiakirjojen hallinta', problem: 'Ohjeet ja menettelyt jaettiin paperilla, eikä kukaan voinut todistaa, kuka oli lukenut mitä.', solution: 'Yksi järjestelmä kahdelle yritykselle: jokainen työntekijä näkee ja kuittaa itseään koskevat asiakirjat, täydellä versio- ja revisiohistorialla.', stats: [['Auditointivalmis', 'todiste lukemisesta'], ['2 in 1', 'yhteinen alusta']], img: 'hakom' },
    { tag: 'TAPAUS 05 · MAANHALLINTA', name: 'Urbár', sub: 'Omistuksen ja valtuuksien automaatio', problem: 'Satoja tunteja kului Excel-taulukoiden kirjoittamiseen ja omistusvaltuuksien laskentaan käsin.', solution: 'Lataa omistusluettelot; järjestelmä käsittelee ne, laskee jokaisen valtuuden ja yhdistää tulokset valmiisiin taulukoihin.', stats: [['100+ h', 'säästöä per kierros'], ['Auto', 'valtuuksien laskenta']], img: 'urbar' },
    { tag: 'TAPAUS 06 · KULTTUURI / ELOKUVIEN LEVITYS', name: 'Elokuvaohjelmien ja esitysraporttien työkalu', sub: 'Toimii ja on tiimin käytössä', problem: 'Festivaalien ja kumppanien elokuvaohjelmat koottiin käsin useiden satojen elokuvien arkistosta, kestoja laskien ja lisenssejä tarkistaen, ja tekijöiden esitysraportit tehtiin taulukoista.', solution: 'Työkalu, joka ehdottaa useita ohjelmavaihtoehtoja teeman ja rajojen (elokuvien määrä, kokonaiskesto, lisenssit) mukaan ja muuttaa esitystiedot raportiksi. Molemmat asiakirjat syntyvät heti Word- ja PDF-muodossa, liettuaksi tai englanniksi.', stats: [['Käytössä', 'tiimin päivittäisessä työssä'], ['LT / EN', '.docx ja PDF yhdellä klikkauksella']], img: 'films' },
  ],
  pattern: { label: '05 — YHTEINEN NIMITTÄJÄ', title: 'Kuusi alaa. Yksi toistuva malli.', cols: [
    { t: 'Lajittelu ja tarkastus', d: 'Lajittele suuret määrät automaattisesti; ihmiset päättävät vain poikkeukset.', ex: 'Gaya · Hakom' },
    { t: 'Luonti ja julkaisu', d: 'Luo sisältö ja julkaise se kaikissa kanavissa alusta loppuun automaattisesti.', ex: 'Upshift' },
    { t: 'Luonti yhdellä klikkauksella', d: 'Muuta jäsennelty syöte valmiiksi asiakirjoiksi ja taulukoiksi.', ex: 'Geosoul · Urbár · Elokuvaohjelmat' }] },
  how: { label: '06 — NÄIN TYÖSKENTELEMME', title: 'Toimivaa ohjelmistoa, nopeasti.', steps: [
    { t: 'Kartoitamme prosessin', d: 'Opimme, miten työ todella tehdään, myös manuaaliset vaiheet, joita kukaan ei dokumentoi.' },
    { t: 'Prototyyppi päivissä', d: 'Reagoitte lähes heti toimivaan näkymään, ette diaan tai mallikuvaan.' },
    { t: 'Julkaisemme käyttöön', d: 'Käytössä oleva tuote päätyy oikeisiin käsiin varhain, joten hyöty alkaa jo ennen projektin loppua.' },
    { t: 'Kehitämme käytön pohjalta', d: 'Todellinen käyttö näyttää, mitä parannetaan seuraavaksi. Tuote paranee jatkuvasti.' }] },
  diff: { label: '07 — MIKSI SWIFTRIX', title: 'Ero on sopivuus.', rows: [
    { t: 'Tehty teille', d: 'Prosessiinne sovitettu ohjelmisto, ei pohja, jota säädetään kunnes se melkein toimii.' },
    { t: 'Oikea ohjelmisto', d: 'Täysimittaiset tuotteet, jotka kasvavat mukananne, ilman no-code-rajoja vuoden päästä.' },
    { t: 'Nopea tuotto', d: 'Toimiva tuote viikoissa, joten tuotto näkyy kauan ennen laskua.' }] },
  short: { label: '08 — LYHYESTI', items: [
    { v: 'Viikot', t: 'Toimivaan versioon', d: 'Ei kuukausia määrittelyä ennen kuin näette mitään.' },
    { v: 'Mikä vain', t: 'ala, mikä tahansa prosessi', d: 'Media, kulttuuri, asiakirjat, tekniikka, paino, maa: teidän alanne on seuraava.' },
    { v: '1', t: 'Studio A:sta Ö:hön', d: 'Suunnittelemme, rakennamme ja julkaisemme saman katon alla.' }] },
  start: { label: '09 — YHTEISTYÖ', title: 'Kolme tapaa aloittaa.', items: [
    { t: 'Discovery-sprintti', d: 'Kiinteä, vähän sitouttava vaihe prosessin kartoitukseen ja ratkaisun prototyypin rakentamiseen.' },
    { t: 'Kiinteän laajuuden toteutus', d: 'Selkeä laajuus, aikataulu ja hinta tuotteen suunnitteluun, rakentamiseen ja julkaisuun.' },
    { t: 'Jatkuva kumppanuus', d: 'Kehitämme ja laajennamme tuotetta liiketoimintanne kasvaessa.' }] },
  qLabel: 'NYT TE', qFoot: 'Tuokaa nämä vastaukset discovery-sprinttiin: kartoitamme todellisen prosessin ennen kuin suunnittelemme mitään.',
  closeLabel: 'RAKENNETAAN YHDESSÄ', ideasLabel: 'IDEAT',
};

export const src: Src = {
  ui: { who: 'KUKA OLEMME', pitch: '30 SEKUNNIN VASTAUS', flow: 'MITEN LIIDI ETENEE SOVELLUKSESSA', build: 'MITÄ RAKENNAMME', work: 'NÄIN TYÖSKENTELEMME', ways: 'KOLME TAPAA ALOITTAA', faq: 'KYSYMYKSIÄ, JOITA SAATAT SAADA', projects: 'AIEMMAT PROJEKTIT' },
  who: 'Swiftrix (swiftrix.eu) on studio, joka rakentaa räätälöityjä ohjelmistoja ja personoituja tekoälyagentteja yrityksille, jotka ovat kasvaneet ulos taulukoista ja valmisohjelmista.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Me Swiftrixillä rakennamme räätälöityjä ohjelmistoja ja personoituja tekoälyagentteja yrityksille, joiden tärkein työ elää yhä taulukoissa, sähköpostissa ja paperilla: kojelaudat, asiakasportaalit, asiakirjageneraattorit sekä agentit, jotka vastaavat toistuviin kysymyksiin tai lajittelevat asiakirjoja. Ensimmäinen toimiva prototyyppi on yleensä valmis päivissä, ei kuukausissa.',
  flow: [
    'Kylmäsoitto: ole ytimekäs, näytä tehneesi kotiläksysi, pyydä lupa 30 sekuntiin.',
    'Soiton tavoite: saada paras sähköpostiosoite ja sopia aika lyhyelle 1:1-videopuhelulle (Google Meet). Älä yritä myydä puhelimessa.',
    'Kirjaa soitto sovellukseen. Jos he suostuivat tapaamiseen, valitse ”meeting agreed”, syötä heidän sähköpostinsa, valitse vapaa aika ja lähetä Meet-kutsu.',
    'Kun asiakas on suostunut, luo yrityksen diat ja esittäjän käsikirjoitus. Diat ovat Meetiä varten, ei kylmäsoittoon.',
    'Meetissä: käy diat läpi käsikirjoituksen mukaan, esitä discovery-kysymykset ja kirjaa hintatoiveet, käytetyt työkalut ja sopimukseen toivotut asiat.',
    'Meetin jälkeen: avaa ”My calendar”, merkitse tulos (interested, maybe, not interested, no show) ja täytä hinta, työkalut, sopimus ja muistiinpanot.',
  ],
  whatWeDo: [
    { t: 'Operaatiokonsolit', d: 'Kojelaudat, jotka muuttavat raakadatan päätöksiksi: lajittelu, tarkastus ja tila yhdellä silmäyksellä.' },
    { t: 'Itsepalveluportaalit', d: 'Portaalit asiakkaille, sisällöntuottajille ja kumppaneille: tilit, lähetykset, maksut ja moderointi.' },
    { t: 'Asiakirja-automaatio', d: 'Raportit, Word-tiedostot ja taulukot, jotka tiimi kirjoittaa nyt käsin, syntyvät yhdellä klikkauksella.' },
    { t: 'Sisäiset työkalut', d: 'Tarkoitukseen rakennetut korvaajat taulukko- ja sähköpostiprosesseille, joilla yritys pyörii.' },
    { t: 'Personoidut tekoälyagentit', d: 'Agentit, jotka vastaavat toistuviin kysymyksiin, lajittelevat asiakirjoja, laativat tarjouksia ja seuraavat tilanteita.' },
  ],
  howWeWork: ['Kartoitamme prosessin', 'Prototyyppi päivissä', 'Julkaisemme käyttöön', 'Kehitämme käytön pohjalta'],
  ways: [
    { t: 'Discovery-sprintti', d: 'Kiinteä, vähän sitouttava vaihe prosessin kartoitukseen ja ratkaisun prototyypin rakentamiseen.' },
    { t: 'Kiinteän laajuuden toteutus', d: 'Selkeä laajuus, aikataulu ja hinta tuotteen suunnitteluun, rakentamiseen ja julkaisuun.' },
    { t: 'Jatkuva kumppanuus', d: 'Kehitämme ja laajennamme tuotetta yrityksen kasvaessa.' },
  ],
  faq: [
    { q: 'Keitä te olette ja mitä teette?', a: 'Me Swiftrixillä rakennamme räätälöityjä ohjelmistoja ja personoituja tekoälyagentteja yrityksille, jotka ovat kasvaneet ulos taulukoista: kojelaudat, portaalit, asiakirjageneraattorit ja agentit toistuvaan työhön. Ydin: ohjelmisto, joka sopii siihen, miten yritys todella työskentelee, ei pohja, jonka ympärille prosessi pitää taivuttaa.' },
    { q: 'Miksi soitatte meille?', a: 'Ole rehellinen ja konkreettinen: katsoimme verkkosivunne ja sitä, miten teidän kaltaiset yritykset toimivat, ja uskomme, että osa päivittäisestä työstä (mainitse yksi konkreettinen prosessi taustatyöstä) tehdään yhä käsin taulukoissa, sähköpostissa tai paperilla. Haluaisimme näyttää lyhyessä videopuhelussa, miten se voisi toimia automaattisesti. Sovelluksen soittokäsikirjoituksessa on tiedot jokaisesta yrityksestä.' },
    { q: 'Mitä tarkalleen voitte rakentaa meille?', a: 'Neljänlaisia asioita, hyvin tehtyinä: operaatiokonsoleita (kojelautoja), itsepalveluportaaleja, asiakirja-automaatiota ja sisäisiä työkaluja, sekä personoituja tekoälyagentteja. Heidän yritykselleen valmistelemme neljä konkreettista ideaa mallinäkymineen ja näytämme ne videopuhelussa.' },
    { q: 'Onko teillä esimerkkejä tai aiempia projekteja?', a: 'On, kuusi toimivaa järjestelmää: Upshift (sisällöntuotannon ja julkaisun automaatio), Gaya (asiakirjojen skannauskonsoli), Geosoul (insinööriraporttien generaattori), Hakom & Aluprint (laatuasiakirjojen hallinta), Urbár (maanomistuksen ja valtuuksien automaatio) sekä elokuvaohjelmien ja esitysraporttien työkalu, jota tiimi käyttää. Valitse yksi tai kaksi, jotka ovat lähimpänä heidän liiketoimintaansa. Lisätiedot alempana tällä sivulla.' },
    { q: 'Kuinka kauan se kestää?', a: 'Tavoitteena on ensimmäinen toimiva prototyyppi päivissä, ei kuukausissa. Discovery-sprintin jälkeen he näkevät toimivan näkymän hyvin varhain, eivät pelkkää diaa. Älä lupaa puhelimessa tarkkoja päivämääriä heidän projektilleen.' },
    { q: 'Paljonko se maksaa?', a: 'Älä mainitse lukuja kylmäsoitossa. Sano, että hinta riippuu laajuudesta ja että videopuhelun jälkeen voimme aloittaa discovery-sprintillä (kiinteä, vähän sitouttava vaihe) tai ehdottaa kiinteän laajuuden toteutusta selkeällä laajuudella, aikataululla ja hinnalla. Jos he painostavat, kirjaa heidän budjettitoiveensa ja kerro, että palaamme konkreettisella ehdotuksella.' },
    { q: 'Meillä on jo ohjelmisto / Excelimme toimii hyvin.', a: 'Juuri siinä olemme hyödyksi: valmisohjelmisto pakottaa prosessin tuotteensa muottiin, ja taulukot hajoavat, kun määrät kasvavat tai usea ihminen on niistä riippuvainen. Emme korvaa sitä, mikä toimii. Rakennamme sen osan, jonka ihmiset yhä täyttävät käsin. Kysy, mikä prosessi vie nykyisin eniten manuaalista aikaa.' },
    { q: 'Lähettäkää vain sähköpostia.', a: 'Mielellään. Pyydä heidän paras sähköpostiosoitteensa (vaikka sinulla jo olisi yksi) ja kerro, että viesti sisältää Google Meet -linkin lyhyeen 1:1-videopuheluun, jossa näytämme heidän yritykselleen valmistellun lyhyen esityksen ja aiempia töitämme. Tarjoa kaksi aikaa ja kysy, kumpi sopii.' },
    { q: 'Meillä ei ole aikaa tai budjettia.', a: 'Videopuhelu on lyhyt ja näyttää jotain konkreettista, ei myyntipuhetta. Puhelussa ei tarvitse päättää mitään. Jos budjettia ei nyt ole, kysy, milloin seuraava budjettikierros on, ja tarjoudu palaamaan silloin asiaan; kirjaa ”call back” päivämäärällä.' },
    { q: 'Onko tämä no-code-työkalu vai oikeaa ohjelmistoa?', a: 'Oikeaa ohjelmistoa: täysimittaisia tuotteita, jotka kasvavat yrityksen mukana, ilman no-code-työkalujen rajoja vuoden päästä. Älä mene puhelimessa syvemmälle tekniikkaan.' },
    { q: 'Entä tekoälyagentit?', a: 'Rakennamme personoituja tekoälyagentteja toistuvaan työhön: rutiinikysymyksiin vastaamiseen, asiakirjojen lajitteluun, tarjousten laatimiseen ja tilanteiden seurantaan. Valitsemme agentin ja perinteisen automaation välillä sen mukaan, kumpi sopii paremmin heidän prosessiinsa. Pysy konkreettisena ja sido asia yhteen heidän prosessiinsa.' },
    { q: 'Kenelle ohjelmisto kuuluu, missä data säilytetään, entä GDPR ja tietoturva?', a: 'Älä vastaa muistista. Sano, että tämä on tärkeä kysymys, jonka käymme läpi yksityiskohtaisesti videopuhelussa ja sopimuksessa, ja kirjaa se muistiin, jotta se päätyy tapaamisen jälkeen kenttään ”mitä sopimukseen kirjataan”.' },
    { q: 'Missä olette ja kuinka iso tiimi on?', a: 'Tätä ei ole vielä kirjattu tähän. Kysy ylläpitäjältä ennen soittoja äläkä improvisoi. Jos kysytään ennen kuin tiedät, sano, että esittelet tiimin videopuhelussa.' },
  ],
};

export const extra: Extra = {
  name: 'Suomi',
  llm: 'Finnish (polite, professional B2B register)',
  where: 'Mihin se sopii',
  ask: 'Mitä automatisoimme ensin?',
  meetIntro: (company) => `Hei,\n\nKiitos ajastanne puhelimessa. Kuten sovimme, tässä Google Meet -linkkimme, jossa käymme läpi lyhyen, yritykselle ${company} valmistellun esityksen ja näytämme esimerkkejä aiemmista töistämme.`,
};
