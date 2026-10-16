import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Iepriekš', solution: 'Ko mēs izveidojām', wouldBuild: 'KO MĒS VEIDOTU', today: 'ŠODIEN' },
  kinds: { console: 'OPERĀCIJU KONSOLE', documents: 'DOKUMENTU AUTOMATIZĀCIJA', portal: 'SAVAPKALPES PORTĀLS', agent: 'MI AĢENTS', tool: 'IEKŠĒJAIS RĪKS' },
  cover: { kicker: 'INDIVIDUĀLAS PROGRAMMATŪRAS STUDIJA', right: 'PIEDĀVĀJUMA PĀRSKATS · 2026', foot: 'Strādājoši prototipi dienu laikā, nevis mēnešos' },
  what: { label: '01 — KO MĒS DARĀM', before: 'Mēs veidojam ', hl: 'individuālu programmatūru', after: ' uzņēmumiem, kas ir izauguši no Excel tabulām un standarta rīkiem.', chips: ['Informācijas paneļi un konsoles', 'Klientu un partneru portāli', 'Datu un dokumentu automatizācija'] },
  why: { label: '02 — KĀPĒC UZŅĒMUMI VĒRŠAS PIE MUMS', title: 'Labi uzņēmumi, kurus bremzē nepiemēroti rīki.', items: ['Standarta programmatūra liek Jūsu procesiem pielāgoties tās produktam, nevis otrādi.', 'Svarīgākais darbs notiek ⟦Excel tabulās⟧ un e-pastos: trausli, manuāli un nemērogojami.', 'Universāli rīki nekad neatbilst ⟦tieši Jūsu gadījumiem⟧, tāpēc cilvēki klusi aizpilda robus ar rokām, komandas rēķina.'] },
  build: { label: '03 — KO MĒS VEIDOJAM', title: 'Četri risinājumi, kas paveikti teicami.', items: [
    { t: 'Operāciju konsoles', d: 'Informācijas paneļi, kas pārvērš neapstrādātus datus lēmumos: šķirošana, pārbaude un statuss ar vienu skatienu.' },
    { t: 'Savapkalpes portāli', d: 'Portāli klientiem, satura veidotājiem un partneriem ar kontiem, iesniegumiem, izmaksām un moderāciju.' },
    { t: 'Dokumentu automatizācija', d: 'Atskaites, Word faili un tabulas, ko komanda šodien raksta ar rokām, tiek izveidotas ar vienu klikšķi.' },
    { t: 'Iekšējie rīki', d: 'Mērķtiecīgi izveidoti aizstājēji tabulu un e-pasta procesiem, uz kuriem balstās Jūsu darbs.' }] },
  worksIntro: { label: '04 — IZVĒLĒTIE DARBI', title: 'Izvēlētie darbi', text: 'Sešas sistēmas, kas izveidotas un tiek lietotas ikdienā medijos, kultūrā, poligrāfijā, būvinženierijā, dokumentu pārvaldībā un zemes administrēšanā.' },
  works: [
    { tag: 'GADĪJUMS 01 · MEDIJI / SATURA AUTOMATIZĀCIJA', name: 'Upshift', sub: 'Satura veidošanas un plānošanas platforma', problem: 'Sociālo tīklu saturs tika veidots ar rokām: attēlu meklēšana, tekstu rakstīšana, slaidu komplektēšana un publicēšana katrā kanālā atsevišķi.', solution: 'Pilnībā automatizēta plūsma: sistēma ģenerē attēlus un tekstus, sagatavo slaidus un video, iesniedz tos apstiprināšanai un publicē tieši YouTube, Instagram un Facebook. Tā pati platforma darbina satura veidotāju portālu, kas pārbauda skatījumus un automātiski piemēro pakāpeniskas izmaksu kārtības.', stats: [['€1–2k', 'ietaupījums mēnesī uz veidotājiem'], ['No A līdz Z', 'vizuāļi, teksti un publicēšana']], img: 'upshift' },
    { tag: 'GADĪJUMS 02 · DOKUMENTU PĀRVALDĪBA', name: 'Gaya', sub: 'Dokumentu skenēšanas konsole', problem: 'Darbinieki ar rokām, lappusi pa lappusei, salīdzināja dokumentus ar datubāzi.', solution: 'Konsole, kas visu partiju sašķiro kategorijās paturēt, noraidīt, kļūda un dublikāts, un parāda tikai izņēmumus, kam jāpievērš uzmanība.', stats: [['Visa partija', 'sašķirota uzreiz'], ['1 klikšķis', 'skenēšanai un šķirošanai']], img: 'gaya' },
    { tag: 'GADĪJUMS 03 · BŪVINŽENIERIJA', name: 'Geosoul', sub: 'Inženierdokumentu ģenerators', problem: 'Ģeotehniskie atzinumi tika rakstīti ar rokām Word programmā: katrs aizņēma stundas, un kļūdīties bija viegli.', solution: 'Divu soļu vednis, kas no dažiem strukturētiem ievaddatiem izveido pilnībā noformētu tehnisko Word dokumentu.', stats: [['2 soļi', 'līdz gatavam atzinumam'], ['.docx', 'izveidots uzreiz']], img: 'geosoul' },
    { tag: 'GADĪJUMS 04 · RAŽOŠANA / POLIGRĀFIJA', name: 'Hakom & Aluprint', sub: 'Kvalitātes dokumentu pārvaldība', problem: 'Instrukcijas un procedūras tika izsniegtas uz papīra, bez pierādījuma, kurš ko ir izlasījis.', solution: 'Viena sistēma diviem uzņēmumiem: katrs darbinieks redz un apstiprina sev piemērojamos dokumentus, ar pilnu versiju un redakciju vēsturi.', stats: [['Auditam gatavs', 'izlasīšanas pierādījums'], ['2 vienā', 'kopīga platforma']], img: 'hakom' },
    { tag: 'GADĪJUMS 05 · ZEMES ADMINISTRĒŠANA', name: 'Urbár', sub: 'Īpašumtiesību un pilnvaru automatizācija', problem: 'Simtiem stundu tika veltīts Excel tabulu pārrakstīšanai un īpašumtiesību pilnvaru aprēķinam ar rokām.', solution: 'Augšupielādējiet īpašuma lapas; sistēma tās apstrādā, aprēķina katru pilnvaru un apvieno rezultātus gatavās tabulās.', stats: [['100+ st.', 'ietaupījums vienā ciklā'], ['Auto', 'pilnvaru aprēķins']], img: 'urbar' },
    { tag: 'GADĪJUMS 06 · KULTŪRA / FILMU IZPLATĪŠANA', name: 'Filmu programmu un seansu atskaišu rīks', sub: 'Darbojas un tiek lietots komandas darbā', problem: 'Filmu programmas festivāliem un partneriem tika veidotas ar rokām no vairāku simtu filmu arhīva, skaitot hronometrāžu un pārbaudot licences, bet seansu atskaites veidotājiem tika gatavotas no tabulām.', solution: 'Rīks, kas pēc tēmas un ierobežojumiem (filmu skaits, kopējā hronometrāža, licences) piedāvā vairākus programmas variantus un pārvērš seansu datus atskaitē. Abi dokumenti uzreiz tiek izveidoti Word un PDF formātā, lietuviešu vai angļu valodā.', stats: [['Darbojas', 'komandas ikdienas darbā'], ['LT / EN', '.docx un PDF ar vienu klikšķi']], img: 'films' },
  ],
  pattern: { label: '05 — KOPĒJAIS NOSACĪJUMS', title: 'Sešas jomas. Viens atkārtots modelis.', cols: [
    { t: 'Šķirošana un pārbaude', d: 'Lielus apjomus šķirojiet automātiski; cilvēki izlemj tikai izņēmumus.', ex: 'Gaya · Hakom' },
    { t: 'Veidošana un publicēšana', d: 'Veidojiet saturu un publicējiet to visos kanālos automātiski, no sākuma līdz beigām.', ex: 'Upshift' },
    { t: 'Izveide ar vienu klikšķi', d: 'Strukturētus datus pārvērtiet gatavos dokumentos un tabulās.', ex: 'Geosoul · Urbár · Filmu programmas' }] },
  how: { label: '06 — KĀ MĒS STRĀDĀJAM', title: 'Strādājoša programmatūra, ātri.', steps: [
    { t: 'Izpētām procesu', d: 'Izprotam, kā darbs patiesībā notiek, ieskaitot manuālos soļus, ko neviens nedokumentē.' },
    { t: 'Prototips dažās dienās', d: 'Jūs reaģējat uz strādājošu ekrānu gandrīz uzreiz, nevis uz slaidu vai maketu.' },
    { t: 'Palaižam darbībā', d: 'Lietots produkts agri nonāk īstās rokās, tāpēc ieguvums sākas pirms projekta beigām.' },
    { t: 'Pilnveidojam lietošanas gaitā', d: 'Reāla lietošana parāda, ko uzlabot tālāk. Produkts nepārtraukti kļūst labāks.' }] },
  diff: { label: '07 — KĀPĒC SWIFTRIX', title: 'Atšķirība ir precīza atbilstība.', rows: [
    { t: 'Veidots Jums', d: 'Programmatūra, kas pielāgota Jūsu procesam, nevis veidne, ko labojat, kamēr tā gandrīz darbojas.' },
    { t: 'Īsta programmatūra', d: 'Pilna cikla produkti, kas aug kopā ar Jums, bez „no-code“ ierobežojumiem pēc gada.' },
    { t: 'Ātra atdeve', d: 'Strādājošs produkts nedēļu laikā, atdevi sajutīsiet krietni pirms rēķina.' }] },
  short: { label: '08 — ĪSUMĀ', items: [
    { v: 'Nedēļas', t: 'Līdz strādājošai versijai', d: 'Nevis mēneši specifikāciju, pirms kaut ko ieraugāt.' },
    { v: 'Jebkura', t: 'Joma, jebkurš process', d: 'Mediji, kultūra, dokumenti, inženierija, poligrāfija, zeme: nākamā var būt Jūsu.' },
    { v: '1', t: 'Studija no A līdz Z', d: 'Projektējam, veidojam un palaižam zem viena jumta.' }] },
  start: { label: '09 — SADARBĪBA', title: 'Trīs veidi, kā sākt.', items: [
    { t: 'Izpētes sprints', d: 'Fiksēts, maz saistošs posms procesa izpētei un risinājuma prototipa izveidei.' },
    { t: 'Izstrāde ar fiksētu apjomu', d: 'Skaidrs apjoms, termiņš un cena produkta projektēšanai, izveidei un palaišanai.' },
    { t: 'Ilgtermiņa partnerība', d: 'Turpinām pilnveidot un paplašināt produktu, augot Jūsu uzņēmumam.' }] },
  qLabel: 'TAGAD JŪS', qFoot: 'Atnesiet šīs atbildes uz izpētes sprintu: īsto procesu izpētām, pirms kaut ko projektējam.',
  closeLabel: 'VEIDOSIM KOPĀ', ideasLabel: 'IDEJAS',
};

