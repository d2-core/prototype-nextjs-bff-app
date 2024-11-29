import { LOCALSTORAGE } from '@/constants/localstorage'
import { loginWithKakao } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authStorage } from '@/store/local'
import { useRouter } from 'next/router'
import qs from 'qs'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function KakaoCallback() {
  const router = useRouter()
  const setUser = useSetRecoilState(userAtom)
  const { code } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as { code: string }

  const { data: api } = useQuery(
    ['login-with-kakao'],
    () => loginWithKakao(code),
    {
      enabled: !!code,
      suspense: true,
    },
  )

  useEffect(() => {
    if (api?.body) {
      const { token, ...users } = api?.body
      authStorage.set(LOCALSTORAGE.AUTH.ACESS_TOKEN, token.accessToken)
      authStorage.set(LOCALSTORAGE.AUTH.REFRESH_TOKEN, token.refreshToken)
      setUser(users)
      router.push('/')
    } else {
      router.back()
    }
  }, [api])

  return null
}
export default KakaoCallback
