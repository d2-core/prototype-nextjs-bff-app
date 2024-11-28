import { IssuedToken, User } from '@/models/auth'
import { Api } from '@/models/api'
import { api } from './axios'

export async function issueAccessToken(
  refreshToken: string,
): Promise<Api<IssuedToken>> {
  const response = await api.post('/api/auth-service/auth/v1/refresh', {
    refreshToken,
  })
  return response.data
}

export async function getAppUser(): Promise<Api<User>> {
  const response = await api.get('/api/auth-service/auth/v1/users/me')

  return response.data
}
