import { gql } from '@apollo/client';

export const GET_FILTER_OPTIONS = gql`
query getVehicles ($modeloFilters: ModeloFiltersInput) {
  marcas {
		data {
      attributes {
        label
      }
    }
  }
  combustiveis {
		data {
      attributes {
        label
      }
    }
  }
  modelos (filters: $modeloFilters) {
		data {
      attributes {
        label
      }
    }
  }
  anos {
		data {
      attributes {
        label
      }
    }
  }
  cores {
		data {
      attributes {
        label
      }
    }
  }
  categorias {
		data {
      attributes {
        label
      }
    }
  }
}
`

export const GET_VEHICLES = gql`
  query ($filters: VeiculoFiltersInput) {
  veiculos (filters: $filters) {
    data {
      id
      attributes {
        km
        preco
        cor {
          data {
            attributes{
              label
            }
          }
        }
        marca {
          data {
            attributes{
              label
            }
          }
        }
        modelo {
          data {
            attributes{
              label
            }
          }
        }
        anos {
          data {
            attributes{
              label
            }
          }
        }
        photos {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
`

export const GET_VEHICLE = gql`
  query ($id: ID) {
  veiculo (id: $id) {
    data {
      id
      attributes {
        km
        preco
        descricao
        cor {
          data {
            attributes{
              label
            }
          }
        }
        marca {
          data {
            attributes{
              label
            }
          }
        }
        modelo {
          data {
            attributes{
              label
            }
          }
        }
        anos {
          data {
            attributes{
              label
            }
          }
        }
        photos {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
`