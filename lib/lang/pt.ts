import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Antes', solution: 'O que construímos', wouldBuild: 'O QUE CONSTRUIRÍAMOS', today: 'HOJE' },
  kinds: { console: 'CONSOLA DE OPERAÇÕES', documents: 'AUTOMATIZAÇÃO DE DOCUMENTOS', portal: 'PORTAL DE AUTOSSERVIÇO', agent: 'AGENTE DE IA', tool: 'FERRAMENTA INTERNA' },
  cover: { kicker: 'ESTÚDIO DE SOFTWARE À MEDIDA', right: 'RESUMO DA PROPOSTA · 2026', foot: 'Protótipos funcionais em dias, não em meses' },
  what: { label: '01 — O QUE FAZEMOS', before: 'Desenvolvemos ', hl: 'software à medida', after: ' para empresas que já ultrapassaram as folhas de cálculo e as ferramentas de prateleira.', chips: ['Dashboards e consolas', 'Portais de clientes e parceiros', 'Automatização de dados e documentos'] },
  why: { label: '02 — PORQUE NOS PROCURAM AS EMPRESAS', title: 'Bons negócios, travados pelas ferramentas erradas.', items: ['O software de prateleira obriga os seus processos a adaptarem-se ao produto, e não o contrário.', 'O trabalho mais importante acontece em ⟦folhas de cálculo⟧ e e-mails: frágil, manual e impossível de escalar.', 'As ferramentas genéricas nunca servem ⟦os seus casos concretos⟧, por isso as pessoas tapam as falhas à mão, à custa da equipa.'] },
  build: { label: '03 — O QUE CONSTRUÍMOS', title: 'Quatro coisas, feitas de forma excecional.', items: [
    { t: 'Consolas de operações', d: 'Dashboards que transformam dados operacionais em decisões: triagem, revisão e estado num relance.' },
    { t: 'Portais de autosserviço', d: 'Portais para clientes, criadores e parceiros com contas, submissões, pagamentos e moderação.' },
    { t: 'Automatização de documentos', d: 'Relatórios, ficheiros Word e folhas de cálculo que a equipa escreve hoje à mão, gerados com um clique.' },
    { t: 'Ferramentas internas', d: 'Substitutos feitos à medida para os processos de folhas de cálculo e e-mail que sustentam o seu negócio.' }] },
  worksIntro: { label: '04 — PROJETOS SELECIONADOS', title: 'Projetos selecionados', text: 'Seis sistemas construídos e em uso diário em media, cultura, impressão, engenharia de construção, gestão documental e administração de terrenos.' },
  works: [
    { tag: 'CASO 01 · MEDIA / AUTOMATIZAÇÃO DE CONTEÚDOS', name: 'Upshift', sub: 'Plataforma de criação e planeamento de conteúdos', problem: 'O conteúdo para redes sociais era feito à mão: procurar imagens, escrever textos, montar slides e publicar em cada canal, um a um.', solution: 'Um fluxo totalmente automático: o sistema gera imagens e textos, monta slides e vídeos, envia-os para aprovação e publica diretamente no YouTube, Instagram e Facebook. A mesma plataforma gere um portal de criadores que verifica visualizações e aplica automaticamente regras de pagamento por escalões.', stats: [['€1–2k', 'poupados por mês em criadores'], ['De A a Z', 'visuais, textos e publicação']], img: 'upshift' },
    { tag: 'CASO 02 · GESTÃO DOCUMENTAL', name: 'Gaya', sub: 'Consola de digitalização de documentos', problem: 'Os colaboradores comparavam documentos com uma base de dados à mão, página a página.', solution: 'Uma consola que separa um lote inteiro em manter, rejeitar, erro e duplicado, e mostra apenas as exceções que exigem atenção.', stats: [['Lote inteiro', 'triado de uma vez'], ['1 clique', 'para digitalizar e triar']], img: 'gaya' },
    { tag: 'CASO 03 · ENGENHARIA DE CONSTRUÇÃO', name: 'Geosoul', sub: 'Gerador de documentos de engenharia', problem: 'Os relatórios geotécnicos eram escritos à mão em Word: horas por relatório e fáceis de errar.', solution: 'Um assistente de dois passos que transforma poucos dados estruturados num documento técnico Word totalmente formatado.', stats: [['2 passos', 'até ao relatório final'], ['.docx', 'gerado de imediato']], img: 'geosoul' },
    { tag: 'CASO 04 · INDÚSTRIA / IMPRESSÃO', name: 'Hakom & Aluprint', sub: 'Gestão de documentos de qualidade', problem: 'As instruções e procedimentos eram distribuídos em papel, sem prova de quem leu o quê.', solution: 'Um sistema para duas empresas: cada colaborador vê e confirma os documentos que lhe dizem respeito, com histórico completo de versões e revisões.', stats: [['Para auditoria', 'prova de leitura'], ['2 em 1', 'plataforma partilhada']], img: 'hakom' },
    { tag: 'CASO 05 · ADMINISTRAÇÃO DE TERRENOS', name: 'Urbár', sub: 'Automatização de propriedade e mandatos', problem: 'Centenas de horas gastas a digitar tabelas Excel e a calcular mandatos de propriedade à mão.', solution: 'Carregue as folhas de propriedade; o sistema processa-as, calcula cada mandato e junta os resultados em folhas de cálculo prontas.', stats: [['100+ h', 'poupadas por ciclo'], ['Auto', 'cálculo de mandatos']], img: 'urbar' },
    { tag: 'CASO 06 · CULTURA / DISTRIBUIÇÃO DE CINEMA', name: 'Ferramenta de programas de cinema e relatórios de exibição', sub: 'Em produção e usada pela equipa', problem: 'Os programas de cinema para festivais e parceiros eram montados à mão a partir de um arquivo de várias centenas de filmes, a somar durações e a verificar licenças, enquanto os relatórios de exibição para criadores saíam de folhas de cálculo.', solution: 'Uma ferramenta que propõe várias opções de programa a partir de um tema e de limites (número de filmes, duração total, licenças) e transforma os dados de exibição num relatório. Ambos os documentos saem de imediato em Word e PDF, em lituano ou inglês.', stats: [['Em uso', 'usada pela equipa'], ['LT / EN', '.docx e PDF com um clique']], img: 'films' },
  ],
  pattern: { label: '05 — O FIO CONDUTOR', title: 'Seis áreas. Um padrão que se repete.', cols: [
    { t: 'Triagem e revisão', d: 'Triar grandes volumes automaticamente; as pessoas decidem apenas as exceções.', ex: 'Gaya · Hakom' },
    { t: 'Criação e publicação', d: 'Criar conteúdo e publicá-lo em todos os canais, de ponta a ponta, de forma automática.', ex: 'Upshift' },
    { t: 'Geração com um clique', d: 'Transformar dados estruturados em documentos e folhas de cálculo finais.', ex: 'Geosoul · Urbár · Programas de cinema' }] },
  how: { label: '06 — COMO TRABALHAMOS', title: 'Software que funciona, depressa.', steps: [
    { t: 'Mapeamos o processo', d: 'Percebemos como o trabalho decorre de facto, incluindo os passos manuais que ninguém documenta.' },
    { t: 'Protótipo em dias', d: 'Reage quase de imediato a um ecrã funcional, e não a um slide ou a uma maqueta.' },
    { t: 'Lançamos em produção', d: 'Um produto em uso chega cedo a mãos reais, por isso o valor começa antes de o projeto acabar.' },
    { t: 'Melhoramos com o uso', d: 'O uso real mostra o que melhorar a seguir. O produto não pára de evoluir.' }] },
  diff: { label: '07 — PORQUÊ A SWIFTRIX', title: 'A diferença é o ajuste.', rows: [
    { t: 'Feito para si', d: 'Software ajustado ao seu processo, e não um modelo que se afina até quase funcionar.' },
    { t: 'Software a sério', d: 'Produtos completos que crescem consigo, sem limites de no-code daqui a um ano.' },
    { t: 'Retorno rápido', d: 'Um produto funcional em semanas: sente o retorno muito antes da fatura.' }] },
  short: { label: '08 — EM RESUMO', items: [
    { v: 'Semanas', t: 'Até uma versão funcional', d: 'Sem meses de especificações antes de ver alguma coisa.' },
    { v: 'Qualquer', t: 'Área, qualquer processo', d: 'Media, cultura, documentos, engenharia, impressão, terrenos: a sua é a próxima.' },
    { v: '1', t: 'Estúdio, de A a Z', d: 'Desenhamos, construímos e lançamos sob o mesmo teto.' }] },
  start: { label: '09 — TRABALHAR JUNTOS', title: 'Três formas de começar.', items: [
    { t: 'Sprint de descoberta', d: 'Uma fase fixa e de baixo compromisso para mapear o processo e construir um protótipo da solução.' },
    { t: 'Desenvolvimento com âmbito fixo', d: 'Âmbito, prazo e preço claros para desenhar, construir e lançar o produto.' },
    { t: 'Parceria contínua', d: 'Continuamos a melhorar e a expandir o produto à medida que o negócio cresce.' }] },
  qLabel: 'AGORA É A SUA VEZ', qFoot: 'Traga estas respostas para um sprint de descoberta: mapeamos o processo real antes de desenhar o que quer que seja.',
  closeLabel: 'VAMOS CONSTRUIR JUNTOS', ideasLabel: 'IDEIAS',
};

