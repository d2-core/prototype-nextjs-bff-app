import { Api } from '@/models/api'
import { Token, User } from '@/models/auth'
import { getApi } from './axios'
import { headerMap } from '@/constants/auth'

export async function refresh({
  refreshToken,
}: {
  refreshToken: string
}): Promise<Api<Token>> {
  const response = await getApi('AUTH').post(
    'api/auth/v1/tokens/refresh',
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
  const response = await getApi('AUTH').get('api/auth/v1/admin-users/me')

  return response.data
}
