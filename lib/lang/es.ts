import type { Fixed } from '../fixed';
import type { Src } from '../sources';
import type { Extra } from './types';

export const fixed: Fixed = {
  ui: { problem: 'Antes', solution: 'Lo que construimos', wouldBuild: 'LO QUE CONSTRUIRÍAMOS', today: 'HOY' },
  kinds: { console: 'CONSOLA DE OPERACIONES', documents: 'AUTOMATIZACIÓN DE DOCUMENTOS', portal: 'PORTAL DE AUTOSERVICIO', agent: 'AGENTE DE IA', tool: 'HERRAMIENTA INTERNA' },
  cover: { kicker: 'ESTUDIO DE SOFTWARE A MEDIDA', right: 'RESUMEN DE LA PROPUESTA · 2026', foot: 'Prototipos funcionales en días, no en meses' },
  what: { label: '01 — QUÉ HACEMOS', before: 'Desarrollamos ', hl: 'software a medida', after: ' para empresas que han superado las hojas de cálculo y las herramientas estándar.', chips: ['Paneles y consolas', 'Portales de clientes y socios', 'Automatización de datos y documentos'] },
  why: { label: '02 — POR QUÉ NOS ELIGEN', title: 'Buenas empresas, frenadas por las herramientas equivocadas.', items: ['El software estándar obliga a sus procesos a adaptarse a su producto, y no al revés.', 'El trabajo más importante se hace en ⟦hojas de cálculo⟧ y correos: frágil, manual y imposible de escalar.', 'Las herramientas genéricas nunca encajan con ⟦sus casos concretos⟧, así que el equipo tapa los huecos a mano, en silencio y a su costa.'] },
  build: { label: '03 — QUÉ CONSTRUIMOS', title: 'Cuatro cosas, hechas excepcionalmente bien.', items: [
    { t: 'Consolas de operaciones', d: 'Paneles que convierten datos operativos en decisiones: clasificación, revisión y estado de un vistazo.' },
    { t: 'Portales de autoservicio', d: 'Portales para clientes, creadores y socios con cuentas, envíos, pagos y moderación.' },
    { t: 'Automatización de documentos', d: 'Informes, archivos Word y hojas de cálculo que su equipo redacta hoy a mano, generados con un clic.' },
    { t: 'Herramientas internas', d: 'Sustitutos a medida de los procesos de hojas de cálculo y correo en los que se apoya su negocio.' }] },
  worksIntro: { label: '04 — PROYECTOS DESTACADOS', title: 'Proyectos destacados', text: 'Seis sistemas creados y en uso diario en medios, cultura, impresión, ingeniería de la construcción, gestión documental y administración de tierras.' },
  works: [
    { tag: 'CASO 01 · MEDIOS / AUTOMATIZACIÓN DE CONTENIDO', name: 'Upshift', sub: 'Plataforma de creación y planificación de contenido', problem: 'El contenido para redes sociales se hacía a mano: buscar imágenes, redactar textos, montar diapositivas y publicar en cada canal uno por uno.', solution: 'Un flujo totalmente automatizado: el sistema genera imágenes y textos, monta diapositivas y vídeos, los envía a aprobación y publica directamente en YouTube, Instagram y Facebook. La misma plataforma gestiona un portal de creadores que comprueba las visualizaciones y aplica automáticamente reglas de pago escalonadas.', stats: [['€1–2k', 'ahorrados al mes en creadores'], ['De la A a la Z', 'imágenes, textos y publicación']], img: 'upshift' },
    { tag: 'CASO 02 · GESTIÓN DOCUMENTAL', name: 'Gaya', sub: 'Consola de escaneo de documentos', problem: 'El personal comparaba los documentos con una base de datos a mano, página por página.', solution: 'Una consola que clasifica un lote entero en conservar, rechazar, error y duplicado, y muestra solo las excepciones que requieren atención.', stats: [['Lote completo', 'clasificado de una vez'], ['1 clic', 'para escanear y clasificar']], img: 'gaya' },
    { tag: 'CASO 03 · INGENIERÍA DE LA CONSTRUCCIÓN', name: 'Geosoul', sub: 'Generador de documentos de ingeniería', problem: 'Los informes geotécnicos se redactaban a mano en Word: horas por informe y fáciles de equivocar.', solution: 'Un asistente de dos pasos que convierte unos pocos datos estructurados en un documento técnico de Word totalmente formateado.', stats: [['2 pasos', 'hasta el informe terminado'], ['.docx', 'generado al instante']], img: 'geosoul' },
    { tag: 'CASO 04 · FABRICACIÓN / IMPRESIÓN', name: 'Hakom & Aluprint', sub: 'Gestión de documentos de calidad', problem: 'Las instrucciones y procedimientos se repartían en papel, sin prueba de quién había leído qué.', solution: 'Un sistema para dos empresas: cada empleado ve y confirma los documentos que le corresponden, con historial completo de versiones y revisiones.', stats: [['Listo para auditoría', 'prueba de lectura'], ['2 en 1', 'plataforma compartida']], img: 'hakom' },
    { tag: 'CASO 05 · ADMINISTRACIÓN DE TIERRAS', name: 'Urbár', sub: 'Automatización de propiedad y mandatos', problem: 'Cientos de horas tecleando tablas de Excel y calculando a mano los mandatos de propiedad.', solution: 'Se suben las hojas de propiedad; el sistema las procesa, calcula cada mandato y reúne los resultados en hojas de cálculo listas para usar.', stats: [['100+ h', 'ahorradas por ciclo'], ['Auto', 'cálculo de mandatos']], img: 'urbar' },
    { tag: 'CASO 06 · CULTURA / DISTRIBUCIÓN CINEMATOGRÁFICA', name: 'Herramienta de programas de cine e informes de proyecciones', sub: 'En producción y usada por el equipo', problem: 'Los programas de cine para festivales y socios se montaban a mano a partir de un archivo de varios cientos de películas, sumando duraciones y comprobando licencias, mientras que los informes de proyecciones para los creadores se hacían con hojas de cálculo.', solution: 'Una herramienta que propone varias opciones de programa a partir de un tema y unos límites (número de películas, duración total, licencias) y convierte los datos de proyecciones en un informe. Ambos documentos se generan al instante en Word y PDF, en lituano o inglés.', stats: [['En vivo', 'usada por el equipo'], ['LT / EN', '.docx y PDF con un clic']], img: 'films' },
  ],
  pattern: { label: '05 — EL HILO CONDUCTOR', title: 'Seis campos. Un mismo patrón.', cols: [
    { t: 'Clasificación y revisión', d: 'Clasifique grandes volúmenes de forma automática; las personas solo deciden las excepciones.', ex: 'Gaya · Hakom' },
    { t: 'Creación y publicación', d: 'Cree contenido y publíquelo en todos los canales, de principio a fin, de forma automática.', ex: 'Upshift' },
    { t: 'Generación con un clic', d: 'Convierta datos estructurados en documentos y hojas de cálculo terminados.', ex: 'Geosoul · Urbár · Programas de cine' }] },
  how: { label: '06 — CÓMO TRABAJAMOS', title: 'Software que funciona, rápido.', steps: [
    { t: 'Analizamos el proceso', d: 'Entendemos cómo se trabaja de verdad, incluidos los pasos manuales que nadie documenta.' },
    { t: 'Prototipo en días', d: 'Usted reacciona casi de inmediato ante una pantalla real, no ante una diapositiva ni una maqueta.' },
    { t: 'Lo ponemos en marcha', d: 'Un producto en uso llega pronto a manos reales, así que el valor empieza antes de que acabe el proyecto.' },
    { t: 'Mejoramos con el uso', d: 'El uso real muestra qué mejorar a continuación. El producto mejora sin parar.' }] },
  diff: { label: '07 — POR QUÉ SWIFTRIX', title: 'La diferencia es el encaje.', rows: [
    { t: 'Hecho para usted', d: 'Software ajustado a su proceso, no una plantilla que se retoca hasta que casi funciona.' },
    { t: 'Software de verdad', d: 'Productos completos que crecen con usted, sin los límites del no-code dentro de un año.' },
    { t: 'Retorno rápido', d: 'Un producto funcionando en semanas: notará el retorno mucho antes que la factura.' }] },
  short: { label: '08 — EN RESUMEN', items: [
    { v: 'Semanas', t: 'Hasta una versión funcional', d: 'Sin meses de especificaciones antes de ver algo.' },
    { v: 'Cualquier', t: 'Sector, cualquier proceso', d: 'Medios, cultura, documentos, ingeniería, impresión, tierras: el suyo es el siguiente.' },
    { v: '1', t: 'Estudio, de la A a la Z', d: 'Diseñamos, construimos y lanzamos bajo un mismo techo.' }] },
  start: { label: '09 — TRABAJAR JUNTOS', title: 'Tres formas de empezar.', items: [
    { t: 'Sprint de descubrimiento', d: 'Una fase cerrada y de bajo compromiso para analizar el proceso y construir un prototipo de la solución.' },
    { t: 'Desarrollo de alcance cerrado', d: 'Alcance, plazo y precio claros para diseñar, construir y lanzar el producto.' },
    { t: 'Colaboración continua', d: 'Seguimos mejorando y ampliando el producto a medida que crece su negocio.' }] },
  qLabel: 'AHORA USTED', qFoot: 'Traiga estas respuestas a un sprint de descubrimiento: analizamos el proceso real antes de diseñar nada.',
  closeLabel: 'CONSTRUYAMOS JUNTOS', ideasLabel: 'IDEAS',
};

