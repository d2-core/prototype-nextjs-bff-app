import { User as IUser } from '@/models/auth'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'

function User() {
  const userProfile: IUser = {
    id: 1,
    nickName: '김철수',
    email: 'cheolsu.kim@example.com',
    imageUrl: '/profile-image.jpg',
    registeredAt: '2023-01-15',
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        회원 정보
      </Typography>
      <Card sx={{ mb: 4, overflow: 'visible' }}>
        <CardContent>
          <Box display={'flex'}>
            <Box
              component={'img'}
              src={userProfile.imageUrl}
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
                {userProfile.nickName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                이메일: {userProfile.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                가입일: {userProfile?.registeredAt}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default User
