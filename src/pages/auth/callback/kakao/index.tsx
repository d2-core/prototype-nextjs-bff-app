import { localstorageMap } from '@/constants/localstorage'
import { loginWithKakao } from '@/remote/api/auth'
import { userAtom } from '@/store/atom/user'
import { authStorage } from '@/store/local'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'

function KakaoCallback() {
  const router = useRouter()
  const setUser = useSetRecoilState(userAtom)
  const { code } = router.query

  const { isLoading } = useQuery(
    ['login-with-kakao'],
    () => loginWithKakao(code as string),
    {
      enabled: Boolean(code),
      onSuccess: (data) => {
        if (data?.body) {
          const { token, ...users } = data?.body
          authStorage.set(
            localstorageMap.AUTH.ACCESS_TOKEN,
            token.accessToken ?? '',
          )
          authStorage.set(
            localstorageMap.AUTH.REFRESH_TOKEN,
            token.refreshToken ?? '',
          )
          setUser(users)
          router.push('/start')
        } else {
          router.back()
        }
      },
      onError: () => {
        router.push('/')
      },
    },
  )

  if (isLoading) {
    return <div>Loding...</div>
  }
  return null
}
export default KakaoCallback
