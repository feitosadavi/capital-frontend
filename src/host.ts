export const MEILI = process.env.NODE_ENV === 'development'
  ? 'http://localhost:7700'
  : 'http://157.245.248.248'

export const CMS = process.env.NODE_ENV === 'development'
  ? 'http://localhost:1337'
  : 'https://seashell-app-6ylyu.ondigitalocean.app/'