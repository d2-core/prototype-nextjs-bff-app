import { LOCALSTORAGE } from '@/constants/localstorage'
import { getAppUser } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authStorage as authLocalStorage } from '@/store/local'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function InitGuard({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const setUser = useSetRecoilState(userAtom)
  const { data } = useQuery(['user'], () => getAppUser(), {
    enabled: !!accessToken,
    suspense: true,
  })

  useEffect(() => {
    const token = authLocalStorage.get(LOCALSTORAGE.AUTH.ACESS_TOKEN)
    setAccessToken(token)
    if (data?.body) {
      setUser(data.body)
    }

    setInit(true)
  }, [data, setUser])

  if (init === false) {
    return null
  }

  return <>{children}</>
}

export default InitGuard
