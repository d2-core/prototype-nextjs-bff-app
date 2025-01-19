import { localstorageMap } from '@/constants/localstorage'
import useUser from '@/hooks/useUser'
import { authStorage } from '@/store/local'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

function User() {
  const { user, setUser } = useUser()
  const route = useRouter()

  const handleLogout = () => {
    authStorage.remove(localstorageMap.AUTH.ACCESS_TOKEN)
    authStorage.remove(localstorageMap.AUTH.REFRESH_TOKEN)

    setUser(null)
    route.push('/starts')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        회원 정보
      </Typography>
      <Card sx={{ mb: 4, overflow: 'visible' }}>
        <CardContent>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'}>
              <Box
                component={'img'}
                src={user?.imageUrl}
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  mr: 4,
                }}
              />
              <Box>
                <Typography variant="h4" gutterBottom>
                  이름: {user?.nickname}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  이메일: {user?.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  가입일: {user?.registeredAt}
                </Typography>
              </Box>
            </Box>

            <Button onClick={handleLogout}>로그아웃</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default User
