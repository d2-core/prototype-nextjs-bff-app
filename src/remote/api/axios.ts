import { Domain, domainMap } from '@/constants/api'
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

const initAxiosInstance = (config?: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 20000,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  })

  return instance
}
export const api = initAxiosInstance()

export function getApi(domain: Domain) {
  // const {
  //   NEXT_PUBLIC_STAGE,
  //   NEXT_PUBLIC_API_GATEWAY_URL,
  //   NEXT_PUBLIC_DEV_API_GATEWAY_URL,
  // } = process.env

  // let baseUrl = ''
  // if (NEXT_PUBLIC_STAGE === stageMap.PROD) {
  //   baseUrl = `${NEXT_PUBLIC_API_GATEWAY_URL}${domainMap[domain]}`
  // }

  // if (NEXT_PUBLIC_STAGE === stageMap.DEV) {
  //   baseUrl = `http://localhost:9090${domainMap[domain]}`
  // }
  api.defaults.baseURL = `http://localhost:9090${domainMap[domain]}`

  return api
}
