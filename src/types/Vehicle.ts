export type Photo = {
  src: string
  alt: string
}

export type Marca = {
  label: string
  photo: Photo
}

export type Vehicle = {
  id: string
  preco: number
  anos: number
  marca: Marca
  modelo: string
  combustivel: string
  km: string
  cor: string
  descricao: string
  photos: Photo[]
  categoria: string
  opcionais: string[]
}

type FieldsToOmit = 'combustivel' | 'descricao' | 'categoria'
export type ComprarPageVehicle = Omit<Vehicle, FieldsToOmit>