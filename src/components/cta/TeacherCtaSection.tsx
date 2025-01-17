import { Box, Button, Typography } from '@mui/material'

function TeacherCtaSection() {
  const handleRouteAdmin = () => {
    window.open('https://naver.com', '_blank')
  }
  return (
    <Box
      sx={{
        mt: 8,
        p: 4,
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Creation Academy와 함께 성장하세요
      </Typography>
      <Typography sx={{ mb: 3, opacity: 0.9 }}>
        여러분의 지식과 경험을 공유하며 더 많은 사람들에게 가치를 전달하세요
      </Typography>
      <Button
        onClick={handleRouteAdmin}
        variant="contained"
        size="large"
        sx={{
          bgcolor: 'white',
          color: 'primary.main',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.9)',
          },
        }}
      >
        선생님 지원하기
      </Button>
    </Box>
  )
}

export default TeacherCtaSection
