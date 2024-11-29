export const API = {
  OK: 'OK',
}
export const DOMAIN = {
  AUTH: '/auth/',
  EVENT: '/event/',
  NOTIFICATION: '/notification/',
  PRODUCT: '/product/',
}

export type Domain = keyof typeof DOMAIN
