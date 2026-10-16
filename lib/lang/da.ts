import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Før', solution: 'Hvad vi byggede', wouldBuild: 'HVAD VI VILLE BYGGE', today: 'I DAG' },
  kinds: { console: 'DRIFTSKONSOL', documents: 'DOKUMENTAUTOMATISERING', portal: 'SELVBETJENINGSPORTAL', agent: 'AI-AGENT', tool: 'INTERNT VÆRKTØJ' },
  cover: { kicker: 'STUDIE FOR SKRÆDDERSYET SOFTWARE', right: 'OVERBLIK OVER TILBUD · 2026', foot: 'Fungerende prototyper på dage, ikke måneder' },
  what: { label: '01 — HVAD VI GØR', before: 'Vi udvikler ', hl: 'skræddersyet software', after: ' til virksomheder, der er vokset fra regneark og standardværktøjer.', chips: ['Dashboards og konsoller', 'Kunde- og partnerportaler', 'Data- og dokumentautomatisering'] },
  why: { label: '02 — HVORFOR VIRKSOMHEDER VÆLGER OS', title: 'Gode virksomheder, bremset af de forkerte værktøjer.', items: ['Standardsoftware tvinger processerne til at passe til produktet, ikke omvendt.', 'Det vigtigste arbejde foregår i ⟦regneark⟧ og e-mails: skrøbeligt, manuelt og umuligt at skalere.', 'Generiske værktøjer passer aldrig til ⟦de helt konkrete tilfælde⟧, så medarbejdere lapper stille hullerne i hånden, på teamets bekostning.'] },
  build: { label: '03 — HVAD VI BYGGER', title: 'Fire ting, gjort usædvanligt godt.', items: [
    { t: 'Driftskonsoller', d: 'Dashboards, der omsætter rå driftsdata til beslutninger: sortering, gennemgang og status med et blik.' },
    { t: 'Selvbetjeningsportaler', d: 'Portaler til kunder, skabere og partnere med konti, indsendelser, udbetalinger og moderation.' },
    { t: 'Dokumentautomatisering', d: 'Rapporter, Word-filer og regneark, som teamet skriver i hånden i dag, genereret med ét klik.' },
    { t: 'Interne værktøjer', d: 'Skræddersyede erstatninger for de regneark og e-mailforløb, som virksomheden kører på.' }] },
  worksIntro: { label: '04 — UDVALGTE PROJEKTER', title: 'Udvalgte projekter', text: 'Seks systemer, bygget og i daglig brug inden for medier, kultur, tryk, bygningsingeniørarbejde, dokumenthåndtering og jordadministration.' },
  works: [
    { tag: 'CASE 01 · MEDIER / INDHOLDSAUTOMATISERING', name: 'Upshift', sub: 'Platform til indholdsproduktion og planlægning', problem: 'Indhold til sociale medier blev lavet i hånden: find billeder, skriv tekster, saml slides og slå op i hver kanal for sig.', solution: 'Et fuldt automatisk forløb: systemet genererer billeder og tekster, samler slides og videoer, sender dem til godkendelse og udgiver direkte på YouTube, Instagram og Facebook. Samme platform driver et skaberportal, der tjekker visninger og anvender trindelte udbetalingsregler automatisk.', stats: [['€1–2k', 'sparet pr. måned på skabere'], ['A til Z', 'visuelt, tekst og udgivelse']], img: 'upshift' },
    { tag: 'CASE 02 · DOKUMENTHÅNDTERING', name: 'Gaya', sub: 'Konsol til dokumentscanning', problem: 'Medarbejdere sammenlignede dokumenter med en database i hånden, side for side.', solution: 'En konsol, der sorterer en hel bunke i behold, afvis, fejl og dublet og kun viser de undtagelser, der kræver opmærksomhed.', stats: [['Hel bunke', 'sorteret på én gang'], ['1 klik', 'til at scanne og sortere']], img: 'gaya' },
    { tag: 'CASE 03 · BYGNINGSINGENIØRARBEJDE', name: 'Geosoul', sub: 'Generator til ingeniørdokumenter', problem: 'Geotekniske rapporter blev skrevet i hånden i Word: timer pr. rapport og nemt at lave fejl.', solution: 'En guide i to trin, der omsætter få strukturerede input til et fuldt formateret teknisk Word-dokument.', stats: [['2 trin', 'til en færdig rapport'], ['.docx', 'genereret med det samme']], img: 'geosoul' },
    { tag: 'CASE 04 · PRODUKTION / TRYK', name: 'Hakom & Aluprint', sub: 'Håndtering af kvalitetsdokumenter', problem: 'Instrukser og procedurer blev delt ud på papir, uden dokumentation for, hvem der havde læst hvad.', solution: 'Ét system til to firmaer: hver medarbejder ser og bekræfter de dokumenter, der gælder, med fuld versions- og revisionshistorik.', stats: [['Klar til audit', 'dokumenteret læsning'], ['2 i 1', 'fælles platform']], img: 'hakom' },
    { tag: 'CASE 05 · JORDADMINISTRATION', name: 'Urbár', sub: 'Automatisering af ejerskab og mandater', problem: 'Hundredvis af timer gik med at taste Excel-tabeller og beregne ejerskabsmandater i hånden.', solution: 'Upload ejerskabslisterne; systemet behandler dem, beregner hvert mandat og samler resultaterne i færdige regneark.', stats: [['100+ t.', 'sparet pr. cyklus'], ['Auto', 'mandatberegning']], img: 'urbar' },
    { tag: 'CASE 06 · KULTUR / FILMDISTRIBUTION', name: 'Værktøj til filmprogrammer og visningsrapporter', sub: 'I drift og brugt af teamet', problem: 'Filmprogrammer til festivaler og partnere blev sat sammen i hånden ud fra et arkiv med flere hundrede film, med optælling af spilletid og tjek af licenser, mens visningsrapporter til skabere blev bygget i regneark.', solution: 'Et værktøj, der ud fra tema og rammer (antal film, samlet spilletid, licenser) foreslår flere programvarianter og omsætter visningsdata til en rapport. Begge dokumenter produceres straks som Word og PDF, på litauisk eller engelsk.', stats: [['Live', 'brugt af teamet'], ['LT / EN', '.docx og PDF med ét klik']], img: 'films' },
  ],
  pattern: { label: '05 — DEN RØDE TRÅD', title: 'Seks felter. Ét gentaget mønster.', cols: [
    { t: 'Sortering og gennemgang', d: 'Sortér store mængder automatisk; mennesker afgør kun undtagelserne.', ex: 'Gaya · Hakom' },
    { t: 'Oprettelse og udgivelse', d: 'Opret indhold og udgiv det automatisk i alle kanaler, fra start til slut.', ex: 'Upshift' },
    { t: 'Generering med ét klik', d: 'Omsæt strukturerede input til færdige dokumenter og regneark.', ex: 'Geosoul · Urbár · Filmprogrammer' }] },
  how: { label: '06 — SÅDAN ARBEJDER VI', title: 'Fungerende software, hurtigt.', steps: [
    { t: 'Vi kortlægger processen', d: 'Vi forstår, hvordan arbejdet reelt foregår, også de manuelle trin, som ingen dokumenterer.' },
    { t: 'Prototype på dage', d: 'I reagerer næsten med det samme på en fungerende skærm, ikke på et slide eller et mockup.' },
    { t: 'Vi går live', d: 'Et brugt produkt kommer tidligt i de rigtige hænder, så værdien begynder før projektet er slut.' },
    { t: 'Vi forfiner gennem brug', d: 'Den faktiske brug viser, hvad der skal forbedres næste gang. Produktet bliver hele tiden bedre.' }] },
  diff: { label: '07 — HVORFOR SWIFTRIX', title: 'Forskellen er pasformen.', rows: [
    { t: 'Lavet til jer', d: 'Software tilpasset jeres proces, ikke en skabelon, der justeres, til den næsten virker.' },
    { t: 'Rigtig software', d: 'Fuldt udbyggede produkter, der vokser med virksomheden, uden no-code-grænser om et år.' },
    { t: 'Hurtig tilbagebetaling', d: 'Et fungerende produkt på uger, så afkastet mærkes længe før fakturaen.' }] },
  short: { label: '08 — KORT SAGT', items: [
    { v: 'Uger', t: 'Til en fungerende version', d: 'Ikke måneders specifikationer, før der er noget at se.' },
    { v: 'Alle', t: 'Brancher, alle processer', d: 'Medier, kultur, dokumenter, ingeniørarbejde, tryk, jord: jeres er næste.' },
    { v: '1', t: 'Studie, fra A til Z', d: 'Vi designer, bygger og lancerer under samme tag.' }] },
  start: { label: '09 — SAMARBEJDE', title: 'Tre måder at komme i gang på.', items: [
    { t: 'Discovery-sprint', d: 'En fast fase med lav binding til at kortlægge processen og bygge en prototype af løsningen.' },
    { t: 'Udvikling med fast omfang', d: 'Klart omfang, tidsplan og pris for design, udvikling og lancering af produktet.' },
    { t: 'Løbende partnerskab', d: 'Vi videreudvikler og udvider produktet i takt med, at virksomheden vokser.' }] },
  qLabel: 'NU ER DET JERES TUR', qFoot: 'Tag disse svar med til en discovery-sprint: vi kortlægger den reelle proces, før vi designer noget.',
  closeLabel: 'LAD OS BYGGE SAMMEN', ideasLabel: 'IDEER',
};

