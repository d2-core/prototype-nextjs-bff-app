import { IssuedToken, Token, User } from '@/models/auth'
import { Api } from '@/models/api'
import { getApi } from './axios'

export async function issueAccessToken(
  refreshToken: string,
): Promise<Api<IssuedToken>> {
  const response = await getApi('AUTH').post('auth/v1/refresh', {
    refreshToken,
  })
  return response.data
}

export async function getAppUser(): Promise<Api<User>> {
  const response = await getApi('AUTH').get('auth/v1/users/me')

  return response.data
}

export async function loginWithKakao(
  code: string,
): Promise<Api<User & { token: Token }>> {
  const response = await getApi('AUTH').post('auth/v1/users/login-with-kakao', {
    code,
  })

  return response.data
}
