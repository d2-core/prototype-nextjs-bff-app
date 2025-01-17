import { Teacher } from '@/models/teacher'
import { GitHub, Language, LinkedIn } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  teacher: Teacher
}

function TeacherCard({ teacher }: Props) {
  const route = useRouter()
  const handleTeacherDetailRoute = () => {
    route.push(`/teacher/${teacher.id}`)
  }
  return (
    <Card
      onClick={handleTeacherDetailRoute}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={teacher.profileImage}
        alt={teacher.name}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {teacher.name}
        </Typography>
        <Typography variant="subtitle2" color="primary" gutterBottom>
          {teacher.role}
        </Typography>

        <Box sx={{ my: 2 }}>
          {teacher.expertise.map((exp) => (
            <Chip
              key={exp}
              label={exp}
              size="small"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>

        <Box sx={{ mb: 2 }}>
          {teacher.experience.map((exp, index) => (
            <Typography
              key={index}
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 0.5,
                display: 'flex',
                alignItems: 'center',
                '&:before': {
                  content: '"•"',
                  marginRight: 1,
                },
              }}
            >
              {exp}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              개설 강좌
            </Typography>
            <Typography variant="h6">{teacher.courses}개</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              수강생
            </Typography>
            <Typography variant="h6">{teacher.students}명</Typography>
          </Grid>
        </Grid>

        <Box sx={{ mb: 2 }}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Rating value={teacher.rating} readOnly precision={0.1} />
            <Typography variant="body2" color="text.secondary">
              ({teacher.reviews} 리뷰)
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          {teacher.socialLinks?.linkedin && (
            <IconButton size="small" href={teacher.socialLinks.linkedin}>
              <LinkedIn />
            </IconButton>
          )}
          {teacher.socialLinks?.github && (
            <IconButton size="small" href={teacher.socialLinks.github}>
              <GitHub />
            </IconButton>
          )}
          {teacher.socialLinks?.website && (
            <IconButton size="small" href={teacher.socialLinks.website}>
              <Language />
            </IconButton>
          )}
        </Box>

        <Stack direction="row" spacing={1}>
          <Button variant="contained" fullWidth>
            프로필 보기
          </Button>
          <Button variant="outlined" fullWidth>
            상담 신청
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default TeacherCard
