import { CMS } from '../host'

export const request = async <T = any> (url: string, method?: string, body?: BodyInit) => {
  const res = await fetch(`${CMS}${url}`, { method: method ?? 'GET', body: body })
  const json: T = await res.json()
  // console.log({ json: (json as any).data });


  return json
}