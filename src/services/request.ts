export const request = async <T = any> (url: string) => {
  const res = await fetch(url)
  const json: T = await res.json()

  return json
}