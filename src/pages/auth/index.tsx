import Button from '@/components/shared/Button'
import { useEffect } from 'react'

function SignIn() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URL}&response_type=code`

  console.log('QQ')
  useEffect(() => {}, [])

  return (
    <a href={KAKAO_AUTH_URL}>
      <Button>KakaoLogin</Button>
    </a>
  )
}

export default SignIn
