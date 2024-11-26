import { initAxiosInstance } from './axios'

export const GATEWAY_BASE_URL = 'http://localhost:9090'

export const api = initAxiosInstance({
  baseURL: GATEWAY_BASE_URL,
})
