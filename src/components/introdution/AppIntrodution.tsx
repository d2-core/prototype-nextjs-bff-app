import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import CodeIcon from '@mui/icons-material/Code'
import MovieIcon from '@mui/icons-material/Movie'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import GroupsIcon from '@mui/icons-material/Groups'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(120deg, #2c3e50 0%, #3498db 100%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  position: 'relative',
  overflow: 'hidden',
}))

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}))

interface TrackFeature {
  title: string
  description: string
  icon: JSX.Element
  benefits: string[]
  tools: string[]
}

function AppIntroduce() {
  const tracks: TrackFeature[] = [
    {
      title: '개발 트랙',
      description: '최신 기술과 AI 도구를 활용한 실전 개발 역량 강화',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      benefits: [
        '웹/앱 개발의 전체 프로세스 이해',
        'AI 도구를 활용한 효율적인 코딩 방법',
        '실전 프로젝트 완성 및 포트폴리오 구축',
      ],
      tools: ['Github Copilot', 'ChatGPT', 'AWS 클라우드'],
    },
    {
      title: '미디어 트랙',
      description: '영상, 디자인, 콘텐츠 제작의 전문적 스킬 습득',
      icon: <MovieIcon sx={{ fontSize: 40 }} />,
      benefits: [
        '전문가급 영상 편집 기술',
        'AI 기반 디자인 도구 활용',
        '매력적인 콘텐츠 기획 및 제작',
      ],
      tools: ['Midjourney', 'DaVinci Resolve', 'Adobe Creative Suite'],
    },
    {
      title: '마인드셋 트랙',
      description: '창작자로서의 성장과 비즈니스 마인드 확립',
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      benefits: [
        '창작자로서의 정체성 확립',
        '수익화 전략 수립',
        '커뮤니티 구축과 네트워킹',
      ],
      tools: ['Notion', 'Discord', '크리에이터 플래닝 툴'],
    },
  ]

  return (
    <Box>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" gutterBottom fontWeight="bold">
                당신의 창작 여정을 함께합니다
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                개발, 미디어, 마인드셋을 아우르는 종합 창작자 교육 플랫폼
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'secondary.main',
                    px: 4,
                    '&:hover': { bgcolor: 'secondary.dark' },
                  }}
                >
                  무료 체험하기
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{ px: 4 }}
                >
                  커리큘럼 살펴보기
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="/api/placeholder/500/400"
                alt="창작자 교육"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* AI 강점 섹션 */}
      <Section sx={{ bgcolor: 'grey.50' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            AI 시대의 새로운 창작 패러다임
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            최신 AI 도구들을 마스터하여 당신의 창작 능력을 극대화하세요
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', bgcolor: 'primary.light' }}>
                <CardContent>
                  <SmartToyIcon
                    sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    AI 도구 통합 교육
                  </Typography>
                  <Typography>
                    ChatGPT, Midjourney, Github Copilot 등 분야별 최적의 AI 도구
                    활용법 마스터
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', bgcolor: 'secondary.light' }}>
                <CardContent>
                  <GroupsIcon
                    sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    실시간 멘토링
                  </Typography>
                  <Typography>
                    현직 전문가들의 1:1 맞춤형 멘토링으로 빠른 성장 지원
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', bgcolor: 'info.light' }}>
                <CardContent>
                  <WorkspacePremiumIcon
                    sx={{ fontSize: 40, color: 'info.main', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    프로젝트 중심 학습
                  </Typography>
                  <Typography>
                    실제 프로젝트를 통한 포트폴리오 구축 및 실전 경험 쌓기
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* 트랙별 상세 소개 */}
      <Section>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            전문성 있는 트랙별 교육
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            당신의 목표에 맞는 최적의 트랙을 선택하세요
          </Typography>
          <Grid container spacing={4}>
            {tracks.map((track, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard>
                  <CardContent>
                    <Box sx={{ mb: 3 }}>{track.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {track.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {track.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" gutterBottom>
                      주요 혜택
                    </Typography>
                    <List dense>
                      {track.benefits.map((benefit, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                      사용 도구
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {track.tools.map((tool, idx) => (
                        <Chip
                          key={idx}
                          label={tool}
                          color="primary"
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 창작자 성장 로드맵 */}
      <Section sx={{ bgcolor: 'grey.50' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            당신의 성장 여정
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            체계적인 커리큘럼으로 창작자로서의 성장을 지원합니다
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  1단계: 기초 역량 구축 (4주)
                </Typography>
                <Typography>
                  각 트랙별 핵심 도구 사용법과 기본 개념 학습
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  2단계: 실전 프로젝트 (8주)
                </Typography>
                <Typography>
                  실제 프로젝트 수행을 통한 포트폴리오 구축
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  3단계: 비즈니스 확장 (4주)
                </Typography>
                <Typography>
                  수익화 전략 수립 및 창작자 네트워크 구축
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* CTA 섹션 */}
      <Section sx={{ bgcolor: 'primary.main', color: 'white' }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8} textAlign="center">
              <Typography variant="h3" gutterBottom>
                지금 시작하세요
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                창작의 즐거움을 경험하고 새로운 가능성을 발견하세요
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ px: 6, py: 1.5 }}
              >
                무료 체험 신청하기
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Box>
  )
}

export default AppIntroduce
