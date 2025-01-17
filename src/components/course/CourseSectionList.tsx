import { Box, Typography } from '@mui/material'
import ScrollControl from '../shared/ScrollControl'
import CourseCard from './CourseCard'
import { Course } from '@/models/course'

interface Props {
  title: string
  courses: Course[]
  scrollRef: React.RefObject<HTMLDivElement>
  onScroll: (direction: 'left' | 'right') => void
}

function CourseSectionList({ title, courses, scrollRef, onScroll }: Props) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <ScrollControl
          onLeft={() => onScroll('left')}
          onRight={() => onScroll('right')}
        />
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          pb: 2,
        }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  )
}

export default CourseSectionList
