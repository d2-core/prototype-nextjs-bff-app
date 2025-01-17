import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'
import { People, PlayCircle, Star, GroupWork } from '@mui/icons-material'

const stats = [
  { icon: <People />, count: '5,000+', label: '수강생' },
  { icon: <PlayCircle />, count: '300+', label: '강좌' },
  { icon: <Star />, count: '4.8', label: '평균 평점' },
  { icon: <GroupWork />, count: '50+', label: '전문 강사진' },
]

function StartBannerSection() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #0277bd 100%)',
        color: 'white',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/api/placeholder/1920/600")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              Creation Academy
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              실무 전문가와 함께하는 성장의 여정
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  무료 강의 시작하기
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  커리큘럼 둘러보기
                </Button>
              </Grid>
            </Grid>

            {/* 통계 섹션 */}
            <Box sx={{ mt: 6 }}>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      {stat.icon}
                      <Typography
                        variant="h4"
                        sx={{ my: 1, fontWeight: 'bold' }}
                      >
                        {stat.count}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default StartBannerSection