export const src: Src = {
  ui: { who: 'QUEM SOMOS', pitch: 'A RESPOSTA EM 30 SEGUNDOS', flow: 'COMO UM LEAD PASSA PELA APP', build: 'O QUE CONSTRUÍMOS', work: 'COMO TRABALHAMOS', ways: 'TRÊS FORMAS DE COMEÇAR', faq: 'PERGUNTAS QUE LHE PODEM FAZER', projects: 'PROJETOS ANTERIORES' },
  who: 'A Swiftrix (swiftrix.eu) é um estúdio que desenvolve software à medida e agentes de IA personalizados para empresas que ultrapassaram as folhas de cálculo e as ferramentas de prateleira.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'Na Swiftrix desenvolvemos software à medida e agentes de IA personalizados para empresas cujo trabalho importante ainda vive em folhas de cálculo, e-mails e papel: dashboards, portais de clientes, geradores de documentos e agentes que respondem a perguntas repetitivas ou triam documentos. Normalmente temos um primeiro protótipo funcional em dias, não em meses.',
  flow: [
    'Chamada a frio: seja breve, mostre que preparou o contacto, peça 30 segundos.',
    'Objetivo da chamada: obter o melhor e-mail e combinar um horário para uma breve videochamada 1:1 (Google Meet). Não tente vender por telefone.',
    'Registe a chamada na app. Se aceitaram a reunião, marque “meeting agreed”, introduza o e-mail, escolha um horário livre e envie o convite do Meet.',
    'Depois de o cliente aceitar, gere os slides e o seu guião de apresentação para essa empresa. Os slides são para o Meet, não para a chamada a frio.',
    'No Meet: percorra os slides com o guião de apresentação, faça as perguntas de descoberta e anote expectativas de preço, ferramentas que usam e o que querem no acordo.',
    'Depois do Meet: abra “My calendar”, assinale o resultado (interested, maybe, not interested, no show) e preencha preço, ferramentas, acordo e notas.',
  ],
  whatWeDo: [
    { t: 'Consolas de operações', d: 'Dashboards que transformam dados operacionais em decisões: triagem, revisão e estado num relance.' },
    { t: 'Portais de autosserviço', d: 'Portais para clientes, criadores e parceiros com contas, submissões, pagamentos e moderação.' },
    { t: 'Automatização de documentos', d: 'Relatórios, ficheiros Word e folhas de cálculo que a equipa escreve hoje à mão, gerados com um clique.' },
    { t: 'Ferramentas internas', d: 'Substitutos feitos à medida para os processos de folhas de cálculo e e-mail que sustentam um negócio.' },
    { t: 'Agentes de IA personalizados', d: 'Agentes que respondem a perguntas repetitivas, triam documentos, redigem propostas e acompanham estados.' },
  ],
  howWeWork: ['Mapeamos o processo', 'Protótipo em dias', 'Lançamos em produção', 'Melhoramos com o uso'],
  ways: [
    { t: 'Sprint de descoberta', d: 'Uma fase fixa e de baixo compromisso para mapear o processo e construir um protótipo da solução.' },
    { t: 'Desenvolvimento com âmbito fixo', d: 'Âmbito, prazo e preço claros para desenhar, construir e lançar o produto.' },
    { t: 'Parceria contínua', d: 'Continuamos a melhorar e a expandir o produto à medida que o negócio cresce.' },
  ],
  faq: [
    { q: 'Quem são e o que fazem?', a: 'Na Swiftrix desenvolvemos software à medida e agentes de IA personalizados para empresas que ultrapassaram as folhas de cálculo: dashboards, portais, geradores de documentos e agentes para trabalho repetitivo. O ponto é software que se ajusta à forma como a empresa realmente trabalha, e não um modelo a que tem de adaptar o processo.' },
    { q: 'Porque nos estão a ligar?', a: 'Seja honesto e concreto: vimos o vosso site e a forma como trabalham empresas como a vossa, e achamos que parte do trabalho diário (indique um processo concreto da pesquisa) ainda é feita à mão em folhas de cálculo, e-mails ou papel. Gostaríamos de mostrar, numa breve videochamada, como isso poderia funcionar de forma automática. O guião de chamada na app tem os detalhes de cada empresa.' },
    { q: 'O que podem construir exatamente para nós?', a: 'Quatro tipos de coisas, bem feitas: consolas de operações (dashboards), portais de autosserviço, automatização de documentos e ferramentas internas, além de agentes de IA personalizados. Para a empresa deles preparamos quatro ideias concretas com ecrãs de exemplo e mostramo-las na videochamada.' },
    { q: 'Têm exemplos ou projetos anteriores?', a: 'Sim, seis sistemas em funcionamento: Upshift (automatização da criação e publicação de conteúdos), Gaya (consola de digitalização de documentos), Geosoul (gerador de relatórios de engenharia), Hakom & Aluprint (gestão de documentos de qualidade), Urbár (automatização de propriedade de terrenos e mandatos) e uma ferramenta de programas de cinema e relatórios de exibição usada pela equipa. Escolha um ou dois, os mais próximos do negócio deles. Os detalhes estão abaixo nesta página.' },
    { q: 'Quanto tempo demora?', a: 'Procuramos ter um primeiro protótipo funcional em dias, não em meses. Após um sprint de descoberta veem muito cedo um ecrã funcional, e não apenas um slide. Ao telefone, não prometa datas exatas para o projeto deles.' },
    { q: 'Quanto custa?', a: 'Não indique valores na chamada a frio. Diga que o preço depende do âmbito e que, depois da videochamada, podemos começar com um sprint de descoberta (uma fase fixa e de baixo compromisso) ou propor um desenvolvimento com âmbito fixo, com âmbito, prazo e preço claros. Se insistirem, anote a expectativa de orçamento e diga que voltaremos com uma proposta concreta.' },
    { q: 'Já temos software / o nosso Excel funciona bem.', a: 'É precisamente aí que somos úteis: o software de prateleira obriga o processo a adaptar-se ao seu produto, e as folhas de cálculo falham quando o volume cresce ou várias pessoas dependem delas. Não substituímos o que funciona. Construímos a parte que as pessoas ainda preenchem à mão. Pergunte qual o processo que hoje consome mais tempo manual.' },
    { q: 'Envie-me apenas um e-mail.', a: 'Com todo o gosto. Peça o melhor e-mail (mesmo que já tenha um) e explique que o e-mail terá uma ligação do Google Meet para uma breve videochamada 1:1, em que mostramos uma curta apresentação preparada para a empresa deles e os nossos trabalhos anteriores. Ofereça dois horários e pergunte qual convém.' },
    { q: 'Não temos tempo nem orçamento.', a: 'A videochamada é curta e mostra algo concreto, não um discurso de vendas. Não há nada a decidir na chamada. Se agora não há orçamento, pergunte quando planeiam a próxima ronda orçamental e ofereça-se para voltar a contactar nessa altura; registe como “call back” com data.' },
    { q: 'Isto é uma ferramenta no-code ou software a sério?', a: 'Software a sério: produtos completos que crescem com a empresa, sem os limites das ferramentas no-code daqui a um ano. Ao telefone, não aprofunde a tecnologia.' },
    { q: 'E os agentes de IA?', a: 'Desenvolvemos agentes de IA personalizados para trabalho repetitivo: responder a perguntas de rotina, triar documentos, redigir propostas, acompanhar estados. Escolhemos entre agente e automatização clássica consoante o que se ajusta melhor ao processo deles. Seja concreto e ligue a um processo deles.' },
    { q: 'De quem é o software, onde ficam os dados, e o RGPD e a segurança?', a: 'Não responda de memória. Diga que é uma pergunta importante, que tratamos em detalhe na videochamada e no acordo, e anote-a para que, depois da reunião, vá para o campo “o que incluir no acordo”.' },
    { q: 'Onde estão sediados e qual a dimensão da equipa?', a: 'Isto ainda não está registado aqui. Pergunte ao seu administrador antes de fazer chamadas e não improvise. Se perguntarem antes de saber, diga que apresentará a equipa na videochamada.' },
  ],
};

export const extra: Extra = {
  name: 'Português',
  llm: 'European Portuguese (Portugal, polite professional B2B register)',
  where: 'Onde encaixa',
  ask: 'O que automatizamos primeiro?',
  meetIntro: (company) => `Bom dia,\n\nObrigado pelo seu tempo ao telefone. Conforme combinado, segue o nosso Google Meet, onde lhe apresentaremos uma breve apresentação preparada para ${company} e mostraremos exemplos dos nossos trabalhos anteriores.`,
};
