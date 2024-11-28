import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

export const initAxiosInstance = (
  config?: CreateAxiosDefaults,
): AxiosInstance => {
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

export const GATEWAY_BASE_URL = 'http://localhost:3000'

export const api = initAxiosInstance({
  baseURL: GATEWAY_BASE_URL,
})
