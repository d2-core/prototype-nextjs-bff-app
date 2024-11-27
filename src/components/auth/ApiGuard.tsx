import { LOCALSTORAGE } from '@/constants/auth'
import { API } from '@/constants/api'
import { useAlertContext } from '@/contexts/AlertContext'
import { Api } from '@/models'
import { api } from '@/remote/api'
import { issueAccessToken } from '@/remote/api/auth'
import { authLocalStorage } from '@/store/local'
import { HttpStatusCode } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function ApiGuard({ children }: { children: React.ReactNode }) {
  const { open } = useAlertContext()
  const router = useRouter()

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const accessToken = authLocalStorage.get(LOCALSTORAGE.AUTH.ACESS_TOKEN)
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        const { result } = response.data as Api<any>
        if (result.code !== API.OK) {
          throw new Error(JSON.stringify(result))
        }
        return response
      },
      async (error) => {
        const response = error.response as Api<any>
        const { status } = error.config || {}
        const originalRequest = error.config
        if (status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
          originalRequest._retry = true
          const refreshToken = authLocalStorage.get(
            LOCALSTORAGE.AUTH.REFRESH_TOKEN,
          )
          if (!refreshToken) {
            router.push('/signin')
            throw new Error(JSON.stringify(response))
          }
          const { body } = await issueAccessToken(refreshToken)
          const accessToken = body.token
          if (!accessToken) {
            router.push('/signin')
            throw new Error(JSON.stringify(response))
          }
          localStorage.setItem(LOCALSTORAGE.AUTH.ACESS_TOKEN, accessToken)
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
        throw new Error(JSON.stringify(response))
      },
    )

    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [router])

  return <>{children}</>
}

export default ApiGuard
