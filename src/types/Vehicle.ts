export type Photo = {
  src: string
  alt: string
}

export type Vehicle = {
  preco: number
  anos: number
  marca: string
  modelo: string
  combustivel: string
  km: string
  cor: string
  descricao: string
  photos: Photo[]
}