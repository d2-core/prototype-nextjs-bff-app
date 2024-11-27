import { LOCALSTORAGE } from '@/constants/auth'
import { getAppUser } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authLocalStorage } from '@/store/local'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function InitGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const setUser = useSetRecoilState(userAtom)

  const { data } = useQuery(['user'], () => getAppUser(), {
    enabled: !!accessToken,
  })

  useEffect(() => {
    const accessToken = authLocalStorage.get(LOCALSTORAGE.AUTH.ACESS_TOKEN)
    setAccessToken(accessToken)
    if (data?.body) {
      setUser(data.body)
    } else {
    }
    setInitialize(true)
  }, [])

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default InitGuard
