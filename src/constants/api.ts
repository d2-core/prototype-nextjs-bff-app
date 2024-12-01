export const API = {
  OK: 'OK',
}
export const DOMAIN = {
  AUTH: '/auth-service/',
  EVENT: '/event-service/',
  NOTIFICATION: '/notification-service/',
  PRODUCT: '/product-service/',
}

export type Domain = keyof typeof DOMAIN
