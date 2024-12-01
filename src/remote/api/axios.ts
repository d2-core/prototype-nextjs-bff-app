import { DOMAIN, Domain } from '@/constants/api'
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

const initAxiosInstance = (config?: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
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
  api.defaults.baseURL = 'http://localhost:9090' + DOMAIN[domain]
  return api
}
