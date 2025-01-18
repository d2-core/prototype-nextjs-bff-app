import { stageMap } from '@/constants/stage'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material'

function SignIn() {
  const restApiKey =
    process.env.NEXT_PUBLIC_STAGE === stageMap.DEV
      ? `${process.env.NEXT_PUBLIC_DEV_KAKAO_API_KEY}`
      : `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`
  const refirectUrl = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URL
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${restApiKey}&redirect_uri=${refirectUrl}`

  const handleLogin = () => {
    window.location.href = kakaoAuthUrl
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: '100%',
          py: 8,
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'inherit',
                cursor: 'pointer',
                '&:hover': {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              Creation
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to continue to your account
            </Typography>
          </Box>

          <Button
            onClick={handleLogin}
            variant="contained"
            fullWidth
            sx={{
              bgcolor: '#FEE500',
              color: '#000000',
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component={'img'}
              src="/images/kakao_login.png"
              alt="Kakao Logo"
            />
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default SignIn
