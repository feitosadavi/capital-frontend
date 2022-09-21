import { GetStaticProps } from 'next'
import React from 'react'
import { request } from '../../services/request'
import { ComprarPageVehicle, Vehicle as VehicleType } from '../../types'

type VehicleProps = {
  _vehicle: VehicleType
}

const Vehicle: React.FC<VehicleProps> = ({ _vehicle }) => {
  return (
    <>{_vehicle.id}</>
  )
}

// This function gets called at build time
export const getStaticPaths = async () => {
  const _vehicles = await request<ComprarPageVehicle[]>('http://localhost:3000/api/vehicles')
  const paths = _vehicles.map(({ id }) => ({
    params: { id },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<VehicleProps> = async ({ params }) => {
  const _vehicle = await request<VehicleType>(`http://localhost:3000/api/vehicles/${params?.id}`)

  const props: VehicleProps = { _vehicle }

  return { props }
}

export default Vehicle