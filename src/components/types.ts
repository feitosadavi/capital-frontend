
/* Navigation */
export type Page = {
  label: string
  href: string
}

export type NavProps = {
  path: string
  pages: Page[]
}