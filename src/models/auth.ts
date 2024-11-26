export interface IssuedToken {
  token?: string
  expiredAt?: string
}

export type Role = 'ADMIN' | 'APP'
export type UserStatus = 'REGISTERED' | 'UNREGISTERED'
export interface User {
  id?: number
  role?: Role
  nickname?: string
  emali?: string
  phoneNumber?: string
  status?: UserStatus
  registeredAt?: string
  modifiedAt?: string
  lastLoginAt: string
}
