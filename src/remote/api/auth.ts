import { Api } from '@/models/api'
import { Token, User } from '@/models/auth'
import { getApi } from './axios'
import { headerMap } from '@/constants/auth'
import { AxiosResponse } from 'axios'

export async function refresh({
  refreshToken,
}: {
  refreshToken: string
}): Promise<Api<Token>> {
  const response: AxiosResponse<Api<Token>> = await getApi('AUTH').post(
    '/api/auth/v1/tokens/refresh',
    null,
    {
      headers: {
        [headerMap.REFRESH]: refreshToken,
      },
    },
  )
  return response.data
}

export async function getUser(): Promise<Api<User>> {
  const response: AxiosResponse<Api<User>> = await getApi('AUTH').get(
    '/api/auth/v1/users/me',
  )

  return response.data
}

export async function loginWithKakao(
  code: string,
): Promise<Api<User & { token: Token }>> {
  const response: AxiosResponse<Api<User & { token: Token }>> = await getApi(
    'AUTH',
  ).post('/api/auth/v1/users/login-with-kakao', {
    code,
  })

  return response.data
}
