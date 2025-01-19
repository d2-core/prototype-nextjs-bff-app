import { stageMap } from '@/constants/stage'
import { Box, Dialog, DialogContent, Typography } from '@mui/material'

interface Props {
  open: boolean
  onClose: () => void
}

function LoginModal({ open = false, onClose }: Props) {
  const restApiKey =
    process.env.NEXT_PUBLIC_STAGE === stageMap.DEV
      ? `${process.env.NEXT_PUBLIC_DEV_KAKAO_API_KEY}`
      : `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`
  const refirectUrl = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URL
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${restApiKey}&redirect_uri=${refirectUrl}`

  const handleLogin = () => {
    window.location.href = kakaoAuthUrl
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={2}
          padding={4}
        >
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

          <Box
            onClick={handleLogin}
            component={'img'}
            src="/images/kakao_login.png"
            alt="Kakao Logo"
            height={60}
          />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
