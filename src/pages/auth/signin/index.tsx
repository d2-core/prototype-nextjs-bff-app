import Button from '@/components/shared/Button'
import { STAGE } from '@/constants/stage'

function SignIn() {
  const restApiKey =
    process.env.NEXT_PUBLIC_STAGE === STAGE.DEV
      ? `${process.env.NEXT_PUBLIC_DEV_KAKAO_API_KEY}`
      : `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`
  const refirectUrl = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URL
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${restApiKey}&redirect_uri=${refirectUrl}`

  const handleLogin = () => {
    window.location.href = kakaoAuthUrl
  }

  return <Button onClick={handleLogin}>로그인</Button>
}

export default SignIn
