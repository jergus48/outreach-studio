import type { Lang } from './fixed';

export type Country = 'lt' | 'de' | 'at' | 'ch' | 'ie' | 'gb' | 'lv' | 'fr' | 'dk' | 'no' | 'se' | 'fi' | 'pt' | 'es' | 'other';
export const COUNTRIES: { code: Country; label: string; lang: Lang }[] = [
  { code: 'lt', label: 'Lithuania', lang: 'lt' },
  { code: 'de', label: 'Germany', lang: 'de' },
  { code: 'at', label: 'Austria', lang: 'de' },
  { code: 'ch', label: 'Switzerland', lang: 'de' },
  { code: 'ie', label: 'Ireland', lang: 'en' },
  { code: 'gb', label: 'England (UK)', lang: 'en' },
  { code: 'lv', label: 'Latvia', lang: 'lv' },
  { code: 'fr', label: 'France', lang: 'fr' },
  { code: 'dk', label: 'Denmark', lang: 'da' },
  { code: 'no', label: 'Norway', lang: 'no' },
  { code: 'se', label: 'Sweden', lang: 'sv' },
  { code: 'fi', label: 'Finland', lang: 'fi' },
  { code: 'pt', label: 'Portugal', lang: 'pt' },
  { code: 'es', label: 'Spain', lang: 'es' },
  { code: 'other', label: 'Other (English)', lang: 'en' },
];

export const langFor = (c?: string | null): Lang => COUNTRIES.find((x) => x.code === c)?.lang || 'en';

const PHONE: [string, Country][] = [['+370', 'lt'], ['00370', 'lt'], ['+49', 'de'], ['0049', 'de'], ['+43', 'at'], ['0043', 'at'], ['+41', 'ch'], ['0041', 'ch'], ['+353', 'ie'], ['00353', 'ie'], ['+44', 'gb'], ['0044', 'gb'],
  ['+371', 'lv'], ['00371', 'lv'], ['+33', 'fr'], ['0033', 'fr'], ['+45', 'dk'], ['0045', 'dk'], ['+47', 'no'], ['0047', 'no'],
  ['+46', 'se'], ['0046', 'se'], ['+358', 'fi'], ['00358', 'fi'], ['+351', 'pt'], ['00351', 'pt'], ['+34', 'es'], ['0034', 'es']];
const TLD: Record<string, Country> = { lt: 'lt', de: 'de', at: 'at', ch: 'ch', ie: 'ie', uk: 'gb', lv: 'lv', fr: 'fr', dk: 'dk', no: 'no', se: 'se', fi: 'fi', pt: 'pt', es: 'es' };

/** Free-text (Excel cell or form value) to a country code, or null if empty/unclear. */
export function parseCountry(raw?: string | null): Country | null {
  const s = (raw || '').toString().trim().toLowerCase();
  if (!s) return null;
  if (['lt', 'de', 'at', 'ch', 'ie', 'gb', 'lv', 'fr', 'dk', 'no', 'se', 'fi', 'pt', 'es'].includes(s)) return s as Country;
  if (s === 'uk') return 'gb';
  if (/(lit|lietuv|litva|litau)/.test(s)) return 'lt';
  if (/(austria|österreich|osterreich|oesterreich|rakousk|rakúsk)/.test(s)) return 'at';
  if (/(switz|schweiz|suisse|svizzera|švýcar|švajcar|svajcar)/.test(s)) return 'ch';
  if (/(german|deutsch|německ|nemeck|vokiet)/.test(s)) return 'de';
  if (/(ireland|éire|eire|irsk|airij)/.test(s)) return 'ie';
  if (/(england|united kingdom|britain|british|anglij|anglick)/.test(s)) return 'gb';
  if (/(latvia|latvij|lotyš|lotys|lettland|latvija)/.test(s)) return 'lv';
  if (/(france|francij|frankreich|francúz|francuz|francie)/.test(s)) return 'fr';
  if (/(denmark|danija|dänemark|danemark|dánsk|dansk|danmark)/.test(s)) return 'dk';
  if (/(norway|norwegen|norvég|norveg|norsk|norge|norij)/.test(s)) return 'no';
  if (/(sweden|schweden|švéd|sved|sverige|švedsk|svedsk|švedij)/.test(s)) return 'se';
  if (/(finland|finnland|fínsk|finsk|suomi|suomen|suomij)/.test(s)) return 'fi';
  if (/(portugal|portugalsk|portugalij)/.test(s)) return 'pt';
  if (/(spain|españa|espana|spanien|španiel|spaniel|ispan|spanisch)/.test(s)) return 'es';
  return 'other';
}

/** Best guess from the website domain, then the phone prefix. */
export function inferCountry(website?: string | null, phone?: string | null): Country {
  try {
    const host = new URL(/^https?:\/\//i.test(website || '') ? (website as string) : 'https://' + (website || '')).hostname;
    const tld = host.split('.').pop() || '';
    if (TLD[tld]) return TLD[tld];
  } catch {}
  const p = (phone || '').replace(/[\s()-]/g, '');
  for (const [pre, c] of PHONE) if (p.startsWith(pre)) return c;
  return 'other';
}