export const src: Src = {
  ui: { who: 'KAS MĒS ESAM', pitch: 'ATBILDE 30 SEKUNDĒS', flow: 'KĀ KLIENTS IET CAUR LIETOTNI', build: 'KO MĒS VEIDOJAM', work: 'KĀ MĒS STRĀDĀJAM', ways: 'TRĪS VEIDI, KĀ SĀKT', faq: 'JAUTĀJUMI, KO VAR UZDOT', projects: 'IEPRIEKŠĒJIE PROJEKTI' },
  who: 'Swiftrix (swiftrix.eu) ir studija, kas veido individuālu programmatūru un personalizētus MI aģentus uzņēmumiem, kuri izauguši no Excel tabulām un standarta rīkiem.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Mēs Swiftrix veidojam individuālu programmatūru un personalizētus MI aģentus uzņēmumiem, kuru svarīgākais darbs joprojām notiek tabulās, e-pastos un uz papīra: informācijas panelus, klientu portālus, dokumentu ģeneratorus un aģentus, kas atbild uz atkārtotiem jautājumiem vai šķiro dokumentus. Pirmo strādājošo prototipu parasti sagatavojam dienu laikā, nevis mēnešos.',
  flow: [
    'Aukstais zvans: runājiet īsi, parādiet, ka esat sagatavojušies, lūdziet 30 sekundes.',
    'Zvana mērķis: iegūt viņu labāko e-pasta adresi un vienoties par laiku īsam 1:1 video zvanam (Google Meet). Nemēģiniet pārdot pa tālruni.',
    'Reģistrējiet zvanu lietotnē. Ja viņi piekrita tikties, atzīmējiet „meeting agreed“, ievadiet e-pastu, izvēlieties brīvu laiku un nosūtiet Meet ielūgumu.',
    'Kad klients piekritis, izveidojiet slaidus un savu prezentācijas scenāriju šim uzņēmumam. Slaidi ir paredzēti Meet sarunai, nevis aukstajam zvanam.',
    'Meet laikā: izejiet cauri slaidiem pēc prezentācijas scenārija, uzdodiet izpētes jautājumus, pierakstiet cenas gaidas, viņu lietotos rīkus un ko viņi vēlas redzēt līgumā.',
    'Pēc Meet: atveriet „My calendar“, atzīmējiet rezultātu (interested, maybe, not interested, no show) un aizpildiet cenu, rīkus, līgumu un piezīmes.',
  ],
  whatWeDo: [
    { t: 'Operāciju konsoles', d: 'Informācijas paneļi, kas pārvērš neapstrādātus datus lēmumos: šķirošana, pārbaude un statuss ar vienu skatienu.' },
    { t: 'Savapkalpes portāli', d: 'Portāli klientiem, satura veidotājiem un partneriem ar kontiem, iesniegumiem, izmaksām un moderāciju.' },
    { t: 'Dokumentu automatizācija', d: 'Atskaites, Word faili un tabulas, ko komanda šodien raksta ar rokām, tiek izveidotas ar vienu klikšķi.' },
    { t: 'Iekšējie rīki', d: 'Mērķtiecīgi izveidoti aizstājēji tabulu un e-pasta procesiem, uz kuriem balstās uzņēmuma darbs.' },
    { t: 'Personalizēti MI aģenti', d: 'Aģenti, kas atbild uz atkārtotiem jautājumiem, šķiro dokumentus, sagatavo piedāvājumus un seko statusiem.' },
  ],
  howWeWork: ['Izpētām procesu', 'Prototips dažās dienās', 'Palaižam darbībā', 'Pilnveidojam lietošanas gaitā'],
  ways: [
    { t: 'Izpētes sprints', d: 'Fiksēts, maz saistošs posms procesa izpētei un risinājuma prototipa izveidei.' },
    { t: 'Izstrāde ar fiksētu apjomu', d: 'Skaidrs apjoms, termiņš un cena produkta projektēšanai, izveidei un palaišanai.' },
    { t: 'Ilgtermiņa partnerība', d: 'Turpinām pilnveidot un paplašināt produktu, uzņēmumam augot.' },
  ],
  faq: [
    { q: 'Kas Jūs esat un ar ko nodarbojaties?', a: 'Mēs Swiftrix veidojam individuālu programmatūru un personalizētus MI aģentus uzņēmumiem, kas izauguši no tabulām: informācijas panelus, portālus, dokumentu ģeneratorus un aģentus atkārtotam darbam. Būtība: programmatūra, kas atbilst tam, kā uzņēmums patiesībā strādā, nevis veidne, kurai jāpielāgo savi procesi.' },
    { q: 'Kāpēc Jūs mums zvanāt?', a: 'Esiet godīgi un konkrēti: mēs apskatījām Jūsu mājaslapu un to, kā strādā līdzīgi uzņēmumi, un uzskatām, ka daļa ikdienas darba (nosauciet vienu konkrētu procesu no izpētes) joprojām tiek veikta ar rokām tabulās, e-pastos vai uz papīra. Vēlamies īsā video zvanā parādīt, kā tas varētu notikt automātiski. Zvana scenārijs lietotnē satur detaļas par katru uzņēmumu.' },
    { q: 'Ko tieši Jūs varat mums izveidot?', a: 'Četru veidu risinājumus, kas paveikti labi: operāciju konsoles (informācijas panelus), savapkalpes portālus, dokumentu automatizāciju un iekšējos rīkus, kā arī personalizētus MI aģentus. Viņu uzņēmumam sagatavojam četras konkrētas idejas ar ekrānu maketiem un parādām tās video zvanā.' },
    { q: 'Vai Jums ir piemēri vai iepriekšējie projekti?', a: 'Jā, sešas strādājošas sistēmas: Upshift (satura veidošanas un publicēšanas automatizācija), Gaya (dokumentu skenēšanas konsole), Geosoul (inženieratzinumu ģenerators), Hakom & Aluprint (kvalitātes dokumentu pārvaldība), Urbár (zemes īpašumtiesību un pilnvaru automatizācija) un filmu programmu un seansu atskaišu rīks, ko lieto komanda. Izvēlieties vienu vai divas, kas vistuvākās viņu darbam. Detaļas ir lejāk šajā lapā.' },
    { q: 'Cik ilgi tas aizņem?', a: 'Mērķis ir pirmais strādājošais prototips dienu laikā, nevis mēnešos. Pēc izpētes sprinta viņi ļoti agri redz strādājošu ekrānu, ne tikai slaidu. Pa tālruni nesoliet precīzus termiņus viņu projektam.' },
    { q: 'Cik tas maksā?', a: 'Aukstajā zvanā nenosauciet summas. Sakiet, ka cena atkarīga no apjoma, un pēc video zvana varam sākt ar izpētes sprintu (fiksēts, maz saistošs posms) vai piedāvāt izstrādi ar fiksētu apjomu, skaidru apjomu, termiņu un cenu. Ja uzstāj, pierakstiet viņu budžeta gaidas un sakiet, ka atgriezīsimies ar konkrētu piedāvājumu.' },
    { q: 'Mums jau ir programmatūra / mūsu Excel strādā labi.', a: 'Tieši tur mēs esam noderīgi: standarta programmatūra liek procesam pielāgoties tās produktam, bet tabulas sabrūk, kad aug apjomi vai no tām atkarīgi vairāki cilvēki. Mēs neaizstājam to, kas darbojas. Veidojam to, ko cilvēki joprojām aizpilda ar rokām. Pajautājiet, kurš process šodien prasa visvairāk manuāla darba.' },
    { q: 'Vienkārši atsūtiet e-pastu.', a: 'Labprāt. Palūdziet viņu labāko e-pasta adresi (pat ja jums jau ir) un paskaidrojiet, ka e-pastā būs Google Meet saite uz īsu 1:1 video zvanu, kurā parādīsim īsu viņu uzņēmumam sagatavotu prezentāciju un mūsu iepriekšējos darbus. Piedāvājiet divus laikus un pajautājiet, kurš der.' },
    { q: 'Mums nav laika vai budžeta.', a: 'Video zvans ir īss un parāda ko konkrētu, nevis pārdošanas runu. Zvana laikā nekas nav jāizlemj. Ja šobrīd budžeta nav, pajautājiet, kad plānots nākamais budžeta cikls, un piedāvājiet sazināties tad; reģistrējiet kā „call back“ ar datumu.' },
    { q: 'Vai tas ir „no-code“ rīks vai īsta programmatūra?', a: 'Īsta programmatūra: pilna cikla produkti, kas aug kopā ar uzņēmumu, bez „no-code“ rīku ierobežojumiem pēc gada. Pa tālruni nelieciet dziļāk tehnoloģijās.' },
    { q: 'Kā ar MI aģentiem?', a: 'Veidojam personalizētus MI aģentus atkārtotam darbam: atbildēm uz ikdienas jautājumiem, dokumentu šķirošanai, piedāvājumu sagatavošanai, statusu uzraudzībai. Starp aģentu un klasisko automatizāciju izvēlamies pēc tā, kas labāk der viņu procesam. Runājiet konkrēti un sasaistiet ar vienu viņu procesu.' },
    { q: 'Kam pieder programmatūra, kur glabājas dati, kā ar VDAR un drošību?', a: 'Neatbildiet no atmiņas. Sakiet, ka tas ir svarīgs jautājums, ko detalizēti apspriežam video zvanā un līgumā, un pierakstiet to, lai pēc sanāksmes tas nonāk laukā „ko iekļaut līgumā“.' },
    { q: 'Kur Jūs atrodaties un cik liela ir komanda?', a: 'Šeit tas vēl nav aprakstīts. Pajautājiet administratoram pirms zvaniem un neimprovizējiet. Ja jautā, kamēr vēl nezināt, sakiet, ka komandu iepazīstināsiet video zvanā.' },
  ],
};

export const extra: Extra = {
  name: 'Latviešu',
  llm: 'Latvian (formal "Jūs" register)',
  where: 'Kur tas der',
  ask: 'Ko automatizējam vispirms?',
  meetIntro: (company) => `Labdien,\n\nPaldies par veltīto laiku sarunā pa tālruni. Kā vienojāmies, šeit ir mūsu Google Meet, kurā iepazīstināsim Jūs ar īsu prezentāciju, kas sagatavota uzņēmumam ${company}, un parādīsim mūsu iepriekšējo darbu piemērus.`,
};
