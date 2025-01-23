import { Teacher } from '@/models/teacher'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Rating,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  teacher: Teacher
  width?: string
}

function TeacherCard({ teacher, width }: Props) {
  const route = useRouter()
  const handleTeacherDetailRoute = () => {
    route.push(`/teachers/${teacher.id}`)
  }
  return (
    <Card
      onClick={handleTeacherDetailRoute}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        width: width ?? '100%',
      }}
    >
      <Box
        component="img"
        minHeight={'240px'}
        src={teacher.profileImageUrl}
        alt={teacher.nickname}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {teacher.nickname}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              개설 강좌
            </Typography>
            <Typography variant="h6">
              {teacher.statics?.courseCount}개
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              수강생
            </Typography>
            <Typography variant="h6">
              {teacher.statics?.sutdentCount}명
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mb: 2 }}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Rating
              value={teacher.statics?.courseTotalAverageRatings}
              readOnly
              precision={0.1}
            />
            <Typography variant="body2" color="text.secondary">
              ({teacher.statics?.totalReviewCount} 리뷰)
            </Typography>
          </Box>
        </Box>

        <Box sx={{ my: 2 }}>
          {teacher.expertises.map((exp) => (
            <Chip
              key={exp}
              label={exp}
              size="small"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default TeacherCard
