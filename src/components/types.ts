
/* Navigation */
export type Page = {
  label: string
  href: string
  newTab?: boolean
}

export type NavProps = {
  path: string
  pages: Page[]
}