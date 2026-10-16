import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Avant', solution: 'Ce que nous avons construit', wouldBuild: 'CE QUE NOUS CONSTRUIRIONS', today: 'AUJOURD’HUI' },
  kinds: { console: 'CONSOLE D’EXPLOITATION', documents: 'AUTOMATISATION DOCUMENTAIRE', portal: 'PORTAIL LIBRE-SERVICE', agent: 'AGENT IA', tool: 'OUTIL INTERNE' },
  cover: { kicker: 'STUDIO DE LOGICIELS SUR MESURE', right: 'APERÇU DE LA PROPOSITION · 2026', foot: 'Des prototypes fonctionnels en jours, pas en mois' },
  what: { label: '01 — CE QUE NOUS FAISONS', before: 'Nous développons des ', hl: 'logiciels sur mesure', after: ' pour les entreprises qui ont dépassé les tableurs et les outils standard.', chips: ['Tableaux de bord et consoles', 'Portails clients et partenaires', 'Automatisation des données et documents'] },
  why: { label: '02 — POURQUOI LES ENTREPRISES NOUS CHOISISSENT', title: 'De bonnes entreprises, freinées par de mauvais outils.', items: ['Les logiciels standard imposent à vos processus de s’adapter à leur produit, et non l’inverse.', 'L’essentiel du travail se fait dans des ⟦tableurs⟧ et des e-mails : fragile, manuel et impossible à faire évoluer.', 'Les outils génériques ne couvrent jamais ⟦vos cas précis⟧, alors les équipes comblent discrètement les manques à la main, à leurs frais.'] },
  build: { label: '03 — CE QUE NOUS CONSTRUISONS', title: 'Quatre choses, faites exceptionnellement bien.', items: [
    { t: 'Consoles d’exploitation', d: 'Des tableaux de bord qui transforment les données brutes en décisions : tri, contrôle et statut en un coup d’œil.' },
    { t: 'Portails libre-service', d: 'Des portails pour clients, créateurs et partenaires : comptes, soumissions, paiements et modération.' },
    { t: 'Automatisation documentaire', d: 'Rapports, fichiers Word et tableurs que votre équipe rédige à la main aujourd’hui, générés en un clic.' },
    { t: 'Outils internes', d: 'Des remplaçants sur mesure pour les processus par tableur et e-mail sur lesquels repose votre activité.' }] },
  worksIntro: { label: '04 — RÉALISATIONS CHOISIES', title: 'Réalisations choisies', text: 'Six systèmes conçus et utilisés au quotidien dans les médias, la culture, l’impression, l’ingénierie du bâtiment, la gestion documentaire et l’administration foncière.' },
  works: [
    { tag: 'CAS 01 · MÉDIAS / AUTOMATISATION DE CONTENU', name: 'Upshift', sub: 'Plateforme de création et de planification de contenu', problem: 'Le contenu pour les réseaux sociaux était fait à la main : recherche d’images, rédaction, montage des slides et publication canal par canal.', solution: 'Un flux entièrement automatisé : le système génère images et textes, assemble slides et vidéos, les soumet pour validation et publie directement sur YouTube, Instagram et Facebook. La même plateforme gère un portail créateurs qui vérifie les vues et applique automatiquement des règles de paiement par paliers.', stats: [['€1–2k', 'économisés par mois sur les créateurs'], ['De A à Z', 'visuels, textes et publication']], img: 'upshift' },
    { tag: 'CAS 02 · GESTION DOCUMENTAIRE', name: 'Gaya', sub: 'Console de numérisation de documents', problem: 'Les équipes comparaient les documents à une base de données à la main, page après page.', solution: 'Une console qui trie tout un lot en conserver, rejeter, erreur et doublon, et ne montre que les exceptions à traiter.', stats: [['Tout le lot', 'trié d’un coup'], ['1 clic', 'pour numériser et trier']], img: 'gaya' },
    { tag: 'CAS 03 · INGÉNIERIE DU BÂTIMENT', name: 'Geosoul', sub: 'Générateur de documents d’ingénierie', problem: 'Les rapports géotechniques étaient rédigés à la main sous Word : des heures chacun, et des erreurs faciles.', solution: 'Un assistant en deux étapes qui transforme quelques données structurées en un document Word technique entièrement mis en forme.', stats: [['2 étapes', 'jusqu’au rapport final'], ['.docx', 'généré instantanément']], img: 'geosoul' },
    { tag: 'CAS 04 · INDUSTRIE / IMPRESSION', name: 'Hakom & Aluprint', sub: 'Gestion des documents qualité', problem: 'Consignes et procédures circulaient sur papier, sans preuve de qui avait lu quoi.', solution: 'Un seul système pour deux sociétés : chaque salarié voit et valide les documents qui le concernent, avec l’historique complet des versions et révisions.', stats: [['Prêt pour audit', 'preuve de lecture'], ['2 en 1', 'plateforme partagée']], img: 'hakom' },
    { tag: 'CAS 05 · ADMINISTRATION FONCIÈRE', name: 'Urbár', sub: 'Automatisation des titres de propriété et mandats', problem: 'Des centaines d’heures passées à saisir des tableaux Excel et à calculer les mandats de propriété à la main.', solution: 'Importez les relevés de propriété : le système les traite, calcule chaque mandat et fusionne les résultats dans des tableurs prêts à l’emploi.', stats: [['100+ h', 'économisées par cycle'], ['Auto', 'calcul des mandats']], img: 'urbar' },
    { tag: 'CAS 06 · CULTURE / DISTRIBUTION DE FILMS', name: 'Outil de programmes de films et rapports de projection', sub: 'En production, utilisé par l’équipe', problem: 'Les programmes de films pour festivals et partenaires étaient montés à la main depuis une base de plusieurs centaines de films, avec calcul des durées et contrôle des licences, et les rapports de projection pour les créateurs venaient de tableurs.', solution: 'Un outil qui propose plusieurs programmes à partir d’un thème et de limites (nombre de films, durée totale, licences) et transforme les données de projection en rapport. Les deux documents sont produits aussitôt en Word et PDF, en lituanien ou en anglais.', stats: [['En ligne', 'utilisé par l’équipe'], ['LT / EN', '.docx et PDF en un clic']], img: 'films' },
  ],
  pattern: { label: '05 — LE FIL CONDUCTEUR', title: 'Six domaines. Un même schéma.', cols: [
    { t: 'Tri et contrôle', d: 'Triez automatiquement de gros volumes ; les équipes ne tranchent que les exceptions.', ex: 'Gaya · Hakom' },
    { t: 'Création et publication', d: 'Créez du contenu et publiez-le sur tous les canaux, de bout en bout, automatiquement.', ex: 'Upshift' },
    { t: 'Génération en un clic', d: 'Transformez des données structurées en documents et tableurs finalisés.', ex: 'Geosoul · Urbár · Programmes de films' }] },
  how: { label: '06 — NOTRE FAÇON DE TRAVAILLER', title: 'Un logiciel qui fonctionne, vite.', steps: [
    { t: 'Nous cartographions le processus', d: 'Nous comprenons comment le travail se fait vraiment, y compris les étapes manuelles que personne ne documente.' },
    { t: 'Prototype en quelques jours', d: 'Vous réagissez presque aussitôt à un écran qui fonctionne, pas à une slide ni à une maquette.' },
    { t: 'Mise en production', d: 'Un produit utilisé arrive tôt entre de vraies mains : la valeur commence avant la fin du projet.' },
    { t: 'Amélioration par l’usage', d: 'L’usage réel montre quoi améliorer ensuite. Le produit ne cesse de progresser.' }] },
  diff: { label: '07 — POURQUOI SWIFTRIX', title: 'La différence, c’est l’adéquation.', rows: [
    { t: 'Fait pour vous', d: 'Un logiciel adapté à votre processus, pas un modèle que vous ajustez jusqu’à ce qu’il fonctionne à peu près.' },
    { t: 'Un vrai logiciel', d: 'Des produits complets qui évoluent avec vous, sans les limites du no-code dans un an.' },
    { t: 'Retour rapide', d: 'Un produit opérationnel en quelques semaines : le retour se sent bien avant la facture.' }] },
  short: { label: '08 — EN BREF', items: [
    { v: 'Semaines', t: 'Jusqu’à une version fonctionnelle', d: 'Pas des mois de spécifications avant de voir quoi que ce soit.' },
    { v: 'Tout', t: 'Secteur, tout processus', d: 'Médias, culture, documents, ingénierie, impression, foncier : le vôtre est le prochain.' },
    { v: '1', t: 'Studio, de A à Z', d: 'Nous concevons, développons et lançons sous un même toit.' }] },
  start: { label: '09 — TRAVAILLER ENSEMBLE', title: 'Trois façons de démarrer.', items: [
    { t: 'Sprint de découverte', d: 'Une phase fixe, à faible engagement, pour cartographier le processus et prototyper la solution.' },
    { t: 'Développement au forfait', d: 'Périmètre, délai et prix clairs pour concevoir, développer et lancer le produit.' },
    { t: 'Partenariat continu', d: 'Nous continuons à améliorer et à étendre le produit au fil de votre croissance.' }] },
  qLabel: 'À VOUS', qFoot: 'Apportez ces réponses à un sprint de découverte : nous cartographions le vrai processus avant de rien concevoir.',
  closeLabel: 'CONSTRUISONS ENSEMBLE', ideasLabel: 'IDÉES',
};

