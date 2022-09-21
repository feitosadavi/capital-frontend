import type { NextApiRequest, NextApiResponse } from 'next'
import { useQuery } from '../../../Hookes/useQuery'
import { GET_VEHICLES } from '../../../services/queries'
import { ComprarPageVehicle } from '../../../types'
import { setupFilters } from '../../../utils'

type Data = ComprarPageVehicle[]

const setupFields = (apiVehicles: any) => {
  const vehiclesArray: ComprarPageVehicle[] = []
  for (const apiVehicle of apiVehicles) {

    const setupedVehicleData: any = { id: apiVehicle.id }

    const vehicleAttributes = apiVehicle.attributes
    for (const key of Object.keys(vehicleAttributes)) {
      setupedVehicleData[key] = (vehicleAttributes[key]?.data?.attributes?.label || vehicleAttributes[key])
    }

    const setupedPhotos = setupPhotos(setupedVehicleData.photos.data)
    vehiclesArray.push({ ...setupedVehicleData, photos: setupedPhotos })
  }
  return vehiclesArray
}

const setupPhotos = (photos: any) => photos.map(({ attributes: { url, alternativeText } }: any) => ({ src: url, alt: alternativeText }))

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const filters = setupFilters(req)

    const apiVehicles = await useQuery(GET_VEHICLES, false, { filters })

    const vehicles = setupFields(apiVehicles.veiculos.data)

    res.status(200).json(vehicles)
  } catch (error) {
    console.log(('error'));

  }
}