import { LOCALSTORAGE } from '@/constants/localstorage'
import useUser from '@/hooks/auth/useUser'
import { getAppUser } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authStorage as authLocalStorage } from '@/store/local'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function UserInit({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const user = useUser()
  const setUser = useSetRecoilState(userAtom)

  const { data } = useQuery(['user'], getAppUser, {
    enabled: Boolean(accessToken) && !Boolean(user),
  })

  useEffect(() => {
    const token = authLocalStorage.get(LOCALSTORAGE.AUTH.ACCESS_TOKEN)
    setAccessToken(token)
    if (data?.body) {
      setUser(data.body)
    }
  }, [data, setUser])

  return <>{children}</>
}

export default UserInit