export const src: Src = {
  ui: { who: 'QUIÉNES SOMOS', pitch: 'LA RESPUESTA EN 30 SEGUNDOS', flow: 'CÓMO PASA UN LEAD POR LA APP', build: 'QUÉ CONSTRUIMOS', work: 'CÓMO TRABAJAMOS', ways: 'TRES FORMAS DE EMPEZAR', faq: 'PREGUNTAS QUE PUEDEN HACERLE', projects: 'PROYECTOS ANTERIORES' },
  who: 'Swiftrix (swiftrix.eu) es un estudio que desarrolla software a medida y agentes de IA personalizados para empresas que han superado las hojas de cálculo y las herramientas estándar.',
  contact: 'info@swiftrix.eu · swiftrix.eu',
  pitch30:
    'En Swiftrix desarrollamos software a medida y agentes de IA personalizados para empresas cuyo trabajo importante sigue estando en hojas de cálculo, correos y papel: paneles, portales de clientes, generadores de documentos y agentes que responden preguntas repetitivas o clasifican documentos. Normalmente tenemos un primer prototipo funcional en días, no en meses.',
  flow: [
    'Llamada en frío: sea breve, demuestre que se ha preparado y pida permiso para 30 segundos.',
    'Objetivo de la llamada: conseguir su mejor correo electrónico y acordar una hora para una videollamada breve 1:1 (Google Meet). No intente vender por teléfono.',
    'Registre la llamada en la app. Si aceptaron una reunión, marque «meeting agreed», introduzca su correo, elija un hueco libre y envíe la invitación de Meet.',
    'Cuando el cliente acepte, genere las diapositivas y su guion de presentación para esa empresa. Las diapositivas son para el Meet, no para la llamada en frío.',
    'En el Meet: recorra las diapositivas con el guion de presentación, haga las preguntas de descubrimiento y anote las expectativas de precio, las herramientas que usan y lo que quieren en el acuerdo.',
    'Después del Meet: abra «My calendar», marque el resultado (interested, maybe, not interested, no show) y rellene precio, herramientas, acuerdo y notas.',
  ],
  whatWeDo: [
    { t: 'Consolas de operaciones', d: 'Paneles que convierten datos operativos en decisiones: clasificación, revisión y estado de un vistazo.' },
    { t: 'Portales de autoservicio', d: 'Portales para clientes, creadores y socios con cuentas, envíos, pagos y moderación.' },
    { t: 'Automatización de documentos', d: 'Informes, archivos Word y hojas de cálculo que el equipo redacta hoy a mano, generados con un clic.' },
    { t: 'Herramientas internas', d: 'Sustitutos a medida de los procesos de hojas de cálculo y correo en los que se apoya una empresa.' },
    { t: 'Agentes de IA personalizados', d: 'Agentes que responden preguntas repetitivas, clasifican documentos, redactan ofertas y hacen seguimiento de estados.' },
  ],
  howWeWork: ['Analizamos el proceso', 'Prototipo en días', 'Lo ponemos en marcha', 'Mejoramos con el uso'],
  ways: [
    { t: 'Sprint de descubrimiento', d: 'Una fase cerrada y de bajo compromiso para analizar el proceso y construir un prototipo de la solución.' },
    { t: 'Desarrollo de alcance cerrado', d: 'Alcance, plazo y precio claros para diseñar, construir y lanzar el producto.' },
    { t: 'Colaboración continua', d: 'Seguimos mejorando y ampliando el producto a medida que crece el negocio.' },
  ],
  faq: [
    { q: '¿Quiénes son ustedes y a qué se dedican?', a: 'En Swiftrix desarrollamos software a medida y agentes de IA personalizados para empresas que han superado las hojas de cálculo: paneles, portales, generadores de documentos y agentes para trabajo repetitivo. La idea es un software que encaje con cómo trabaja realmente la empresa, no una plantilla a la que haya que adaptar el proceso.' },
    { q: '¿Por qué nos llaman?', a: 'Sea honesto y concreto: hemos revisado su web y cómo trabajan empresas como la suya, y creemos que parte del trabajo diario (mencione un proceso concreto de la investigación) sigue haciéndose a mano en hojas de cálculo, correos o papel. Nos gustaría mostrarle en una videollamada breve cómo podría funcionar de forma automática. El guion de llamada de la app tiene los detalles de cada empresa.' },
    { q: '¿Qué pueden construirnos exactamente?', a: 'Cuatro tipos de cosas, bien hechas: consolas de operaciones (paneles), portales de autoservicio, automatización de documentos y herramientas internas, además de agentes de IA personalizados. Para su empresa preparamos cuatro ideas concretas con maquetas de pantallas y se las mostramos en la videollamada.' },
    { q: '¿Tienen ejemplos o proyectos anteriores?', a: 'Sí, seis sistemas en funcionamiento: Upshift (automatización de creación y publicación de contenido), Gaya (consola de escaneo de documentos), Geosoul (generador de informes de ingeniería), Hakom & Aluprint (gestión de documentos de calidad), Urbár (automatización de propiedad de tierras y mandatos) y una herramienta de programas de cine e informes de proyecciones que usa el equipo. Elija uno o dos de los más cercanos a su negocio. Los detalles están más abajo en esta página.' },
    { q: '¿Cuánto tiempo lleva?', a: 'Aspiramos a tener un primer prototipo funcional en días, no en meses. Tras un sprint de descubrimiento ven una pantalla real muy pronto, no solo una diapositiva. No prometa fechas exactas para su proyecto por teléfono.' },
    { q: '¿Cuánto cuesta?', a: 'No dé cifras en la llamada en frío. Diga que el precio depende del alcance y que, tras la videollamada, podemos empezar con un sprint de descubrimiento (una fase cerrada y de bajo compromiso) o proponer un desarrollo de alcance cerrado con alcance, plazo y precio claros. Si insisten, anote su expectativa de presupuesto y dígales que volveremos con una propuesta concreta.' },
    { q: 'Ya tenemos software / nuestro Excel funciona bien.', a: 'Justo ahí somos útiles: el software estándar obliga al proceso a encajar en su producto, y las hojas de cálculo fallan cuando crece el volumen o dependen de ellas varias personas. No sustituimos lo que funciona. Construimos la parte que la gente todavía rellena a mano. Pregunte qué proceso consume hoy más tiempo manual.' },
    { q: 'Envíeme simplemente un correo.', a: 'Con gusto. Pida su mejor correo electrónico (aunque ya lo tenga) y explique que el correo incluirá un enlace de Google Meet para una videollamada breve 1:1 en la que mostramos una presentación corta preparada para su empresa y nuestros trabajos anteriores. Ofrezca dos horarios y pregunte cuál les viene bien.' },
    { q: 'No tenemos tiempo o no tenemos presupuesto.', a: 'La videollamada es breve y muestra algo concreto, no un discurso comercial. En la llamada no hay nada que decidir. Si ahora no hay presupuesto, pregunte cuándo planean la próxima ronda presupuestaria y ofrezca contactar entonces; regístrelo como «call back» con fecha.' },
    { q: '¿Es una herramienta no-code o software de verdad?', a: 'Software de verdad: productos completos que crecen con la empresa, sin los límites de las herramientas no-code dentro de un año. No entre en más detalle técnico por teléfono.' },
    { q: '¿Y los agentes de IA?', a: 'Desarrollamos agentes de IA personalizados para trabajo repetitivo: responder preguntas habituales, clasificar documentos, redactar ofertas, hacer seguimiento de estados. Elegimos entre un agente y una automatización clásica según lo que mejor encaje con su proceso. Sea concreto y vincúlelo a un proceso suyo.' },
    { q: '¿De quién es el software, dónde se almacenan los datos, qué hay del RGPD y la seguridad?', a: 'No responda de memoria. Diga que es una pregunta importante que tratamos en detalle en la videollamada y en el acuerdo, y anótela para que tras la reunión pase al campo «qué incluir en el acuerdo».' },
    { q: '¿Dónde tienen su sede y qué tamaño tiene el equipo?', a: 'Esto todavía no está recogido aquí. Pregunte a su administrador antes de llamar y no improvise. Si se lo preguntan antes de saberlo, diga que presentará al equipo en la videollamada.' },
  ],
};

export const extra: Extra = {
  name: 'Español',
  llm: 'Spanish (Spain, formal "usted" register)',
  where: 'Dónde encaja',
  ask: '¿Qué automatizamos primero?',
  meetIntro: (company) => `Buenos días,\n\nGracias por su tiempo al teléfono. Tal como acordamos, le envío nuestro enlace de Google Meet, donde le presentaremos brevemente lo que hemos preparado para ${company} y le mostraremos ejemplos de nuestros trabajos anteriores.`,
};
