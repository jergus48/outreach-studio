import type { Lang } from '../fixed';
import type { Extra } from './types';
import { extra as fr } from './fr';
import { extra as lv } from './lv';
import { extra as da } from './da';
import { extra as no } from './no';
import { extra as sv } from './sv';
import { extra as fi } from './fi';
import { extra as pt } from './pt';
import { extra as es } from './es';

export const EXTRA: Record<Lang, Extra> = {
  lt: { name: 'Lietuvių', llm: 'Lithuanian (formal "Jūs" register)', where: 'Kur tai pritaikoma', ask: 'Ką automatizuojame pirmiausia?',
    meetIntro: (c) => `Sveiki,

Dekojame uz pokalbi telefonu. Kaip susitareme, siunciame Google Meet nuoroda, kurioje parodysime jums, ${c}, paruosta trumpa pristatyma ir ankstesnius musu darbus.` },
  en: { name: 'English', llm: 'English', where: 'Where it fits', ask: 'What do we automate first?',
    meetIntro: (c) => `Hi,

Thank you for your time on the phone. As agreed, here is our Google Meet where we will walk you through a short presentation prepared for ${c} and show examples of our previous work.` },
  de: { name: 'Deutsch', llm: 'German (formal "Sie" register)', where: 'Wo es passt', ask: 'Was automatisieren wir zuerst?',
    meetIntro: (c) => `Guten Tag,

vielen Dank fuer das Telefonat. Wie besprochen finden Sie hier unser Google Meet, in dem wir Ihnen eine kurze, fuer ${c} vorbereitete Praesentation und Beispiele unserer bisherigen Arbeit zeigen.` },
  fr,
  lv,
  da,
  no,
  sv,
  fi,
  pt,
  es,
};
