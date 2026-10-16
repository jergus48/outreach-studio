import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Før', solution: 'Hva vi bygde', wouldBuild: 'HVA VI KUNNE BYGGET', today: 'I DAG' },
  kinds: { console: 'DRIFTSKONSOLL', documents: 'DOKUMENTAUTOMATISERING', portal: 'SELVBETJENINGSPORTAL', agent: 'KI-AGENT', tool: 'INTERNT VERKTØY' },
  cover: { kicker: 'STUDIO FOR SKREDDERSYDD PROGRAMVARE', right: 'TILBUDSOVERSIKT · 2026', foot: 'Fungerende prototyper på uker, ikke måneder' },
  what: { label: '01 — HVA VI GJØR', before: 'Vi bygger ', hl: 'skreddersydd programvare', after: ' for bedrifter som har vokst ut av regneark og ferdige standardverktøy.', chips: ['Dashbord og konsoller', 'Kunde- og partnerportaler', 'Data- og dokumentautomatisering'] },
  why: { label: '02 — HVORFOR BEDRIFTER KONTAKTER OSS', title: 'Gode bedrifter, bremset av feil verktøy.', items: ['Standardprogramvare tvinger prosessene til å passe produktet, ikke omvendt.', 'Det viktigste arbeidet skjer i ⟦regneark⟧ og e-post: skjørt, manuelt og umulig å skalere.', 'Generiske verktøy passer aldri ⟦de helt spesifikke tilfellene⟧, så folk fyller hullene stille for hånd, på teamets bekostning.'] },
  build: { label: '03 — HVA VI BYGGER', title: 'Fire ting, gjort usedvanlig godt.', items: [
    { t: 'Driftskonsoller', d: 'Dashbord som gjør rådata om til beslutninger: sortering, kontroll og status på ett blikk.' },
    { t: 'Selvbetjeningsportaler', d: 'Portaler for kunder, skapere og partnere med kontoer, innsendinger, utbetalinger og moderering.' },
    { t: 'Dokumentautomatisering', d: 'Rapporter, Word-filer og regneark som teamet skriver for hånd i dag, laget med ett klikk.' },
    { t: 'Interne verktøy', d: 'Skreddersydd erstatning for regneark- og e-postprosessene som driften hviler på.' }] },
  worksIntro: { label: '04 — UTVALGTE PROSJEKTER', title: 'Utvalgte prosjekter', text: 'Seks systemer som er bygget og i daglig bruk innen media, kultur, trykk, byggeteknikk, dokumenthåndtering og grunneiendomsforvaltning.' },
  works: [
    { tag: 'CASE 01 · MEDIA / INNHOLDSAUTOMATISERING', name: 'Upshift', sub: 'Plattform for innholdsproduksjon og planlegging', problem: 'Innhold til sosiale medier ble laget for hånd: finne bilder, skrive tekst, sette sammen slides og publisere i én kanal om gangen.', solution: 'Et fullautomatisk løp: systemet lager bilder og tekster, setter sammen slides og videoer, sender dem til godkjenning og publiserer rett til YouTube, Instagram og Facebook. Samme plattform driver en skaperportal som kontrollerer visninger og bruker trinnvise utbetalingsregler automatisk.', stats: [['€1–2k', 'spart per måned på skapere'], ['A til Å', 'bilder, tekst og publisering']], img: 'upshift' },
    { tag: 'CASE 02 · DOKUMENTHÅNDTERING', name: 'Gaya', sub: 'Konsoll for dokumentskanning', problem: 'Ansatte sammenlignet dokumenter med en database for hånd, side for side.', solution: 'En konsoll som sorterer hele partier i behold, avvis, feil og duplikat, og bare viser unntakene som trenger oppmerksomhet.', stats: [['Hele partiet', 'sortert på én gang'], ['1 klikk', 'for å skanne og sortere']], img: 'gaya' },
    { tag: 'CASE 03 · BYGGETEKNIKK', name: 'Geosoul', sub: 'Generator for tekniske dokumenter', problem: 'Geotekniske rapporter ble skrevet for hånd i Word: timer per rapport og lett å gjøre feil.', solution: 'En veiviser i to trinn som gjør noen få strukturerte inndata om til et ferdig formatert teknisk Word-dokument.', stats: [['2 trinn', 'til ferdig rapport'], ['.docx', 'laget umiddelbart']], img: 'geosoul' },
    { tag: 'CASE 04 · PRODUKSJON / TRYKK', name: 'Hakom & Aluprint', sub: 'Styring av kvalitetsdokumenter', problem: 'Instrukser og prosedyrer ble delt ut på papir, uten bevis på hvem som hadde lest hva.', solution: 'Ett system for to firmaer: hver ansatt ser og bekrefter dokumentene som gjelder dem, med full versjons- og revisjonshistorikk.', stats: [['Revisjonsklar', 'bevis for lesing'], ['2 i 1', 'felles plattform']], img: 'hakom' },
    { tag: 'CASE 05 · GRUNNEIENDOMSFORVALTNING', name: 'Urbár', sub: 'Automatisering av eierskap og fullmakter', problem: 'Hundrevis av timer gikk med til å skrive inn Excel-tabeller og beregne eierfullmakter for hånd.', solution: 'Last opp eierlistene; systemet behandler dem, beregner hver fullmakt og slår resultatene sammen i ferdige regneark.', stats: [['100+ t', 'spart per runde'], ['Auto', 'beregning av fullmakter']], img: 'urbar' },
    { tag: 'CASE 06 · KULTUR / FILMDISTRIBUSJON', name: 'Verktøy for filmprogram og visningsrapporter', sub: 'I drift og brukt av teamet', problem: 'Filmprogrammer for festivaler og partnere ble satt sammen for hånd fra et arkiv med flere hundre filmer, med utregning av spilletid og lisenskontroll, mens visningsrapporter til skapere ble laget fra regneark.', solution: 'Et verktøy som foreslår flere programvarianter ut fra tema og rammer (antall filmer, samlet spilletid, lisenser) og gjør visningsdata om til en rapport. Begge dokumentene lages umiddelbart som Word og PDF, på litauisk eller engelsk.', stats: [['I drift', 'brukt av teamet'], ['LT / EN', '.docx og PDF med ett klikk']], img: 'films' },
  ],
  pattern: { label: '05 — DEN RØDE TRÅDEN', title: 'Seks felt. Ett gjentakende mønster.', cols: [
    { t: 'Sortering og kontroll', d: 'Sorter store mengder automatisk; folk avgjør bare unntakene.', ex: 'Gaya · Hakom' },
    { t: 'Produksjon og publisering', d: 'Lag innhold og publiser det i alle kanaler, fra start til slutt, automatisk.', ex: 'Upshift' },
    { t: 'Generering med ett klikk', d: 'Gjør strukturerte inndata om til ferdige dokumenter og regneark.', ex: 'Geosoul · Urbár · Filmprogram' }] },
  how: { label: '06 — HVORDAN VI JOBBER', title: 'Fungerende programvare, raskt.', steps: [
    { t: 'Vi kartlegger prosessen', d: 'Vi lærer hvordan arbeidet faktisk foregår, også de manuelle stegene ingen har dokumentert.' },
    { t: 'Prototype på dager', d: 'Du reagerer på en fungerende skjerm nesten med en gang, ikke på en slide eller en skisse.' },
    { t: 'Vi går live', d: 'Et produkt i bruk kommer tidlig i riktige hender, så nytten starter før prosjektet er ferdig.' },
    { t: 'Vi forbedrer gjennom bruk', d: 'Faktisk bruk viser hva som bør forbedres videre. Produktet blir stadig bedre.' }] },
  diff: { label: '07 — HVORFOR SWIFTRIX', title: 'Forskjellen er pasformen.', rows: [
    { t: 'Laget for deg', d: 'Programvare tilpasset prosessen din, ikke en mal du justerer til den nesten fungerer.' },
    { t: 'Ekte programvare', d: 'Komplette produkter som vokser med virksomheten, uten no-code-grenser om et år.' },
    { t: 'Rask avkastning', d: 'Et fungerende produkt på uker, så du merker avkastningen lenge før fakturaen.' }] },
  short: { label: '08 — KORT SAGT', items: [
    { v: 'Uker', t: 'Til en fungerende versjon', d: 'Ikke måneder med kravspesifikasjon før du ser noe.' },
    { v: 'Alle', t: 'Felt, alle prosesser', d: 'Media, kultur, dokumenter, ingeniørfag, trykk, eiendom: din er neste.' },
    { v: '1', t: 'Studio, fra A til Å', d: 'Vi designer, bygger og lanserer under ett tak.' }] },
  start: { label: '09 — SAMARBEID', title: 'Tre måter å starte på.', items: [
    { t: 'Kartleggingssprint', d: 'En fast fase med lav forpliktelse for å kartlegge prosessen og bygge en prototype av løsningen.' },
    { t: 'Utvikling med fast omfang', d: 'Tydelig omfang, tidsplan og pris for å designe, bygge og lansere produktet.' },
    { t: 'Løpende partnerskap', d: 'Vi forbedrer og utvider produktet etter hvert som virksomheten vokser.' }] },
  qLabel: 'NÅ ER DET DERES TUR', qFoot: 'Ta med disse svarene til en kartleggingssprint: vi kartlegger den faktiske prosessen før vi designer noe.',
  closeLabel: 'LA OSS BYGGE SAMMEN', ideasLabel: 'IDEER',
};

