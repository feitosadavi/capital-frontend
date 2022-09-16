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
  query {
  veiculos {
    data {
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