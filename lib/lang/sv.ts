import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Tidigare', solution: 'Vad vi byggde', wouldBuild: 'VAD VI SKULLE BYGGA', today: 'IDAG' },
  kinds: { console: 'DRIFTKONSOL', documents: 'DOKUMENTAUTOMATION', portal: 'SJÄLVBETJÄNINGSPORTAL', agent: 'AI-AGENT', tool: 'INTERNT VERKTYG' },
  cover: { kicker: 'STUDIO FÖR SKRÄDDARSYDD MJUKVARA', right: 'OFFERTÖVERSIKT · 2026', foot: 'Fungerande prototyper på dagar, inte månader' },
  what: { label: '01 — VAD VI GÖR', before: 'Vi bygger ', hl: 'skräddarsydd mjukvara', after: ' för företag som vuxit ur kalkylblad och standardverktyg.', chips: ['Dashboards och konsoler', 'Kund- och partnerportaler', 'Data- och dokumentautomation'] },
  why: { label: '02 — VARFÖR FÖRETAG VÄNDER SIG TILL OSS', title: 'Bra företag som hålls tillbaka av fel verktyg.', items: ['Standardmjukvara tvingar processerna att anpassas efter produkten, inte tvärtom.', 'Det viktigaste arbetet sker i ⟦kalkylblad⟧ och e-post: sårbart, manuellt och omöjligt att skala.', 'Generiska verktyg passar aldrig ⟦de exakta fallen⟧, så medarbetare fyller i tysthet luckorna för hand, på teamets bekostnad.'] },
  build: { label: '03 — VAD VI BYGGER', title: 'Fyra saker, gjorda exceptionellt bra.', items: [
    { t: 'Driftkonsoler', d: 'Dashboards som gör rådata till beslut: sortering, granskning och status i en överblick.' },
    { t: 'Självbetjäningsportaler', d: 'Portaler för kunder, skapare och partner med konton, inlämningar, utbetalningar och moderering.' },
    { t: 'Dokumentautomation', d: 'Rapporter, Word-filer och kalkylblad som teamet skriver för hand idag, skapade med ett klick.' },
    { t: 'Interna verktyg', d: 'Skräddarsydda ersättare för de kalkylblads- och e-postprocesser som verksamheten vilar på.' }] },
  worksIntro: { label: '04 — UTVALDA PROJEKT', title: 'Utvalda projekt', text: 'Sex system, byggda och i daglig drift inom media, kultur, tryck, byggteknik, dokumenthantering och markadministration.' },
  works: [
    { tag: 'CASE 01 · MEDIA / INNEHÅLLSAUTOMATION', name: 'Upshift', sub: 'Plattform för innehållsskapande och planering', problem: 'Innehåll för sociala medier skapades för hand: bildsökning, textskrivning, slides och publicering i varje kanal för sig.', solution: 'Ett helautomatiskt flöde: systemet genererar bilder och texter, sätter ihop slides och videor, skickar dem för godkännande och publicerar direkt på YouTube, Instagram och Facebook. Samma plattform driver en skaparportal som kontrollerar visningar och tillämpar trappade utbetalningsregler automatiskt.', stats: [['€1–2k', 'sparas per månad på skapare'], ['A till Ö', 'bild, text och publicering']], img: 'upshift' },
    { tag: 'CASE 02 · DOKUMENTHANTERING', name: 'Gaya', sub: 'Konsol för dokumentskanning', problem: 'Personalen jämförde dokument med en databas för hand, sida för sida.', solution: 'En konsol som sorterar en hel bunt i behåll, avvisa, fel och dubblett, och visar bara de undantag som kräver uppmärksamhet.', stats: [['Hela bunten', 'sorteras på en gång'], ['1 klick', 'för att skanna och sortera']], img: 'gaya' },
    { tag: 'CASE 03 · BYGGTEKNIK', name: 'Geosoul', sub: 'Generator för tekniska dokument', problem: 'Geotekniska rapporter skrevs för hand i Word: timmar per rapport och lätt att göra fel.', solution: 'En guide i två steg som gör några strukturerade indata till ett fullt formaterat tekniskt Word-dokument.', stats: [['2 steg', 'till färdig rapport'], ['.docx', 'skapas direkt']], img: 'geosoul' },
    { tag: 'CASE 04 · TILLVERKNING / TRYCK', name: 'Hakom & Aluprint', sub: 'Hantering av kvalitetsdokument', problem: 'Instruktioner och rutiner delades ut på papper, utan bevis för vem som läst vad.', solution: 'Ett system för två företag: varje medarbetare ser och bekräftar de dokument som gäller dem, med fullständig versions- och revisionshistorik.', stats: [['Revisionsklart', 'bevis på läsning'], ['2 i 1', 'delad plattform']], img: 'hakom' },
    { tag: 'CASE 05 · MARKADMINISTRATION', name: 'Urbár', sub: 'Automation av ägande och mandat', problem: 'Hundratals timmar gick åt till att skriva Excel-tabeller och räkna ägarmandat för hand.', solution: 'Ladda upp ägarlistorna; systemet bearbetar dem, räknar ut varje mandat och sammanställer resultaten i färdiga kalkylblad.', stats: [['100+ tim.', 'sparas per omgång'], ['Auto', 'mandatberäkning']], img: 'urbar' },
    { tag: 'CASE 06 · KULTUR / FILMDISTRIBUTION', name: 'Verktyg för filmprogram och visningsrapporter', sub: 'I drift och använt av teamet', problem: 'Filmprogram för festivaler och partner sattes ihop för hand ur ett arkiv på flera hundra filmer, med längdräkning och licenskontroll, medan visningsrapporter till skapare byggdes av kalkylblad.', solution: 'Ett verktyg som föreslår flera programalternativ utifrån tema och gränser (antal filmer, total speltid, licenser) och gör visningsdata till en rapport. Båda dokumenten skapas direkt som Word och PDF, på litauiska eller engelska.', stats: [['Live', 'används av teamet'], ['LT / EN', '.docx och PDF med ett klick']], img: 'films' },
  ],
  pattern: { label: '05 — DEN RÖDA TRÅDEN', title: 'Sex områden. Ett återkommande mönster.', cols: [
    { t: 'Sortering och granskning', d: 'Sortera stora volymer automatiskt; människor avgör bara undantagen.', ex: 'Gaya · Hakom' },
    { t: 'Skapa och publicera', d: 'Skapa innehåll och publicera det i alla kanaler, från start till mål, automatiskt.', ex: 'Upshift' },
    { t: 'Generering med ett klick', d: 'Gör strukturerade indata till färdiga dokument och kalkylblad.', ex: 'Geosoul · Urbár · Filmprogram' }] },
  how: { label: '06 — SÅ ARBETAR VI', title: 'Fungerande mjukvara, snabbt.', steps: [
    { t: 'Vi kartlägger processen', d: 'Vi tar reda på hur arbetet verkligen går till, även de manuella steg som ingen dokumenterar.' },
    { t: 'Prototyp på dagar', d: 'Man reagerar nästan direkt på en fungerande skärm, inte på en slide eller en mockup.' },
    { t: 'Vi går live', d: 'En använd produkt kommer tidigt i verkliga händer, så nyttan börjar före projektets slut.' },
    { t: 'Vi förfinar genom användning', d: 'Verklig användning visar vad som ska förbättras härnäst. Produkten blir hela tiden bättre.' }] },
  diff: { label: '07 — VARFÖR SWIFTRIX', title: 'Skillnaden är passformen.', rows: [
    { t: 'Gjord för er', d: 'Mjukvara anpassad efter er process, inte en mall som ni justerar tills den nästan fungerar.' },
    { t: 'Riktig mjukvara', d: 'Kompletta produkter som växer med er, utan no-code-gränser om ett år.' },
    { t: 'Snabb återbäring', d: 'En fungerande produkt inom några veckor, så avkastningen märks långt före fakturan.' }] },
  short: { label: '08 — I KORTHET', items: [
    { v: 'Veckor', t: 'Till en fungerande version', d: 'Inte månader av specifikationer innan något syns.' },
    { v: 'Alla', t: 'Områden, alla processer', d: 'Media, kultur, dokument, teknik, tryck, mark: ert är näst på tur.' },
    { v: '1', t: 'Studio, från A till Ö', d: 'Vi designar, bygger och lanserar under ett tak.' }] },
  start: { label: '09 — SAMARBETE', title: 'Tre sätt att komma igång.', items: [
    { t: 'Discovery-sprint', d: 'En fast fas med litet åtagande för att kartlägga processen och bygga en prototyp av lösningen.' },
    { t: 'Bygge med fast omfattning', d: 'Tydlig omfattning, tidplan och pris för att designa, bygga och lansera produkten.' },
    { t: 'Löpande partnerskap', d: 'Vi fortsätter förbättra och utöka produkten i takt med att verksamheten växer.' }] },
  qLabel: 'NU ER TUR', qFoot: 'Ta med de här svaren till en discovery-sprint: vi kartlägger den verkliga processen innan vi designar något.',
  closeLabel: 'LÅT OSS BYGGA TILLSAMMANS', ideasLabel: 'IDÉER',
};

