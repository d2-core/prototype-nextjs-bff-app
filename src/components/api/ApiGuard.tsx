import { LOCALSTORAGE } from '@/constants/localstorage'
import { API } from '@/constants/api'
import { useAlertContext } from '@/contexts/AlertContext'
import { Api } from '@/models/api'
import { issueAccessToken } from '@/remote/api/auth'
import { authStorage } from '@/store/local'
import { HttpStatusCode } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ERROR } from '@/constants/error'
import ClientError from '@/errors/ClientError'
import ApiError from '@/errors/ApiError'
import { api } from '@/remote/api/axios'

function ApiGuard({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false)
  const { open } = useAlertContext()
  const router = useRouter()

  const handleUnauthorized = async () => {
    const refreshToken = authStorage.get(LOCALSTORAGE.AUTH.REFRESH_TOKEN)
    if (!refreshToken) {
      router.push('/signin')
      throw new ClientError({
        result: ERROR.API.IMVALID_REFRESH_TOKEN,
        body: {},
        reasonArg: `refreshToken: ${refreshToken}`,
      })
    }

    const { result, body } = await issueAccessToken(refreshToken)
    const accessToken = body.token
    if (!accessToken) {
      router.push('/signin')
      throw new ApiError({ result: result, body: body })
    }

    return accessToken
  }

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const accessToken = authStorage.get(LOCALSTORAGE.AUTH.ACESS_TOKEN)
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
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
        const apiResponse = error.response.data as Api<any>
        if (apiResponse) {
          const { status } = error.config || {}
          const originalRequest = error.config

          if (
            status === HttpStatusCode.Unauthorized &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true
            const accessToken = await handleUnauthorized()
            authStorage.set(LOCALSTORAGE.AUTH.ACESS_TOKEN, accessToken)
            return api(originalRequest)
          }

          if (status === HttpStatusCode.Forbidden) {
            open({
              title: '접근 권한이 없습니다.',
              onButtonClick: () => {
                router.back()
              },
            })
          }
          throw new ApiError(apiResponse)
        } else {
          throw new ClientError({
            result: ERROR.API.CONNECT_REFUSED,
            reasonArg: `url: ${api.getUri()}${error.config?.url}`,
            body: {},
          })
        }
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

export default ApiGuard
