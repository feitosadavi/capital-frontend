import MeiliSearch from 'meilisearch';
import { MEILI } from '../host';

export const searchClient = new MeiliSearch({
  host: MEILI,
  // apiKey: 'OTBiMTM1MWQyNDQ0ZTA3ZGY3MmNlMDNj'
})