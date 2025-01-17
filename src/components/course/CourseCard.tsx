import { Course } from '@/models/course'
import { BookmarkBorder, PlayCircleOutline } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  course: Course
}

function CourseCard({ course }: Props) {
  const route = useRouter()
  const handleCourseDetailRoute = () => {
    route.push(`course/${course.id}`)
  }
  return (
    <Card
      onClick={handleCourseDetailRoute}
      sx={{
        width: 300,
        flexShrink: 0,
        mr: 2,
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="160"
          image={course.thumbnail}
          alt={course.title}
        />
        <Button
          variant="contained"
          startIcon={<PlayCircleOutline />}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            bgcolor: 'rgba(0,0,0,0.6)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
          }}
        >
          미리보기
        </Button>
      </Box>

      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip
            label={course.level}
            size="small"
            color={
              course.level === 'beginner'
                ? 'success'
                : course.level === 'intermediate'
                  ? 'warning'
                  : 'error'
            }
          />
          {course.isNew && <Chip label="New" size="small" color="primary" />}
        </Stack>

        <Typography variant="subtitle1" gutterBottom noWrap>
          {course.title}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Box
            component="img"
            src={course.teacherImage}
            alt={course.teacherName}
            sx={{ width: 24, height: 24, borderRadius: '50%' }}
          />
          <Typography variant="body2" color="text.secondary">
            {course.teacherName}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Rating value={course.rating} readOnly precision={0.1} size="small" />
          <Typography variant="body2" color="text.secondary">
            ({course.reviewCount})
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" color="primary">
            {course.price.toLocaleString()}원
          </Typography>
          <BookmarkBorder />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CourseCard