export const src: Src = {
  ui: { who: 'QUI SOMMES-NOUS', pitch: 'LA RÉPONSE EN 30 SECONDES', flow: 'LE PARCOURS D’UN LEAD DANS L’APPLI', build: 'CE QUE NOUS CONSTRUISONS', work: 'NOTRE FAÇON DE TRAVAILLER', ways: 'TROIS FAÇONS DE DÉMARRER', faq: 'QUESTIONS QUI PEUVENT VOUS ÊTRE POSÉES', projects: 'PROJETS PRÉCÉDENTS' },
  who: 'Swiftrix (swiftrix.eu) est un studio qui développe des logiciels sur mesure et des agents IA personnalisés pour les entreprises qui ont dépassé les tableurs et les outils standard.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Chez Swiftrix, nous développons des logiciels sur mesure et des agents IA personnalisés pour les entreprises dont l’essentiel du travail reste dans des tableurs, des e-mails et sur papier : tableaux de bord, portails clients, générateurs de documents et agents qui répondent aux questions récurrentes ou trient les documents. Nous livrons en général un premier prototype fonctionnel en quelques jours, pas en mois.',
  flow: [
    'Appel à froid : soyez bref, montrez que vous vous êtes préparé, demandez 30 secondes.',
    'Objectif de l’appel : obtenir leur meilleure adresse e-mail et convenir d’un créneau pour une courte visio en tête-à-tête (Google Meet). N’essayez pas de vendre par téléphone.',
    'Enregistrez l’appel dans l’appli. S’ils ont accepté un rendez-vous, cochez « meeting agreed », saisissez leur e-mail, choisissez un créneau libre et envoyez l’invitation Meet.',
    'Une fois le client d’accord, générez les slides et votre script de présentation pour cette entreprise. Les slides servent pour le Meet, pas pour l’appel à froid.',
    'Pendant le Meet : déroulez les slides avec le script de présentation, posez les questions de découverte, notez leurs attentes de prix, les outils utilisés et ce qu’ils veulent voir dans le contrat.',
    'Après le Meet : ouvrez « My calendar », indiquez le résultat (interested, maybe, not interested, no show) et renseignez prix, outils, contrat et notes.',
  ],
  whatWeDo: [
    { t: 'Consoles d’exploitation', d: 'Des tableaux de bord qui transforment les données brutes en décisions : tri, contrôle et statut en un coup d’œil.' },
    { t: 'Portails libre-service', d: 'Des portails pour clients, créateurs et partenaires : comptes, soumissions, paiements et modération.' },
    { t: 'Automatisation documentaire', d: 'Rapports, fichiers Word et tableurs que l’équipe rédige à la main aujourd’hui, générés en un clic.' },
    { t: 'Outils internes', d: 'Des remplaçants sur mesure pour les processus par tableur et e-mail sur lesquels repose une entreprise.' },
    { t: 'Agents IA personnalisés', d: 'Des agents qui répondent aux questions récurrentes, trient les documents, rédigent des offres et relancent les statuts.' },
  ],
  howWeWork: ['Nous cartographions le processus', 'Prototype en quelques jours', 'Mise en production', 'Amélioration par l’usage'],
  ways: [
    { t: 'Sprint de découverte', d: 'Une phase fixe, à faible engagement, pour cartographier le processus et prototyper la solution.' },
    { t: 'Développement au forfait', d: 'Périmètre, délai et prix clairs pour concevoir, développer et lancer le produit.' },
    { t: 'Partenariat continu', d: 'Nous continuons à améliorer et à étendre le produit au fil de la croissance de l’entreprise.' },
  ],
  faq: [
    { q: 'Qui êtes-vous et que faites-vous ?', a: 'Chez Swiftrix, nous développons des logiciels sur mesure et des agents IA personnalisés pour les entreprises qui ont dépassé les tableurs : tableaux de bord, portails, générateurs de documents et agents pour les tâches répétitives. L’idée : un logiciel qui épouse la façon dont l’entreprise travaille vraiment, pas un modèle auquel il faut plier son processus.' },
    { q: 'Pourquoi nous appelez-vous ?', a: 'Soyez honnête et précis : nous avons regardé votre site et la façon dont travaillent des entreprises comme la vôtre, et nous pensons qu’une partie du travail quotidien (citez un processus concret issu de la recherche) se fait encore à la main dans des tableurs, des e-mails ou sur papier. Nous aimerions vous montrer en visio comment cela pourrait tourner automatiquement. Le script d’appel dans l’appli donne les détails pour chaque entreprise.' },
    { q: 'Que pouvez-vous concrètement construire pour nous ?', a: 'Quatre types de réalisations, bien faites : consoles d’exploitation (tableaux de bord), portails libre-service, automatisation documentaire et outils internes, plus des agents IA personnalisés. Pour leur entreprise, nous préparons quatre idées concrètes avec des maquettes et nous les présentons en visio.' },
    { q: 'Avez-vous des exemples ou des projets précédents ?', a: 'Oui, six systèmes en production : Upshift (automatisation de la création et de la publication de contenu), Gaya (console de numérisation de documents), Geosoul (générateur de rapports d’ingénierie), Hakom & Aluprint (gestion des documents qualité), Urbár (automatisation des titres de propriété foncière et des mandats) et un outil de programmes de films et rapports de projection utilisé par l’équipe. Choisissez un ou deux cas proches de leur activité. Détails plus bas sur cette page.' },
    { q: 'Combien de temps cela prend-il ?', a: 'Nous visons un premier prototype fonctionnel en quelques jours, pas en mois. Après un sprint de découverte, ils voient très tôt un écran qui fonctionne, pas seulement une slide. Ne promettez pas de dates précises pour leur projet au téléphone.' },
    { q: 'Combien cela coûte-t-il ?', a: 'Ne donnez pas de chiffres lors de l’appel à froid. Dites que le prix dépend du périmètre et qu’après la visio nous pouvons démarrer par un sprint de découverte (phase fixe à faible engagement) ou proposer un développement au forfait avec périmètre, délai et prix clairs. S’ils insistent, notez leur budget estimé et dites que nous reviendrons avec une proposition concrète.' },
    { q: 'Nous avons déjà un logiciel / notre Excel fonctionne très bien.', a: 'C’est justement là que nous sommes utiles : un logiciel standard plie le processus à son produit, et les tableurs lâchent quand le volume augmente ou que plusieurs personnes en dépendent. Nous ne remplaçons pas ce qui marche. Nous construisons la partie que l’on remplit encore à la main. Demandez quel processus mobilise aujourd’hui le plus de travail manuel.' },
    { q: 'Envoyez-moi simplement un e-mail.', a: 'Volontiers. Demandez leur meilleure adresse e-mail (même si vous en avez déjà une) et expliquez que l’e-mail contiendra un lien Google Meet pour une courte visio en tête-à-tête où nous présentons une courte présentation préparée pour leur entreprise et nos réalisations précédentes. Proposez deux créneaux et demandez lequel leur convient.' },
    { q: 'Nous n’avons pas le temps ou pas de budget.', a: 'La visio est courte et montre du concret, pas un discours commercial. Rien à décider pendant l’appel. S’il n’y a pas de budget pour l’instant, demandez quand est prévu le prochain cycle budgétaire et proposez de les recontacter à ce moment-là ; enregistrez-le comme « call back » avec une date.' },
    { q: 'Est-ce un outil no-code ou un vrai logiciel ?', a: 'Un vrai logiciel : des produits complets qui évoluent avec l’entreprise, sans les limites des outils no-code dans un an. N’entrez pas dans le détail technique au téléphone.' },
    { q: 'Et les agents IA ?', a: 'Nous développons des agents IA personnalisés pour les tâches répétitives : répondre aux questions courantes, trier les documents, rédiger des offres, relancer les statuts. Nous choisissons entre agent et automatisation classique selon ce qui convient le mieux à leur processus. Restez concret et rattachez-vous à l’un de leurs processus.' },
    { q: 'À qui appartient le logiciel, où sont stockées les données, et le RGPD et la sécurité ?', a: 'Ne répondez pas de mémoire. Dites que c’est une question importante que nous traitons en détail en visio et dans le contrat, et notez-la pour qu’elle alimente le champ « ce qu’il faut mettre dans le contrat » après le rendez-vous.' },
    { q: 'Où êtes-vous basés et quelle est la taille de l’équipe ?', a: 'Ce n’est pas encore renseigné ici. Demandez à votre admin avant de passer vos appels et n’improvisez pas. Si on vous le demande avant que vous le sachiez, dites que vous présenterez l’équipe pendant la visio.' },
  ],
};

export const extra: Extra = {
  name: 'Français',
  llm: 'French (formal "vous" register)',
  where: 'Où cela s’intègre',
  ask: 'Qu’automatisons-nous en premier ?',
  meetIntro: (company) => `Bonjour,\n\nMerci pour le temps que vous nous avez accordé au téléphone. Comme convenu, voici notre lien Google Meet : nous vous y présenterons une courte présentation préparée pour ${company} et des exemples de nos réalisations précédentes.`,
};
