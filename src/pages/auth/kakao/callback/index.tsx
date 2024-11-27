import qs from 'qs'
import { useEffect } from 'react'

function AuthKakaoCallback() {
  const { code } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { code: string }

  useEffect(() => {
    console.log('code')
  }, [code])

  return <div>Hello Kakao</div>
}

export default AuthKakaoCallback
