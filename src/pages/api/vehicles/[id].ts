import type { NextApiRequest, NextApiResponse } from 'next'
import { useQuery } from '../../../Hookes/useQuery'
import { GET_VEHICLE } from '../../../services/queries'
import { Vehicle } from '../../../types'
import { setupFilters } from '../../../utils'

type Data = Vehicle

const setupFields = (apiVehicle: any): Vehicle => {
  const setupedVehicleData: any = { id: apiVehicle.id }

  const vehicleAttributes = apiVehicle.attributes
  for (const key of Object.keys(vehicleAttributes)) {
    setupedVehicleData[key] = (vehicleAttributes[key]?.data?.attributes?.label || vehicleAttributes[key])
  }

  const setupedPhotos = setupPhotos(setupedVehicleData.photos.data)

  return { ...setupedVehicleData, photos: setupedPhotos } as Vehicle
}

const setupPhotos = (photos: any) => photos.map(({ attributes: { url, alternativeText } }: any) => ({ src: url, alt: alternativeText }))

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id } = req.query
    console.log({ id });

    const apiVehicle = await useQuery(GET_VEHICLE, false, { id })

    const vehicle = setupFields(apiVehicle.veiculo.data)

    res.status(200).json(vehicle)
  } catch (error) {
    console.log(error);

  }
}