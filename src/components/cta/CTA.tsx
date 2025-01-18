import { Box, Button, Container, Typography } from '@mui/material'

function CTA() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          지금 시작하세요
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
          14일 무료 체험으로 Creation Academy를 경험해보세요
        </Typography>
        <Button
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
          무료 체험 시작하기
        </Button>
      </Container>
    </Box>
  )
}

export default CTA
