export const request = async <T = any> (url: string, method?: string, body?: BodyInit) => {
  console.log(body);

  const res = await fetch(url, { method: method ?? 'GET', body: body })
  const json: T = await res.json()
  console.log(res);

  return json
}