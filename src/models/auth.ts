export interface IssuedToken {
  token?: string
  expiredAt?: string
}

export type Role = 'ADMIN' | 'APP'
export type UserStatus = 'REGISTERED' | 'UNREGISTERED'
export interface User {
  id: number
  role?: Role
  nickname?: string
  email?: string
  phoneNumber?: string
  status?: UserStatus
  registeredAt?: string
  modifiedAt?: string
  lastLoginAt: string
}

export interface Token {
  accessToken: string
  accessTokenExpiredAt: string
  refreshToken: string
  refreshTokenExpiredAt: string
}