export const src: Src = {
  ui: { who: 'VILKA VI ÄR', pitch: 'SVARET PÅ 30 SEKUNDER', flow: 'SÅ GÅR EN LEAD GENOM APPEN', build: 'VAD VI BYGGER', work: 'SÅ ARBETAR VI', ways: 'TRE SÄTT ATT KOMMA IGÅNG', faq: 'FRÅGOR SOM KAN KOMMA', projects: 'TIDIGARE PROJEKT' },
  who: 'Swiftrix (swiftrix.eu) är en studio som bygger skräddarsydd mjukvara och personanpassade AI-agenter för företag som vuxit ur kalkylblad och standardverktyg.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Vi på Swiftrix bygger skräddarsydd mjukvara och personanpassade AI-agenter för företag vars viktigaste arbete fortfarande ligger i kalkylblad, e-post och på papper: dashboards, kundportaler, dokumentgeneratorer och agenter som svarar på återkommande frågor eller sorterar dokument. Vi har oftast en första fungerande prototyp inom några dagar, inte månader.',
  flow: [
    'Kallsamtal: fatta dig kort, visa att du gjort din research, be om 30 sekunder.',
    'Målet med samtalet: få den bästa e-postadressen och boka en tid för ett kort videomöte 1:1 (Google Meet). Försök inte sälja i telefon.',
    'Logga samtalet i appen. Om de gått med på ett möte, bocka i ”meeting agreed”, ange e-postadressen, välj en ledig tid och skicka Meet-inbjudan.',
    'När kunden har tackat ja, generera slides och ditt presentationsmanus för företaget. Slides är till Meet, inte till kallsamtalet.',
    'På Meet: gå igenom slides med presentationsmanuset, ställ discovery-frågorna och anteckna prisförväntningar, verktyg de använder och vad de vill ha i avtalet.',
    'Efter Meet: öppna ”My calendar”, markera resultatet (interested, maybe, not interested, no show) och fyll i pris, verktyg, avtal och anteckningar.',
  ],
  whatWeDo: [
    { t: 'Driftkonsoler', d: 'Dashboards som gör rådata till beslut: sortering, granskning och status i en överblick.' },
    { t: 'Självbetjäningsportaler', d: 'Portaler för kunder, skapare och partner med konton, inlämningar, utbetalningar och moderering.' },
    { t: 'Dokumentautomation', d: 'Rapporter, Word-filer och kalkylblad som teamet skriver för hand idag, skapade med ett klick.' },
    { t: 'Interna verktyg', d: 'Skräddarsydda ersättare för de kalkylblads- och e-postprocesser som ett företag vilar på.' },
    { t: 'Personanpassade AI-agenter', d: 'Agenter som svarar på återkommande frågor, sorterar dokument, skriver offertutkast och följer upp status.' },
  ],
  howWeWork: ['Vi kartlägger processen', 'Prototyp på dagar', 'Vi går live', 'Vi förfinar genom användning'],
  ways: [
    { t: 'Discovery-sprint', d: 'En fast fas med litet åtagande för att kartlägga processen och bygga en prototyp av lösningen.' },
    { t: 'Bygge med fast omfattning', d: 'Tydlig omfattning, tidplan och pris för att designa, bygga och lansera produkten.' },
    { t: 'Löpande partnerskap', d: 'Vi fortsätter förbättra och utöka produkten i takt med att verksamheten växer.' },
  ],
  faq: [
    { q: 'Vilka är ni och vad gör ni?', a: 'Vi på Swiftrix bygger skräddarsydd mjukvara och personanpassade AI-agenter för företag som vuxit ur kalkylblad: dashboards, portaler, dokumentgeneratorer och agenter för återkommande arbete. Poängen är mjukvara som passar hur företaget verkligen arbetar, inte en mall som processen måste böjas efter.' },
    { q: 'Varför ringer ni oss?', a: 'Var ärlig och konkret: vi har tittat på er webbplats och på hur företag som ert arbetar, och vi tror att en del av det dagliga arbetet (nämn en konkret process från researchen) fortfarande görs för hand i kalkylblad, e-post eller på papper. Vi vill gärna visa i ett kort videomöte hur det kan gå automatiskt. Samtalsmanuset i appen har detaljerna för varje företag.' },
    { q: 'Vad kan ni bygga åt oss?', a: 'Fyra typer av lösningar, gjorda bra: driftkonsoler (dashboards), självbetjäningsportaler, dokumentautomation och interna verktyg, samt personanpassade AI-agenter. För deras företag tar vi fram fyra konkreta idéer med skärmmockups och visar dem i videomötet.' },
    { q: 'Har ni exempel eller tidigare projekt?', a: 'Ja, sex fungerande system: Upshift (automation av innehållsskapande och publicering), Gaya (konsol för dokumentskanning), Geosoul (generator för tekniska rapporter), Hakom & Aluprint (hantering av kvalitetsdokument), Urbár (automation av markägande och mandat) samt ett verktyg för filmprogram och visningsrapporter som teamet använder. Välj ett eller två som ligger närmast deras verksamhet. Detaljer finns längre ned på sidan.' },
    { q: 'Hur lång tid tar det?', a: 'Vi siktar på en första fungerande prototyp inom några dagar, inte månader. Efter en discovery-sprint ser de en fungerande skärm mycket tidigt, inte bara en slide. Lova inga exakta datum för deras projekt i telefon.' },
    { q: 'Vad kostar det?', a: 'Nämn inga siffror i kallsamtalet. Säg att priset beror på omfattningen och att vi efter videomötet kan börja med en discovery-sprint (en fast fas med litet åtagande) eller föreslå ett bygge med fast omfattning, tydlig tidplan och pris. Om de trycker på, anteckna budgetförväntningen och säg att vi återkommer med ett konkret förslag.' },
    { q: 'Vi har redan mjukvara / vårt Excel fungerar bra.', a: 'Det är precis där vi är till nytta: standardmjukvara tvingar processen att passa produkten, och kalkylblad går sönder när volymerna växer eller flera personer är beroende av dem. Vi ersätter inte det som fungerar. Vi bygger den del som fortfarande fylls i för hand. Fråga vilken process som tar mest manuell tid idag.' },
    { q: 'Skicka bara ett mejl.', a: 'Gärna. Be om den bästa e-postadressen (även om du redan har en) och förklara att mejlet innehåller en Google Meet-länk till ett kort videomöte 1:1, där vi visar en kort presentation som tagits fram för deras företag samt våra tidigare projekt. Föreslå två tider och fråga vilken som passar.' },
    { q: 'Vi har ingen tid eller ingen budget.', a: 'Videomötet är kort och visar något konkret, inget säljtal. Inget behöver beslutas under mötet. Om det inte finns budget nu, fråga när nästa budgetrunda planeras och erbjud att höra av dig då; logga det som ”call back” med datum.' },
    { q: 'Är det ett no-code-verktyg eller riktig mjukvara?', a: 'Riktig mjukvara: kompletta produkter som växer med företaget, utan no-code-verktygens begränsningar om ett år. Gå inte djupare in på tekniken i telefon.' },
    { q: 'Hur är det med AI-agenter?', a: 'Vi bygger personanpassade AI-agenter för återkommande arbete: svar på rutinfrågor, dokumentsortering, offertutkast och statusuppföljning. Vi väljer mellan agent och klassisk automation utifrån vad som passar deras process bäst. Håll det konkret och knyt det till en av deras processer.' },
    { q: 'Vem äger mjukvaran, var lagras data, hur är det med GDPR och säkerhet?', a: 'Svara inte på rak arm. Säg att det är en viktig fråga som vi går igenom i detalj i videomötet och i avtalet, och anteckna den så att den hamnar i fältet ”vad som ska in i avtalet” efter mötet.' },
    { q: 'Var har ni er bas och hur stort är teamet?', a: 'Det är inte nedskrivet här ännu. Fråga din admin innan du ringer och improvisera inte. Om du får frågan innan du vet, säg att du presenterar teamet i videomötet.' },
  ],
};

export const extra: Extra = {
  name: 'Svenska',
  llm: 'Swedish (polite, professional B2B register)',
  where: 'Där det passar',
  ask: 'Vad automatiserar vi först?',
  meetIntro: (company) => `Hej,\n\nTack för att du tog dig tid i telefon. Som överenskommet kommer här vår Google Meet, där vi går igenom en kort presentation som tagits fram för ${company} och visar exempel på våra tidigare projekt.`,
};
