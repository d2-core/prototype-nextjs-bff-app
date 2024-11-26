import { LOCALSTORAGE } from '@/constants/auth'
import { getAppUser } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authStorage as authLocalStorage } from '@/store/local'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function Init({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  const accessToken = authLocalStorage.get(LOCALSTORAGE.AUTH.ACESS_TOKEN)
  const { data } = useQuery(['user'], () => getAppUser(), {
    enabled: !!accessToken,
  })

  useEffect(() => {
    if (data?.body) {
      setUser(data.body)
    }

    setInitialize(true)
  }, [data, setUser])

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default Init
