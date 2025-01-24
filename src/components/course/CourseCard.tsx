import { TeacherCourse } from '@/models/teacher'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Box, Card, CardContent, Chip, Rating, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Spacing from '../shared/Spacing'
import CouresPreviewMenu from './CoursePreviewMenu'

interface Props {
  teacherCourse: TeacherCourse
  width?: string
}

function CourseCard({ teacherCourse, width }: Props) {
  const route = useRouter()
  const handleCourseDetailRoute = () => {
    route.push(`/courses/${teacherCourse.id}`)
  }

  return (
    <Card
      onClick={handleCourseDetailRoute}
      sx={{
        width: width ?? '100%',
        flexShrink: 0,
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          component={'img'}
          src={teacherCourse.imageUrls[0]}
          alt={teacherCourse.title}
          width={'100%'}
          height="160px"
          sx={{ objectFit: 'cover' }}
        />

        {teacherCourse.previewLectures.length > 0 && (
          <CouresPreviewMenu teacherCourse={teacherCourse} />
        )}

        {teacherCourse.appUser?.isBookmark === true ? (
          <Bookmark
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
            }}
          />
        ) : (
          <BookmarkBorder
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
            }}
          />
        )}
      </Box>

      <CardContent>
        <Typography variant="subtitle1" gutterBottom noWrap>
          {teacherCourse.title}
        </Typography>

        <Box display={'flex'} gap={1} alignItems={'center'} mb={1}>
          <Box
            component="img"
            src={teacherCourse?.teacher?.imageUrl}
            alt={teacherCourse?.teacher?.nickname}
            sx={{ width: 24, height: 24, borderRadius: '50%' }}
          />
          <Typography variant="body2" color="text.secondary">
            {teacherCourse?.teacher?.nickname}
          </Typography>
        </Box>

        <Box display={'flex'} gap={1} alignItems={'center'} mb={1}>
          <Rating
            value={teacherCourse?.statics?.reviewAverageRating}
            readOnly
            precision={0.1}
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            ({teacherCourse?.statics?.reviewCount})
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          {teacherCourse.price !== 0
            ? `${teacherCourse?.price?.toLocaleString()}원`
            : `무료`}
        </Typography>
        <Spacing size={4} />
        <Box display={'flex'} gap={1} alignItems={'center'} mb={1}>
          <Chip label={teacherCourse.courseLevelName} size="small" />
          {teacherCourse.tags.map((tag) => (
            <Chip label={tag} size="small" />
          ))}
          {/* {course.isNew && <Chip label="New" size="small" color="primary" />} */}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CourseCard