export const src: Src = {
  ui: { who: 'HVEM VI ER', pitch: 'SVARET PÅ 30 SEKUNDER', flow: 'SLIK GÅR EN LEAD GJENNOM APPEN', build: 'HVA VI BYGGER', work: 'HVORDAN VI JOBBER', ways: 'TRE MÅTER Å STARTE PÅ', faq: 'SPØRSMÅL DU KAN FÅ', projects: 'TIDLIGERE PROSJEKTER' },
  who: 'Swiftrix (swiftrix.eu) er et studio som bygger skreddersydd programvare og personlige KI-agenter for bedrifter som har vokst ut av regneark og ferdige standardverktøy.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Vi i Swiftrix bygger skreddersydd programvare og personlige KI-agenter for bedrifter der det viktigste arbeidet fortsatt skjer i regneark, e-post og på papir: dashbord, kundeportaler, dokumentgeneratorer og agenter som svarer på gjentakende spørsmål eller sorterer dokumenter. Vi har vanligvis en første fungerende prototype på uker, ikke måneder.',
  flow: [
    'Kaldt anrop: fatt deg i korthet, vis at du har gjort hjemmeleksa, be om 30 sekunder.',
    'Målet med samtalen: få den beste e-postadressen deres og avtale tid for et kort videomøte 1:1 (Google Meet). Ikke prøv å selge på telefon.',
    'Logg samtalen i appen. Hvis de ble enige om et møte, huk av "meeting agreed", legg inn e-posten deres, velg en ledig tid og send Meet-invitasjonen.',
    'Når kunden har sagt ja, generer slidene og presentasjonsmanuset for den bedriften. Slidene er til Meet, ikke til det kalde anropet.',
    'På Meet: gå gjennom slidene etter presentasjonsmanuset, still kartleggingsspørsmålene og noter prisforventning, verktøyene de bruker og hva de vil ha i avtalen.',
    'Etter Meet: åpne "My calendar", marker utfallet (interested, maybe, not interested, no show) og fyll inn pris, verktøy, avtale og notater.',
  ],
  whatWeDo: [
    { t: 'Driftskonsoller', d: 'Dashbord som gjør rådata om til beslutninger: sortering, kontroll og status på ett blikk.' },
    { t: 'Selvbetjeningsportaler', d: 'Portaler for kunder, skapere og partnere med kontoer, innsendinger, utbetalinger og moderering.' },
    { t: 'Dokumentautomatisering', d: 'Rapporter, Word-filer og regneark som teamet skriver for hånd i dag, laget med ett klikk.' },
    { t: 'Interne verktøy', d: 'Skreddersydd erstatning for regneark- og e-postprosessene en virksomhet hviler på.' },
    { t: 'Personlige KI-agenter', d: 'Agenter som svarer på gjentakende spørsmål, sorterer dokumenter, utformer tilbud og følger opp status.' },
  ],
  howWeWork: ['Vi kartlegger prosessen', 'Prototype på dager', 'Vi går live', 'Vi forbedrer gjennom bruk'],
  ways: [
    { t: 'Kartleggingssprint', d: 'En fast fase med lav forpliktelse for å kartlegge prosessen og bygge en prototype av løsningen.' },
    { t: 'Utvikling med fast omfang', d: 'Tydelig omfang, tidsplan og pris for å designe, bygge og lansere produktet.' },
    { t: 'Løpende partnerskap', d: 'Vi forbedrer og utvider produktet etter hvert som virksomheten vokser.' },
  ],
  faq: [
    { q: 'Hvem er dere og hva gjør dere?', a: 'Vi i Swiftrix bygger skreddersydd programvare og personlige KI-agenter for bedrifter som har vokst ut av regneark: dashbord, portaler, dokumentgeneratorer og agenter for gjentakende arbeid. Poenget er programvare som passer slik bedriften faktisk jobber, ikke en mal man må tilpasse prosessene til.' },
    { q: 'Hvorfor ringer dere oss?', a: 'Vær ærlig og konkret: vi har sett på nettsiden deres og på hvordan bedrifter som dere jobber, og vi tror at en del av det daglige arbeidet (nevn én konkret prosess fra research) fortsatt gjøres for hånd i regneark, e-post eller på papir. Vi vil gjerne vise i et kort videomøte hvordan det kunne gått automatisk. Samtalemanuset i appen har detaljene for hver bedrift.' },
    { q: 'Hva kan dere bygge for oss, helt konkret?', a: 'Fire typer ting, gjort godt: driftskonsoller (dashbord), selvbetjeningsportaler, dokumentautomatisering og interne verktøy, i tillegg til personlige KI-agenter. For deres bedrift forbereder vi fire konkrete ideer med skisser, og viser dem i videomøtet.' },
    { q: 'Har dere eksempler eller tidligere prosjekter?', a: 'Ja, seks systemer i drift: Upshift (automatisering av innholdsproduksjon og publisering), Gaya (konsoll for dokumentskanning), Geosoul (generator for tekniske rapporter), Hakom & Aluprint (styring av kvalitetsdokumenter), Urbár (automatisering av grunneierskap og fullmakter) og et verktøy for filmprogram og visningsrapporter som teamet bruker. Velg ett eller to som ligger nærmest virksomheten deres. Detaljer lenger ned på denne siden.' },
    { q: 'Hvor lang tid tar det?', a: 'Vi sikter mot en første fungerende prototype på uker, ikke måneder. Etter en kartleggingssprint ser de en fungerende skjerm svært tidlig, ikke bare en slide. Ikke lov eksakte datoer for prosjektet deres på telefon.' },
    { q: 'Hva koster det?', a: 'Ikke nevn tall i det kalde anropet. Si at prisen avhenger av omfanget, og at vi etter videomøtet kan starte med en kartleggingssprint (en fast fase med lav forpliktelse) eller foreslå utvikling med fast omfang, tydelig tidsplan og pris. Hvis de presser, noter budsjettforventningen og si at vi kommer tilbake med et konkret forslag.' },
    { q: 'Vi har allerede programvare / Excel fungerer fint for oss.', a: 'Det er nettopp der vi er nyttige: standardprogramvare tvinger prosessen til å passe produktet, og regneark knekker når volumet vokser eller flere er avhengige av dem. Vi erstatter ikke det som fungerer. Vi bygger den delen folk fortsatt fyller ut for hånd. Spør hvilken prosess som tar mest manuell tid i dag.' },
    { q: 'Send meg bare en e-post.', a: 'Gjerne. Be om den beste e-postadressen deres (selv om du allerede har en) og forklar at e-posten inneholder en Google Meet-lenke til et kort videomøte 1:1, der vi viser en kort presentasjon laget for bedriften deres og tidligere arbeid. Foreslå to tidspunkter og spør hvilket som passer.' },
    { q: 'Vi har ikke tid eller budsjett.', a: 'Videomøtet er kort og viser noe konkret, ikke en salgstale. Ingenting må avgjøres i møtet. Hvis det ikke er budsjett nå, spør når neste budsjettrunde er planlagt og tilby å ta kontakt da; logg det som "call back" med dato.' },
    { q: 'Er dette et no-code-verktøy eller ekte programvare?', a: 'Ekte programvare: komplette produkter som vokser med bedriften, uten begrensningene til no-code-verktøy om et år. Ikke gå dypere inn på teknologien på telefon.' },
    { q: 'Hva med KI-agenter?', a: 'Vi bygger personlige KI-agenter for gjentakende arbeid: svare på rutinespørsmål, sortere dokumenter, utforme tilbud, følge opp status. Om vi velger agent eller klassisk automatisering, avgjør vi ut fra hva som passer prosessen best. Hold det konkret og knytt det til én av prosessene deres.' },
    { q: 'Hvem eier programvaren, hvor lagres dataene, hva med GDPR og sikkerhet?', a: 'Ikke svar fra hukommelsen. Si at dette er et viktig spørsmål som vi går gjennom i detalj i videomøtet og i avtalen, og noter det slik at det havner i feltet "hva som skal inn i avtalen" etter møtet.' },
    { q: 'Hvor holder dere til og hvor stort er teamet?', a: 'Dette er ikke skrevet ned her ennå. Spør administratoren din før du ringer, og ikke improviser. Hvis du blir spurt før du vet det, si at du presenterer teamet i videomøtet.' },
  ],
};

export const extra: Extra = {
  name: 'Norsk',
  llm: 'Norwegian Bokmål (polite, professional B2B register)',
  where: 'Hvor det passer',
  ask: 'Hva automatiserer vi først?',
  meetIntro: (company) => `Hei,\n\nTakk for at du tok deg tid på telefonen. Som avtalt kommer her vår Google Meet, der vi viser en kort presentasjon laget for ${company} og eksempler på tidligere arbeid.`,
};
