import { LOCALSTORAGE } from '@/constants/localstorage'
import { API } from '@/constants/api'
import { useAlertContext } from '@/contexts/AlertContext'
import { Api } from '@/models/api'
import { refresh } from '@/remote/api/auth'
import { authStorage } from '@/store/local'
import { HttpStatusCode } from 'axios'

import { useEffect, useState } from 'react'
import { ERROR } from '@/constants/error'
import ClientError from '@/errors/ClientError'
import ApiError from '@/errors/ApiError'
import { api } from '@/remote/api/axios'
import { useRouter } from 'next/router'
import { HEADER } from '@/constants/header'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '@/store/atom/user'

function ApiInit({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false)
  const router = useRouter()
  const { open } = useAlertContext()
  const setUser = useSetRecoilState(userAtom)

  const handleLogout = () => {
    authStorage.remove(LOCALSTORAGE.AUTH.ACCESS_TOKEN)
    authStorage.remove(LOCALSTORAGE.AUTH.REFRESH_TOKEN)

    setUser(null)

    router.push('/auth/signin')
  }

  const handleUnauthorized = async () => {
    const refreshToken = authStorage.get(LOCALSTORAGE.AUTH.REFRESH_TOKEN)
    if (!refreshToken) {
      handleLogout()

      throw new ClientError({
        result: ERROR.API.IMVALID_REFRESH_TOKEN,
        body: {},
        reasonArg: `refreshToken: ${refreshToken}`,
      })
    }

    const { result, body } = await refresh(refreshToken)
    const accessToken = body.token
    if (!accessToken) {
      handleLogout()

      throw new ApiError({ result: result, body: body })
    }

    return accessToken
  }

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const accessToken = authStorage.get(LOCALSTORAGE.AUTH.ACCESS_TOKEN)
        if (accessToken) {
          config.headers.Authorization = `${accessToken}`
        }
        return config
      },
      (error) => {
        throw error
      },
    )
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        const { result, body } = response.data as Api<any>
        if (result.code !== API.OK) {
          throw new ApiError({ result: result, body: body })
        }
        return response
      },
      async (error) => {
        if (error.response) {
          const apiResponse = error.response.data as Api<any>
          const { headers } = error.config
          const { status } = error.response || {}
          const { request } = error

          if (
            status === HttpStatusCode.Unauthorized &&
            Boolean(headers[HEADER.REFRESH])
          ) {
            handleLogout()

            throw new ApiError(apiResponse)
          }

          if (status === HttpStatusCode.Unauthorized && !request._retry) {
            request._retry = true
            const accessToken = await handleUnauthorized()
            authStorage.set(LOCALSTORAGE.AUTH.ACCESS_TOKEN, accessToken)

            return api(request.responseURL)
          }

          if (status === HttpStatusCode.Forbidden) {
            open({
              title: '접근 권한이 없습니다.',
              onButtonClick: () => {
                router.back()
              },
            })
            throw new ApiError(apiResponse)
          }

          throw new ApiError(apiResponse)
        }

        throw new ClientError({
          result: ERROR.API.CONNECT_REFUSED,
          reasonArg: `url: ${api.getUri()}${error.config?.url}`,
          body: {},
        })
      },
    )

    setInit(true)

    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [open, router])

  if (init === false) {
    return null
  }

  return <>{children}</>
}

export default ApiInit