export const src: Src = {
  ui: { who: 'HVEM VI ER', pitch: 'SVARET PÅ 30 SEKUNDER', flow: 'SÅDAN GÅR ET LEAD GENNEM APPEN', build: 'HVAD VI BYGGER', work: 'SÅDAN ARBEJDER VI', ways: 'TRE MÅDER AT KOMME I GANG PÅ', faq: 'SPØRGSMÅL, DU KAN FÅ', projects: 'TIDLIGERE PROJEKTER' },
  who: 'Swiftrix (swiftrix.eu) er et studie, der bygger skræddersyet software og personlige AI-agenter til virksomheder, der er vokset fra regneark og standardværktøjer.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Vi hos Swiftrix bygger skræddersyet software og personlige AI-agenter til virksomheder, hvor det vigtigste arbejde stadig ligger i regneark, e-mails og på papir: dashboards, kundeportaler, dokumentgeneratorer og agenter, der besvarer gentagne spørgsmål eller sorterer dokumenter. Vi har som regel en første fungerende prototype på dage, ikke måneder.',
  flow: [
    'Koldt opkald: fat dig i korthed, vis at du har forberedt dig, bed om 30 sekunder.',
    'Målet med opkaldet: få den bedste e-mailadresse og aftal tid til et kort 1:1-videomøde (Google Meet). Prøv ikke at sælge i telefonen.',
    'Log opkaldet i appen. Hvis der er aftalt et møde, sæt flueben ved "meeting agreed", skriv e-mailen, vælg en ledig tid og send Meet-invitationen.',
    'Når kunden har sagt ja, generér slides og dit præsentationsmanuskript til virksomheden. Slides er til Meet, ikke til det kolde opkald.',
    'På Meet: gennemgå slides med præsentationsmanuskriptet, stil discovery-spørgsmålene og notér prisforventning, brugte værktøjer og ønsker til aftalen.',
    'Efter Meet: åbn "My calendar", markér resultatet (interested, maybe, not interested, no show) og udfyld pris, værktøjer, aftale og noter.',
  ],
  whatWeDo: [
    { t: 'Driftskonsoller', d: 'Dashboards, der omsætter rå driftsdata til beslutninger: sortering, gennemgang og status med et blik.' },
    { t: 'Selvbetjeningsportaler', d: 'Portaler til kunder, skabere og partnere med konti, indsendelser, udbetalinger og moderation.' },
    { t: 'Dokumentautomatisering', d: 'Rapporter, Word-filer og regneark, som teamet skriver i hånden i dag, genereret med ét klik.' },
    { t: 'Interne værktøjer', d: 'Skræddersyede erstatninger for de regneark og e-mailforløb, en virksomhed kører på.' },
    { t: 'Personlige AI-agenter', d: 'Agenter, der besvarer gentagne spørgsmål, sorterer dokumenter, udarbejder tilbud og følger op på status.' },
  ],
  howWeWork: ['Vi kortlægger processen', 'Prototype på dage', 'Vi går live', 'Vi forfiner gennem brug'],
  ways: [
    { t: 'Discovery-sprint', d: 'En fast fase med lav binding til at kortlægge processen og bygge en prototype af løsningen.' },
    { t: 'Udvikling med fast omfang', d: 'Klart omfang, tidsplan og pris for design, udvikling og lancering af produktet.' },
    { t: 'Løbende partnerskab', d: 'Vi videreudvikler og udvider produktet i takt med, at virksomheden vokser.' },
  ],
  faq: [
    { q: 'Hvem er I, og hvad laver I?', a: 'Vi hos Swiftrix bygger skræddersyet software og personlige AI-agenter til virksomheder, der er vokset fra regneark: dashboards, portaler, dokumentgeneratorer og agenter til gentaget arbejde. Pointen er software, der passer til, hvordan virksomheden reelt arbejder, ikke en skabelon, som processen skal bøje sig efter.' },
    { q: 'Hvorfor ringer I til os?', a: 'Vær ærlig og konkret: vi har kigget på jeres hjemmeside og på, hvordan virksomheder som jeres arbejder, og vi tror, at en del af det daglige arbejde (nævn én konkret proces fra research) stadig klares i hånden i regneark, e-mails eller på papir. Vi vil gerne vise i et kort videomøde, hvordan det kunne køre automatisk. Opkaldsmanuskriptet i appen har detaljerne for hver virksomhed.' },
    { q: 'Hvad kan I helt konkret bygge til os?', a: 'Fire slags ting, gjort godt: driftskonsoller (dashboards), selvbetjeningsportaler, dokumentautomatisering og interne værktøjer, plus personlige AI-agenter. Til deres virksomhed forbereder vi fire konkrete idéer med mockup-skærme og viser dem i videomødet.' },
    { q: 'Har I eksempler eller tidligere projekter?', a: 'Ja, seks fungerende systemer: Upshift (automatisering af indholdsproduktion og udgivelse), Gaya (konsol til dokumentscanning), Geosoul (generator til ingeniørrapporter), Hakom & Aluprint (håndtering af kvalitetsdokumenter), Urbár (automatisering af jordejerskab og mandater) og et værktøj til filmprogrammer og visningsrapporter, som teamet bruger. Vælg det eller de to, der ligger tættest på deres forretning. Detaljer længere nede på siden.' },
    { q: 'Hvor lang tid tager det?', a: 'Vi sigter mod en første fungerende prototype på dage, ikke måneder. Efter en discovery-sprint ser de en fungerende skærm meget tidligt, ikke bare et slide. Lov ikke præcise datoer for deres projekt i telefonen.' },
    { q: 'Hvad koster det?', a: 'Nævn ingen tal i det kolde opkald. Sig, at prisen afhænger af omfanget, og at vi efter videomødet kan starte med en discovery-sprint (en fast fase med lav binding) eller foreslå en udvikling med fast omfang, tidsplan og pris. Hvis de presser på, notér deres budgetforventning og sig, at vi vender tilbage med et konkret forslag.' },
    { q: 'Vi har allerede software / vores Excel fungerer fint.', a: 'Det er netop dér, vi er nyttige: standardsoftware tvinger processen til at passe til produktet, og regneark bryder sammen, når volumen vokser, eller flere er afhængige af dem. Vi erstatter ikke det, der virker. Vi bygger den del, folk stadig udfylder i hånden. Spørg, hvilken proces der kræver mest manuel tid i dag.' },
    { q: 'Send mig bare en e-mail.', a: 'Gerne. Bed om den bedste e-mailadresse (også selv om du allerede har en) og forklar, at e-mailen indeholder et Google Meet-link til et kort 1:1-videomøde, hvor vi viser en kort præsentation lavet til deres virksomhed og vores tidligere arbejde. Tilbyd to tidspunkter og spørg, hvad der passer.' },
    { q: 'Vi har ikke tid eller budget.', a: 'Videomødet er kort og viser noget konkret, ikke en salgstale. Der skal ikke besluttes noget under mødet. Hvis der ikke er budget nu, spørg hvornår næste budgetrunde er, og tilbyd at følge op da; log det som "call back" med dato.' },
    { q: 'Er det et no-code-værktøj eller rigtig software?', a: 'Rigtig software: fuldt udbyggede produkter, der vokser med virksomheden, uden no-code-værktøjernes grænser om et år. Gå ikke dybere ind i teknologien i telefonen.' },
    { q: 'Hvad med AI-agenter?', a: 'Vi bygger personlige AI-agenter til gentaget arbejde: besvarelse af rutinespørgsmål, sortering af dokumenter, udarbejdelse af tilbud, opfølgning på status. Om det bliver en agent eller klassisk automatisering, afgør vi ud fra, hvad der passer bedst til deres proces. Hold det konkret og knyt det til én af deres processer.' },
    { q: 'Hvem ejer softwaren, hvor gemmes data, hvad med GDPR og sikkerhed?', a: 'Svar ikke efter hukommelsen. Sig, at det er et vigtigt spørgsmål, som vi gennemgår i detaljer i videomødet og i aftalen, og notér det, så det kommer med i feltet "hvad skal i aftalen" efter mødet.' },
    { q: 'Hvor holder I til, og hvor stort er teamet?', a: 'Det er ikke skrevet ned her endnu. Spørg din admin, før du ringer, og lad være med at improvisere. Hvis du bliver spurgt, før du ved det, så sig, at du præsenterer teamet i videomødet.' },
  ],
};

export const extra: Extra = {
  name: 'Dansk',
  llm: 'Danish (polite, professional B2B register)',
  where: 'Hvor det passer ind',
  ask: 'Hvad skal vi automatisere først?',
  meetIntro: (company) => `Hej,\n\nTak for tiden i telefonen. Som aftalt er her vores Google Meet, hvor vi gennemgår en kort præsentation, vi har forberedt til ${company}, og viser eksempler på vores tidligere arbejde.`,
};
