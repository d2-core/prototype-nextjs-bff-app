import { IssuedToken, User } from '@/models/auth'
import { api } from '.'
import { Api } from '@/models'

export async function issueAccessToken(
  refreshToken: string,
): Promise<Api<IssuedToken>> {
  const response = await api.post('auth-service/auth/v1/refresh', {
    refreshToken,
  })
  return response.data.body
}

export async function getAppUser(): Promise<Api<User>> {
  const response = await api.post('auth-service/auth/v1/users/me')

  return response.data.body
}
